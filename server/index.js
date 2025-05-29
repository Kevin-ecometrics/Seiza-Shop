import express from "express";
import cors from "cors";
import mysql from "mysql2";
import Stripe from "stripe";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const stripe = new Stripe(process.env.SECRET_KEY);

const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "seiza",
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});

const transporter = nodemailer.createTransport({
  host: "host11.registrar-servers.com",
  port: 465,
  secure: true, // true para 465, false para 587
  auth: {
    user: "meditate@seiza.shop",
    pass: "m3d1tat3seiz4",
  },
});

app.get("/stock", (req, res) => {
  const query = "SELECT stock FROM stock_producto";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching stock data:", err);
      return res.status(500).json({ error: "Database query failed" });
    }
    res.json(results);
  });
});

// Crear PaymentIntent y devolver clientSecret (sin guardar nada aún)
app.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount, currency, metadata } = req.body;

    if (!amount || !currency || !metadata) {
      return res.status(400).json({ error: "Faltan datos" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      metadata,
      payment_method_types: ["card"],
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error en create-payment-intent:", error);
    res.status(500).json({ error: "Error al crear el PaymentIntent" });
  }
});

app.post("/save-order", async (req, res) => {
  try {
    const {
      nombre_completo,
      email,
      telefono,
      direccion_calle,
      direccion_numero,
      direccion_colonia,
      direccion_ciudad,
      direccion_estado,
      direccion_cp,
      cantidad_comprada,
      isEn,
    } = req.body;

    // 1. Insertar la compra en la base de datos
    const insertCompraQuery = `
      INSERT INTO compras 
        (nombre_completo, email, telefono, direccion_calle, direccion_numero, direccion_colonia, direccion_ciudad, direccion_estado, direccion_cp, cantidad_comprada)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await connection
      .promise()
      .query(insertCompraQuery, [
        nombre_completo,
        email,
        telefono,
        direccion_calle,
        direccion_numero,
        direccion_colonia,
        direccion_ciudad,
        direccion_estado,
        direccion_cp,
        cantidad_comprada,
      ]);

    // 2. Actualizar el stock
    const updateStockQuery = `
      UPDATE stock_producto SET stock = stock - ? WHERE stock >= ?
    `;

    const [updateResult] = await connection
      .promise()
      .query(updateStockQuery, [cantidad_comprada, cantidad_comprada]);

    if (updateResult.affectedRows === 0) {
      return res
        .status(400)
        .json({ error: "No hay suficiente stock disponible" });
    }

    // 3. Configurar contenido del correo según idioma
    const subject = isEn
      ? "Order Confirmation - Seiza Shop"
      : "Confirmación de compra - Tienda Seiza";

    const html = isEn
      ? `
  <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #2e7d32;">Thank you for your purchase, ${nombre_completo}!</h2>
    <p style="font-size: 16px;">We've received your order for <strong>${cantidad_comprada} item(s)</strong>.</p>

    <h3 style="margin-top: 30px; color: #555;">Shipping Address</h3>
    <p style="line-height: 1.5;">
      ${direccion_calle} ${direccion_numero}, ${direccion_colonia}<br>
      ${direccion_ciudad}, ${direccion_estado}<br>
      ZIP ${direccion_cp}
    </p>
    <p><strong>Phone:</strong> ${telefono}</p>

    <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />

    <p style="font-size: 16px;">You'll receive another email once your order has shipped.</p>
    <p style="font-size: 16px;">Thanks again for shopping with us! 🛍️</p>
  </div>
  `
      : `
  <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #2e7d32;">¡Gracias por tu compra, ${nombre_completo}!</h2>
    <p style="font-size: 16px;">Hemos recibido tu pedido de <strong>${cantidad_comprada} producto(s)</strong>.</p>

    <h3 style="margin-top: 30px; color: #555;">Dirección de envío</h3>
    <p style="line-height: 1.5;">
      ${direccion_calle} ${direccion_numero}, ${direccion_colonia}<br>
      ${direccion_ciudad}, ${direccion_estado}<br>
      C.P. ${direccion_cp}
    </p>
    <p><strong>Teléfono:</strong> ${telefono}</p>

    <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />

    <p style="font-size: 16px;">Pronto recibirás otra notificación cuando se envíe tu pedido.</p>
    <p style="font-size: 16px;">¡Gracias por comprar con nosotros! 🛍️</p>
  </div>
  `;
    // 4. Enviar correo con Nodemailer
    await transporter.sendMail({
      from: isEn
        ? '"Seiza Shop" <meditate@seiza.shop>'
        : '"Tienda Seiza" <meditate@seiza.shop>',
      to: email,
      cc: "meditate@seiza.shop",
      subject,
      html,
    });

    // 5. Responder al frontend
    res.json({ message: "Compra guardada y correo enviado correctamente" });
  } catch (err) {
    console.error("Error guardando compra:", err);
    res.status(500).json({ error: "Error guardando la compra" });
  }
});

app.post("/api/send-email", async (req, res) => {
  try {
    const { nombre, apellidos, telefono, email, mensaje, isEn } = req.body;

    // Validar que todos los campos estén presentes
    if (!nombre || !apellidos || !telefono || !email || !mensaje) {
      return res.status(400).json({
        success: false,
        message: isEn
          ? "All fields are required"
          : "Todos los campos son requeridos",
      });
    }

    // Validar formato de email
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: isEn ? "Invalid email format" : "Formato de email inválido",
      });
    }

    // Configurar textos según el idioma
    const texts = {
      subject: isEn
        ? `New contact message from ${nombre} ${apellidos}`
        : `Nuevo mensaje de contacto de ${nombre} ${apellidos}`,

      title: isEn ? "New Contact Message" : "Nuevo Mensaje de Contacto",

      clientInfo: isEn ? "Client Information:" : "Información del Cliente:",

      labels: {
        name: isEn ? "Name:" : "Nombre:",
        phone: isEn ? "Phone:" : "Teléfono:",
        email: isEn ? "Email:" : "Email:",
        message: isEn ? "Message:" : "Mensaje:",
      },

      footer: isEn
        ? "This message was sent from seiza.shop contact form."
        : "Este mensaje fue enviado desde el formulario de contacto de seiza.shop.",

      date: isEn ? "Date:" : "Fecha:",
    };

    // Configurar el contenido del email - UN SOLO EMAIL
    const mailOptions = {
      from: isEn
        ? '"Seiza Shop" <meditate@seiza.shop>'
        : '"Tienda Seiza" <meditate@seiza.shop>',
      to: email,
      cc: "meditate@seiza.shop", // Tu email donde quieres recibir los mensajes
      subject: texts.subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8C5A2E; border-bottom: 2px solid #8C5A2E; padding-bottom: 10px;">
            ${texts.title}
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">${texts.clientInfo}</h3>
            <p><strong>${texts.labels.name}</strong> ${nombre} ${apellidos}</p>
            <p><strong>${texts.labels.phone}</strong> ${telefono}</p>
            <p><strong>${texts.labels.email}</strong> ${email}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #8C5A2E; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">${texts.labels.message}</h3>
            <p style="line-height: 1.6; color: #555;">${mensaje}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
            <p>${texts.footer}</p>
            <p>${texts.date} ${new Date().toLocaleString(
        isEn ? "en-US" : "es-MX",
        {
          timeZone: "America/Tijuana",
        }
      )}</p>
            <p><strong>${isEn ? "Language:" : "Idioma:"}</strong> ${
        isEn ? "English" : "Español"
      }</p>
          </div>
        </div>
      `,
      text: `
        ${texts.title}
        
        ${texts.labels.name} ${nombre} ${apellidos}
        ${texts.labels.phone} ${telefono}
        ${texts.labels.email} ${email}
        
        ${texts.labels.message}
        ${mensaje}
        
        ${texts.date} ${new Date().toLocaleString(isEn ? "en-US" : "es-MX", {
        timeZone: "America/Tijuana",
      })}
        ${isEn ? "Language:" : "Idioma:"} ${isEn ? "English" : "Español"}
      `,
    };

    // Enviar el email
    const info = await transporter.sendMail(mailOptions);

    // Respuesta exitosa
    res.status(200).json({
      success: true,
      message: isEn ? "Email sent successfully" : "Email enviado correctamente",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Error enviando email:", error);

    res.status(500).json({
      success: false,
      message: isEn
        ? "Internal server error while sending email"
        : "Error interno del servidor al enviar el email",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
