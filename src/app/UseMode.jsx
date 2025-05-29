"use client";

import React from "react";
import { useLanguage } from "./context/LanguageContext";
import { motion } from "framer-motion";

function UseMode() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const steps = [
    {
      img: "/mode1.png",
      title: isEn ? "1. Sit on your bench" : "1. Siéntate en tu banco",
      text: isEn
        ? "Place it under your pelvis and align your spine comfortably."
        : "Colócalo bajo tu pelvis y alinea tu columna de forma cómoda.",
    },
    {
      img: "/mode2.png",
      title: isEn ? "2. Adjust your posture" : "2. Ajusta tu postura",
      text: isEn
        ? "Ensure your knees rest gently on the floor and your back stays upright."
        : "Asegúrate de que tus rodillas descansen suavemente en el suelo y tu espalda se mantenga erguida.",
    },
    {
      img: "/mode3.png",
      title: isEn ? "3. Breathe and meditate" : "3. Respira y medita",
      text: isEn
        ? "Focus on your breathing and enter a deep, relaxed state."
        : "Concéntrate en tu respiración y entra en un estado profundo y relajado.",
    },
  ];

  return (
    <div className="bg-[url(/background.webp)] bg-cover bg-center relative py-16">
      <div className="conatiner mx-auto md:w-[90%]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-[50px] md:text-[60px] text-[#1E1E1E] font-bold text-center md:text-start mb-12 md:px-16"
        >
          {isEn ? "How to Use" : "Modo de Uso"}
        </motion.h1>

        <div className="flex justify-between items-center md:flex-row flex-col md:gap-16 ">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 + idx * 0.2, ease: "easeOut" }}
              className="flex flex-col items-center text-center"
            >
              <img src={step.img} alt={`mode-${idx}`} className="mb-6" />
              <h2 className="text-2xl font-bold text-[#8C5A2E] mb-3">
                {step.title}
              </h2>
              <p className="text-lg text-[#1E1E1E] max-w-[300px]">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UseMode;
