"use client";

import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useLanguage } from "../context/LanguageContext";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

function ContactPage() {
  const { language } = useLanguage();
  const isEn = language === "en";
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    telefono: "",
    email: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.nombre.trim())
      newErrors.nombre = isEn
        ? "First name is required"
        : "El nombre es obligatorio";
    if (!formData.apellidos.trim())
      newErrors.apellidos = isEn
        ? "Last name is required"
        : "Los apellidos son obligatorios";
    if (!formData.telefono.trim())
      newErrors.telefono = isEn
        ? "Phone is required"
        : "El teléfono es obligatorio";
    if (!formData.email.trim())
      newErrors.email = isEn ? "Email is required" : "El correo es obligatorio";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = isEn ? "Invalid email" : "Correo inválido";
    if (!formData.mensaje.trim())
      newErrors.mensaje = isEn
        ? "Message is required"
        : "El mensaje es obligatorio";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_URL}api/send-email`,
          {
            ...formData,
            isEn: isEn,
          }
        );

        if (response.data.success) {
          toast.success(
            isEn
              ? "Message sent successfully!"
              : "¡Mensaje enviado exitosamente!"
          );
          setFormData({
            nombre: "",
            apellidos: "",
            telefono: "",
            email: "",
            mensaje: "",
          });
        } else {
          toast.error(
            isEn
              ? "Something went wrong. Please try again."
              : "Algo salió mal. Intenta de nuevo."
          );
        }
      } catch (error) {
        console.error("Error sending email:", error);
        toast.error(
          isEn
            ? "Error sending message. Please try again."
            : "Error al enviar mensaje. Inténtalo de nuevo."
        );
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  return (
    <div>
      <Toaster position="top-right" />
      <Navbar />
      <section className="relative">
        <motion.img
          src="/banner_contact.webp"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden md:block"
          alt="contact"
        />

        <motion.img
          src="/banner_contact_mobile.webp"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="block md:hidden"
          alt="contact"
        />
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center text-[48px] md:text-[120px] text-[#8C5A2E] font-bold pointer-events-none select-none drop-shadow-lg"
        >
          {isEn ? "Contact" : "Contacto"}
        </motion.h1>
      </section>
      <section className="flex flex-col bg-[url(/background.webp)] bg-cover bg-center items-center px-4 py-16 ">
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <input
                type="text"
                name="nombre"
                placeholder={isEn ? "First Name" : "Nombre"}
                value={formData.nombre}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#8C5A2E] transition-all bg-white text-[#8C5A2E] ${
                  errors.nombre ? "border-red-400" : "border-gray-200"
                }`}
              />
              {errors.nombre && (
                <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="apellidos"
                placeholder={isEn ? "Last Name" : "Apellidos"}
                value={formData.apellidos}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#8C5A2E] transition-all bg-white text-[#8C5A2E] ${
                  errors.apellidos ? "border-red-400" : "border-gray-200"
                }`}
              />
              {errors.apellidos && (
                <p className="text-red-500 text-xs mt-1">{errors.apellidos}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <input
                type="tel"
                name="telefono"
                placeholder={isEn ? "Phone number" : "Número de teléfono"}
                value={formData.telefono}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#8C5A2E] transition-all bg-white text-[#8C5A2E] ${
                  errors.telefono ? "border-red-400" : "border-gray-200"
                }`}
              />
              {errors.telefono && (
                <p className="text-red-500 text-xs mt-1">{errors.telefono}</p>
              )}
              <div className="mt-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#8C5A2E] transition-all bg-white text-[#8C5A2E] ${
                    errors.email ? "border-red-400" : "border-gray-200"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="text-start">
              <h3 className="text-xl font-bold mb-2">
                {isEn ? "Chat support available" : "Soporte de chat disponible"}
              </h3>
              <p className="text-gray-600 mb-2">
                {isEn
                  ? "Our support hours are: Monday to Friday, 8:00 a.m. - 6:00 p.m."
                  : "Nuestro horario de atención es de: Lunes a Viernes de 8:00 a.m. - 6:00 p.m."}
              </p>
              <p className="text-gray-700 font-semibold">Tel: (000) 000 0000</p>
            </div>
          </div>
          <div className="mb-6">
            <textarea
              name="mensaje"
              placeholder={isEn ? "Your message..." : "Tu mensaje..."}
              value={formData.mensaje}
              onChange={handleChange}
              rows="6"
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8C5A2E] transition-all resize-none bg-white text-[#8C5A2E] ${
                errors.mensaje ? "border-red-400" : "border-gray-200"
              }`}
            ></textarea>
            {errors.mensaje && (
              <p className="text-red-500 text-xs mt-1">{errors.mensaje}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`px-8 py-3 rounded-full text-lg shadow transition font-semibold ${
              loading
                ? "bg-gray-400 cursor-not-allowed text-gray-200"
                : "bg-[#8C5A2E] hover:bg-[#6b411c] text-white"
            }`}
          >
            {loading
              ? isEn
                ? "Sending..."
                : "Enviando..."
              : isEn
              ? "Send Message"
              : "Enviar mensaje"}
          </button>
          <p className="mt-8 text-xl">
            <strong>
              {isEn ? "Address:" : "Dirección:"} <br /> <br />
            </strong>
            {isEn
              ? "Calle Ignacio Zaragoza, Gustavo Madero #8169-306, C.P. 22000 Tijuana, Baja California, Mexico."
              : "Calle Ignacio Zaragoza, Gustavo Madero #8169-306, C.P. 22000 Tijuana, Baja California, México."}
          </p>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default ContactPage;
