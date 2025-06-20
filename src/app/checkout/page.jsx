"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useLanguage } from "../context/LanguageContext";

// Configura tu public key de Stripe aquí
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE);

// Componente para el formulario de pago con Stripe
function CheckoutForm({
  onSuccess,
  nombre,
  email,
  telefono,
  direccion,
  cantidad_comprada,
}) {
  const { language } = useLanguage();
  const isEn = language === "en";
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);
    setError(null);

    const { error: stripeError, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin + "/success",
      },
      redirect: "if_required",
    });

    if (stripeError) {
      setError(stripeError.message);
      setIsProcessing(false);
      return;
    }

    if (paymentIntent && paymentIntent.status === "succeeded") {
      // Guardar la compra en backend solo después de pago confirmado
      try {
        await axios.post(`${process.env.NEXT_PUBLIC_URL}save-order`, {
          nombre_completo: nombre,
          email,
          telefono,
          direccion_calle: direccion.calle,
          direccion_numero: direccion.numero,
          direccion_colonia: direccion.colonia,
          direccion_ciudad: direccion.ciudad,
          direccion_estado: direccion.estado,
          direccion_cp: direccion.cp,
          cantidad_comprada,
          isEn,
        });
        onSuccess();
      } catch (err) {
        setError("Error guardando la compra en el servidor.");
      }
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />
      {error && (
        <p className="text-red-600 text-center mt-4 font-medium bg-red-50 py-2 rounded">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full flex items-center justify-center bg-[#8C5A2E] hover:bg-[#8C5A2E]/90 text-white font-bold py-3 rounded-lg mt-4 text-lg shadow transition disabled:opacity-60"
      >
        {isProcessing && (
          <svg
            className="animate-spin h-5 w-5 mr-2 text-white"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        )}
        {isEn ? "Pay" : "Pagar"}
      </button>
    </form>
  );
}

function Page() {
  const [dolar, setDolar] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const dolarValue = window.sessionStorage.getItem("dolar");
      setDolar(dolarValue);
    }
  }, []);

  const { language } = useLanguage();
  const isEn = language === "en";
  const router = useRouter();
  const [cart, setCart] = useState([]);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion_calle, setDireccionCalle] = useState("");
  const [direccion_numero, setDireccionNumero] = useState("");
  const [direccion_colonia, setDireccionColonia] = useState("");
  const [direccion_ciudad, setDireccionCiudad] = useState("");
  const [direccion_estado, setDireccionEstado] = useState("");
  const [direccion_cp, setDireccionCP] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [clientSecret, setClientSecret] = useState(""); // Para Stripe

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = window.sessionStorage.getItem("checkout_cart");
      if (stored) setCart(JSON.parse(stored));
    }
  }, []);

  const cantidad_comprada = cart.reduce(
    (acc, item) => acc + (item.quantity || 0),
    0
  );

  const shippingUSD = 10;
  const shipping = isEn ? shippingUSD : shippingUSD * dolar;
  const total = cart.reduce((acc, item) => {
    const price = item.total || 0; // item.total en USD
    return acc + (isEn ? price : price * dolar);
  }, 0);

  const totalWithShipping = total + shipping;

  // Validaciones de campos
  const validateFields = () => {
    const errors = {};
    if (!nombre.trim())
      errors.nombre = isEn ? "Name is required." : "El nombre es requerido.";

    if (!email.trim()) {
      errors.email = isEn
        ? "Email is required."
        : "El correo electrónico es requerido.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email.trim())) {
      errors.email = isEn
        ? "Invalid email address."
        : "Correo electrónico inválido.";
    }

    if (!telefono.trim()) {
      errors.telefono = isEn
        ? "Phone is required."
        : "El teléfono es requerido.";
    } else if (!/^\d{10}$/.test(telefono.trim())) {
      errors.telefono = isEn
        ? "Phone must have 10 digits."
        : "El teléfono debe tener 10 dígitos.";
    }

    if (!direccion_calle.trim())
      errors.direccion_calle = isEn
        ? "Street is required."
        : "La calle es requerida.";

    if (!direccion_numero.trim())
      errors.direccion_numero = isEn
        ? "Number is required."
        : "El número es requerido.";

    if (!direccion_colonia.trim())
      errors.direccion_colonia = isEn
        ? "Neighborhood is required."
        : "La colonia es requerida.";

    if (!direccion_ciudad.trim())
      errors.direccion_ciudad = isEn
        ? "City is required."
        : "La ciudad es requerida.";

    if (!direccion_estado.trim())
      errors.direccion_estado = isEn
        ? "State is required."
        : "El estado es requerido.";

    if (!direccion_cp.trim()) {
      errors.direccion_cp = isEn
        ? "Zip code is required."
        : "El código postal es requerido.";
    } else if (!/^\d{5}$/.test(direccion_cp.trim())) {
      errors.direccion_cp = isEn
        ? "Zip code must have 5 digits."
        : "El código postal debe tener 5 dígitos.";
    }

    if (!cantidad_comprada)
      errors.cantidad_comprada = isEn
        ? "The cart cannot be empty."
        : "El carrito no puede estar vacío.";

    return errors;
  };

  // Limpiar error de campo al escribir
  const handleFieldChange = (setter, field) => (e) => {
    // Solo permitir dígitos en el campo teléfono
    if (field === "telefono") {
      const value = e.target.value.replace(/\D/g, "");
      setter(value);
      if (fieldErrors[field]) {
        setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
      }
      if (error) setError("");
      return;
    }
    setter(e.target.value);
    if (fieldErrors[field]) {
      setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (error) setError("");
  };

  // Función para crear PaymentIntent y obtener clientSecret
  const crearPaymentIntent = async () => {
    try {
      const amountInCents = Math.round(totalWithShipping * 100);

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}create-payment-intent`,
        {
          amount: amountInCents,
          currency: isEn ? "usd" : "mxn",
          metadata: {
            nombre_completo: nombre,
            email,
            telefono,
            direccion_calle,
            direccion_numero,
            direccion_colonia,
            direccion_ciudad,
            direccion_estado,
            direccion_cp,
            cantidad_comprada,
          },
        }
      );

      return res.data.clientSecret;
    } catch (err) {
      console.error("Error al crear PaymentIntent:", err);
      throw new Error("Error al iniciar el pago.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");
    setError("");
    setFieldErrors({});
    const errors = validateFields();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setError(
        isEn
          ? "Please correct any errors before proceeding."
          : "Por favor corrige los errores antes de continuar."
      );
      return;
    }

    setIsSubmitting(true);
    try {
      // Primero creamos PaymentIntent para obtener clientSecret
      const secret = await crearPaymentIntent();
      setClientSecret(secret);
    } catch (err) {
      setError(err.message);
      setIsSubmitting(false);
    }
  };

  // Callback para cuando Stripe confirme el pago
  const onPaymentSuccess = () => {
    const resumenCompra = {
      nombre,
      email,
      telefono,
      direccion_calle,
      direccion_numero,
      direccion_colonia,
      direccion_ciudad,
      direccion_estado,
      direccion_cp,
      cantidad_comprada,
      total,
    };
    sessionStorage.setItem("resumenCompra", JSON.stringify(resumenCompra));
    setMensaje(
      isEn
        ? "Successful purchase! Redirecting..."
        : "¡Compra realizada con éxito! Redirigiendo..."
    );
    setTimeout(() => {
      router.push("/success");
    }, 2000);
  };

  return (
    <div className="min-h-screen py-10 px-2 bg-[url(/background.webp)] bg-cover bg-center ">
      <div className="max-w-4xl mx-auto rounded-2xl">
        <div className="px-8 py-8">
          <h1 className="text-5xl font-extrabold text-[#8C5A2E] mb-2 tracking-tight">
            {isEn ? "Checkout" : "Checkout"}
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-8 px-8 py-8">
          <div className="flex-1">
            {cart.length === 0 ? (
              <div className="text-gray-500 text-center py-12 text-lg">
                {isEn
                  ? "There are no products in the cart."
                  : "No hay productos en el carrito."}
              </div>
            ) : (
              <ul>
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col items-start gap-4 "
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="object-contain rounded-lg border-2 border-[#8C5A2E]"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold text-gray-900 text-xl mb-4">
                        {item.alt}
                      </div>
                      <div className="text-lg text-gray-500">
                        {isEn ? "Quantity" : "Cantidad"}:{" "}
                        <span className="font-bold text-gray-700 text-xl">
                          {item.quantity}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {cart.length > 0 && (
              <div className="py-4 text-[#8C5A2E]">
                <div className="flex justify-between items-center bg-white rounded-3xl px-2 py-2  mb-2">
                  <span className="font-medium">
                    {isEn ? "Subtotal" : "Subtotal"}
                  </span>
                  <span className=" font-bold text-lg">
                    ${total.toLocaleString("es-MX")}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-2 bg-white rounded-3xl px-2 py-2 ">
                  <span className=" text-sm">
                    {isEn ? "Shipping" : "Envío"}
                  </span>
                  <span className=" text-sm">
                    ${shipping.toLocaleString("es-MX")}
                  </span>
                </div>
                <div className="w-full bg-[#8C5A2E] h-0.5 mb-4 mt-4"></div>
                <div className="flex justify-between items-center bg-white rounded-3xl px-2 py-2 ">
                  <span className="text-xl font-bold ">
                    {isEn ? "Total" : "Total"}
                  </span>
                  <span className="text-2xl font-extrabold ">
                    ${totalWithShipping.toLocaleString("es-MX")}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Formulario */}
          <div className="flex-1 md:max-w-md md:mx-auto">
            <h2 className="text-2xl font-bold text-[#3B3631] mb-4">
              {isEn ? "Contact Information" : "Información de contacto"}
            </h2>

            {/* Si ya tenemos clientSecret mostramos el modal de Stripe */}
            {clientSecret ? (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
                <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md md:max-w-xl relative">
                  <button
                    onClick={() => {
                      setClientSecret("");
                      setIsSubmitting(false);
                    }}
                    className="absolute top-2 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
                    aria-label={
                      isEn ? "Close payment modal" : "Cerrar modal de pago"
                    }
                  >
                    &times;
                  </button>
                  <Elements
                    stripe={stripePromise}
                    options={{
                      clientSecret,
                      appearance: {
                        theme: "stripe",
                        variables: {
                          colorPrimary: "#8C5A2E",
                          colorBackground: "#fff",
                        },
                      },
                    }}
                  >
                    <CheckoutForm
                      onSuccess={onPaymentSuccess}
                      nombre={nombre}
                      email={email}
                      telefono={telefono}
                      direccion={{
                        calle: direccion_calle,
                        numero: direccion_numero,
                        colonia: direccion_colonia,
                        ciudad: direccion_ciudad,
                        estado: direccion_estado,
                        cp: direccion_cp,
                      }}
                      cantidad_comprada={cantidad_comprada}
                    />{" "}
                  </Elements>
                </div>
              </div>
            ) : (
              <form
                className="space-y-4"
                onSubmit={handleSubmit}
                noValidate
                autoComplete="on"
              >
                <div>
                  <input
                    type="text"
                    placeholder={isEn ? "Full name" : "Nombre completo"}
                    value={nombre}
                    onChange={handleFieldChange(setNombre, "nombre")}
                    className={`w-full border ${
                      fieldErrors.nombre
                        ? "border-red-400 ring-2 ring-red-200"
                        : "border-[#8C5A2E] bg-white text-[#8C5A2E]"
                    } rounded-lg px-4 py-2 focus:outline-none `}
                    required
                    autoComplete="name"
                  />
                  {fieldErrors.nombre && (
                    <p className="text-red-500 text-xs mt-1">
                      {fieldErrors.nombre}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder={isEn ? "Email address" : "Correo electrónico"}
                    value={email}
                    onChange={handleFieldChange(setEmail, "email")}
                    className={`w-full border ${
                      fieldErrors.email
                        ? "border-red-400 ring-2 ring-red-200"
                        : "border-[#8C5A2E] bg-white text-[#8C5A2E]"
                    } rounded-lg px-4 py-2 focus:outline-none `}
                    required
                    autoComplete="email"
                  />
                  {fieldErrors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder={isEn ? "Phone number" : "Teléfono"}
                    value={telefono}
                    onChange={handleFieldChange(setTelefono, "telefono")}
                    className={`w-full border ${
                      fieldErrors.telefono
                        ? "border-red-400 ring-2 ring-red-200"
                        : "border-[#8C5A2E] bg-white text-[#8C5A2E]"
                    } rounded-lg px-4 py-2 focus:outline-none `}
                    required
                    autoComplete="tel"
                    maxLength={10}
                  />
                  {fieldErrors.telefono && (
                    <p className="text-red-500 text-xs mt-1">
                      {fieldErrors.telefono}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder={isEn ? "Street" : "Calle"}
                    value={direccion_calle}
                    onChange={handleFieldChange(
                      setDireccionCalle,
                      "direccion_calle"
                    )}
                    className={`w-full border ${
                      fieldErrors.direccion_calle
                        ? "border-red-400 ring-2 ring-red-200"
                        : "border-[#8C5A2E] bg-white text-[#8C5A2E]"
                    } rounded-lg px-4 py-2 focus:outline-none `}
                    required
                    autoComplete="street-address"
                  />
                  {fieldErrors.direccion_calle && (
                    <p className="text-red-500 text-xs mt-1">
                      {fieldErrors.direccion_calle}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder={isEn ? "Number" : "Número"}
                    value={direccion_numero}
                    onChange={handleFieldChange(
                      setDireccionNumero,
                      "direccion_numero"
                    )}
                    className={`w-full border ${
                      fieldErrors.direccion_numero
                        ? "border-red-400 ring-2 ring-red-200"
                        : "border-[#8C5A2E] bg-white text-[#8C5A2E]"
                    } rounded-lg px-4 py-2 focus:outline-none `}
                    required
                    autoComplete="address-line2"
                  />
                  {fieldErrors.direccion_numero && (
                    <p className="text-red-500 text-xs mt-1">
                      {fieldErrors.direccion_numero}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder={isEn ? "Neighborhood" : "Colonia"}
                    value={direccion_colonia}
                    onChange={handleFieldChange(
                      setDireccionColonia,
                      "direccion_colonia"
                    )}
                    className={`w-full border ${
                      fieldErrors.direccion_colonia
                        ? "border-red-400 ring-2 ring-red-200"
                        : "border-[#8C5A2E] bg-white text-[#8C5A2E]"
                    } rounded-lg px-4 py-2 focus:outline-none `}
                    required
                    autoComplete="address-level2"
                  />
                  {fieldErrors.direccion_colonia && (
                    <p className="text-red-500 text-xs mt-1">
                      {fieldErrors.direccion_colonia}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder={isEn ? "City" : "Ciudad"}
                    value={direccion_ciudad}
                    onChange={handleFieldChange(
                      setDireccionCiudad,
                      "direccion_ciudad"
                    )}
                    className={`w-full border ${
                      fieldErrors.direccion_ciudad
                        ? "border-red-400 ring-2 ring-red-200"
                        : "border-[#8C5A2E] bg-white text-[#8C5A2E]"
                    } rounded-lg px-4 py-2 focus:outline-none `}
                    required
                    autoComplete="address-level1"
                  />
                  {fieldErrors.direccion_ciudad && (
                    <p className="text-red-500 text-xs mt-1">
                      {fieldErrors.direccion_ciudad}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder={isEn ? "State" : "Estado"}
                    value={direccion_estado}
                    onChange={handleFieldChange(
                      setDireccionEstado,
                      "direccion_estado"
                    )}
                    className={`w-full border ${
                      fieldErrors.direccion_estado
                        ? "border-red-400 ring-2 ring-red-200"
                        : "border-[#8C5A2E] bg-white text-[#8C5A2E]"
                    } rounded-lg px-4 py-2 focus:outline-none `}
                    required
                    autoComplete="address-level1"
                  />
                  {fieldErrors.direccion_estado && (
                    <p className="text-red-500 text-xs mt-1">
                      {fieldErrors.direccion_estado}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder={isEn ? "Zip code" : "Código postal"}
                    value={direccion_cp}
                    onChange={handleFieldChange(setDireccionCP, "direccion_cp")}
                    className={`w-full border ${
                      fieldErrors.direccion_cp
                        ? "border-red-400 ring-2 ring-red-200"
                        : "border-[#8C5A2E] bg-white text-[#8C5A2E]"
                    } rounded-lg px-4 py-2 focus:outline-none `}
                    required
                    maxLength={5}
                    autoComplete="postal-code"
                  />
                  {fieldErrors.direccion_cp && (
                    <p className="text-red-500 text-xs mt-1">
                      {fieldErrors.direccion_cp}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center bg-[#8C5A2E] hover:bg-[#8C5A2E]/90 cursor-pointer text-white font-bold py-3 rounded-lg mt-4 text-lg shadow transition disabled:opacity-60"
                >
                  {isSubmitting && (
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                  )}
                  {isEn ? "Continue with Stripe" : "Continuar con Stripe"}
                </button>

                {error && (
                  <p className="text-red-600 text-center mt-4 font-medium bg-red-50 py-2 rounded">
                    {error}
                  </p>
                )}
              </form>
            )}

            {mensaje && (
              <p className="text-green-600 font-bold mt-6 text-center text-lg">
                {mensaje}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
