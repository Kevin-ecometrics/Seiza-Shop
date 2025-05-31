"use client";
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
function About() {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <div className="bg-[url(/background.webp)] bg-cover bg-center relative py-12 px-4 flex md:justify-start justify-center items-center flex-col">
      <div className="grid grid-cols-1 md:grid-cols-3 md:px-8 gap-12">
        <div className="bg-[#D9D9D9] h-full w-auto"></div>
        <div className="col-span-2">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:text-[60px] text-[40px] text-[#1E1E1E] font-bold text-start"
          >
            {isEn
              ? "Meditate and protect your body!"
              : "¡Medita y protege tu cuerpo!"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-seiza-cuaternario font-normal text-[25px] md:text-[35px] text-balance text-start mb-8"
          >
            {isEn
              ? "Its solid natural wood structure makes it a fundamental piece in any meditation space. Each bench is handcrafted with dedication, built to support you for many years."
              : "Su estructura firme de madera natural lo convierte en un elemento esencial en cualquier espacio de meditación. Cada banquito está hecho a mano con dedicación, pensado para acompañarte durante muchos años."}
          </motion.p>
          <div className="md:flex">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-seiza-cuaternario font-normal text-[25px] md:text-[35px] text-balance text-start"
            >
              {isEn
                ? "Thoughtfully designed to support your meditation practice, it allows you to hold the Seiza posture comfortably and naturally. Its ergonomic form relieves pressure on your knees and ankles, encouraging longer and deeper sessions."
                : "Diseñado para apoyar tu práctica de meditación, permite mantener la postura Seiza de manera cómoda y natural. Su diseño ergonómico alivia la presión en rodillas y tobillos, facilitando sesiones más prolongadas y profundas."}
            </motion.p>
            <img src="/about_image.png" className="md:h-96" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
