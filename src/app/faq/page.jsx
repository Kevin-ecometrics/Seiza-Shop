"use client";

import React, { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "../Navbar";
import Footer from "../Footer";
import { useLanguage } from "../context/LanguageContext";

function BlogPage() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (key) => {
    setOpenSection((prev) => (prev === key ? null : key));
  };

  const getAccordionClasses = (theme, isOpen) => {
    if (isOpen) {
      return "bg-[#FCF7F7] text-black shadow-lg";
    }
    if (theme === "compras" || theme === "devoluciones") {
      return "bg-[#57F2E3] text-black hover:bg-[#4DE8D9] transition-colors duration-200";
    }
    return "bg-[#D9ADBD] text-white hover:bg-[#C99BAF] transition-colors duration-200";
  };

  const contentVariants = {
    collapsed: {
      opacity: 0,
      height: 0,
      scaleY: 0.98,
      y: -5,
      transition: {
        duration: 0.15,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      scaleY: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  };

  const chevronVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  const faqData = {
    compras: [
      {
        question: isEn
          ? "First question for FAQ section?"
          : "¿Primera pregunta para sección de preguntas frecuentes?",
        answer: isEn
          ? "False answer for frequent false question. Maturation in just eight and after that piorno of occurrence or savings also pretends to protect privacy."
          : "Respuesta falsa para pregunta frecuente falsa. La maduración en solo ocho y después que piorno de occurrencia o agarro también pretende proteger la privacidad.",
      },
      {
        question: isEn
          ? "Second question for FAQ section?"
          : "¿Segunda pregunta para sección de preguntas frecuentes?",
        answer: isEn
          ? "Studies from the American Heart Association have shown that regular political power can reduce stroke risk by up to 34%."
          : "Estufas de la American Heart Association denominaron que su político regular poder reducir el riesgo de ictus hasta en un 34%.",
      },
      {
        question: isEn
          ? "Third question for FAQ section?"
          : "¿Tercera pregunta para sección de preguntas frecuentes?",
        answer: isEn
          ? "Answer for the third frequent question."
          : "Respuesta para la tercera pregunta frecuente.",
      },
      {
        question: isEn
          ? "Fourth question for FAQ section?"
          : "¿Cuarta pregunta para sección de preguntas frecuentes?",
        answer: isEn
          ? "Answer for the fourth frequent question."
          : "Respuesta para la cuarta pregunta frecuente.",
      },
    ],
    envios: [
      {
        question: isEn
          ? "First shipping question?"
          : "¿Primera pregunta para sección de preguntas frecuentes?",
        answer: isEn
          ? "False answer for frequent false question. Maturation in just eight and after that piorno of occurrence or savings also pretends to protect privacy."
          : "Respuesta falsa para pregunta frecuente falsa. La maduración en solo ocho y después que piorno de occurrencia o agarro también pretende proteger la privacidad.",
      },
      {
        question: isEn
          ? "Second shipping question?"
          : "¿Segunda pregunta para sección de preguntas frecuentes?",
        answer: isEn
          ? "Studies from the American Heart Association have shown that regular political power can reduce stroke risk by up to 34%."
          : "Estufas de la American Heart Association denominaron que su político regular poder reducir el riesgo de ictus hasta en un 34%.",
      },
      {
        question: isEn
          ? "Third shipping question?"
          : "¿Tercera pregunta para sección de preguntas frecuentes?",
        answer: isEn
          ? "Answer for the third shipping question."
          : "Respuesta para la tercera pregunta frecuente.",
      },
      {
        question: isEn
          ? "Fourth shipping question?"
          : "¿Cuarta pregunta para sección de preguntas frecuentes?",
        answer: isEn
          ? "Answer for the fourth shipping question."
          : "Respuesta para la cuarta pregunta frecuente.",
      },
    ],
    devoluciones: [
      {
        question: isEn
          ? "First return question?"
          : "¿Primera pregunta para sección de preguntas frecuentes?",
        answer: isEn
          ? "False answer for frequent false question. Maturation in just eight and after that piorno of occurrence or savings also pretends to protect privacy."
          : "Respuesta falsa para pregunta frecuente falsa. La maduración en solo ocho y después que piorno de occurrencia o agarro también pretende proteger la privacidad.",
      },
      {
        question: isEn
          ? "Second return question?"
          : "¿Segunda pregunta para sección de preguntas frecuentes?",
        answer: isEn
          ? "Studies from the American Heart Association have shown that regular political power can reduce stroke risk by up to 34%."
          : "Estufas de la American Heart Association denominaron que su político regular poder reducir el riesgo de ictus hasta en un 34%.",
      },
      {
        question: isEn
          ? "Third return question?"
          : "¿Tercera pregunta para sección de preguntas frecuentes?",
        answer: isEn
          ? "Answer for the third return question."
          : "Respuesta para la tercera pregunta frecuente.",
      },
      {
        question: isEn
          ? "Fourth return question?"
          : "¿Cuarta pregunta para sección de preguntas frecuentes?",
        answer: isEn
          ? "Answer for the fourth return question."
          : "Respuesta para la cuarta pregunta frecuente.",
      },
    ],
    garantia: [
      {
        question: isEn
          ? "First warranty question?"
          : "¿Primera pregunta sobre garantía?",
        answer: isEn
          ? "Answer for the first warranty question."
          : "Respuesta para la primera pregunta sobre garantía.",
      },
      {
        question: isEn
          ? "Second warranty question?"
          : "¿Segunda pregunta sobre garantía?",
        answer: isEn
          ? "Answer for the second warranty question."
          : "Respuesta para la segunda pregunta sobre garantía.",
      },
      {
        question: isEn
          ? "Third warranty question?"
          : "¿Tercera pregunta sobre garantía?",
        answer: isEn
          ? "Answer for the third warranty question."
          : "Respuesta para la tercera pregunta sobre garantía.",
      },
      {
        question: isEn
          ? "Fourth warranty question?"
          : "¿Cuarta pregunta sobre garantía?",
        answer: isEn
          ? "Answer for the fourth warranty question."
          : "Respuesta para la cuarta pregunta sobre garantía.",
      },
    ],
  };

  const renderAccordion = (section, data) => (
    <div className="mb-8 space-y-2">
      {data.map((faq, idx) => {
        const key = `${section}-${idx}`;
        const isOpen = openSection === key;

        return (
          <motion.div
            key={key}
            layout
            layoutId={key}
            className={`rounded-lg overflow-hidden ${getAccordionClasses(
              section,
              isOpen
            )}`}
            initial={false}
            animate={{
              scale: isOpen ? 1.01 : 1,
            }}
            transition={{
              duration: 0.15,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
          >
            <motion.button
              type="button"
              onClick={() => toggleSection(key)}
              className="w-full px-6 py-4 text-left flex justify-between items-center font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8C5A2E] active:scale-[0.99] transition-transform duration-100"
              whileHover={{ scale: 1.005 }}
              whileTap={{ scale: 0.995 }}
            >
              <span className="pr-4">{faq.question}</span>
              <motion.div
                variants={chevronVariants}
                animate={isOpen ? "open" : "closed"}
                transition={{
                  duration: 0.15,
                  ease: [0.04, 0.62, 0.23, 0.98],
                }}
                className="flex-shrink-0"
              >
                <IoChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.button>

            <AnimatePresence mode="wait" initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={contentVariants}
                  className="px-6 py-4 border-t border-black/10"
                  style={{
                    overflow: "hidden",
                    originY: 0,
                  }}
                >
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                      duration: 0.15,
                      delay: 0.05,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                    className="text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <div>
      <Navbar />

      <section className="relative">
        <motion.img
          src="/3. Banners SEIZA.webp"
          className="h-screen w-full object-cover"
          alt="banner"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.h1
          className="absolute bottom-10 left-10 text-[80px] md:text-[150px] text-white font-bold drop-shadow-[4px_4px_8px_rgba(0,0,0,0.8)] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] stroke-2 stroke-black"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {isEn ? "Frequently Asked Questions" : "Preguntas Frecuentes"}
        </motion.h1>
      </section>

      <section className="bg-[url(/background.webp)] bg-cover bg-center">
        <motion.div
          className="px-14 py-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {!isEn && (
            <motion.p
              className="text-[30px] text-black text-justify mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {isEn
                ? "Beyond being a spiritual practice, science supports its physical, emotional, and cognitive benefits. In a world that is increasingly fast-paced, competitive, and lacking in empathy, work, our activities, and even daily interactions often overwhelm us with a heavy fog of stress and what we know as burnout. Therefore, the practice of meditation has become increasingly popular."
                : "Más allá de una práctica espiritual, la ciencia respalda sus beneficios físicos, emocionales y cognitivos. En un mundo tan acelerado, competitivo y con ausencia de empatía cada vez el trabajo, nuestras actividades e incluso la convivencia nos llena de una bruma espesa de agobio y lo que conocemos como burnout, por lo tanto, la práctica de la meditación ha tenido más auge"}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h1 className="font-bold text-4xl mb-6 text-[#8C5A2E]">
              {isEn ? "Purchases" : "Compras"}
            </h1>
            {renderAccordion("compras", faqData.compras)}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h1 className="font-bold text-4xl mb-6 text-[#8C5A2E]">
              {isEn ? "Shipping" : "Envios"}
            </h1>
            {renderAccordion("envios", faqData.envios)}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <h1 className="font-bold text-4xl mb-6 text-[#8C5A2E]">
              {isEn ? "Returns" : "Devoluciones"}
            </h1>
            {renderAccordion("devoluciones", faqData.devoluciones)}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <h1 className="font-bold text-4xl mb-6 text-[#8C5A2E]">
              {isEn ? "Product Warranty" : "Garantía de Producto"}
            </h1>
            {renderAccordion("garantia", faqData.garantia)}
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default BlogPage;
