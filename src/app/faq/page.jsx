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
      return "bg-[#FCF7F7] text-black shadow-xl ";
    }
    if (theme === "compras" || theme === "devoluciones") {
      return "bg-[#ffff] text-black  transition-all duration-300 ease-out border border-gray-200";
    }
    return "bg-[#8C5A2E] text-white  transition-all duration-300 ease-out ";
  };

  // Variantes mejoradas para el contenido
  const contentVariants = {
    collapsed: {
      opacity: 0,
      height: 0,
      scaleY: 0.95,
      y: -8,
      transition: {
        duration: 0.25,
        ease: [0.25, 0.46, 0.45, 0.94],
        opacity: { duration: 0.15 },
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      scaleY: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
        opacity: { duration: 0.25, delay: 0.1 },
      },
    },
  };

  // Variantes mejoradas para el chevron
  const chevronVariants = {
    closed: {
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.25,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    open: {
      rotate: 180,
      scale: 1.1,
      transition: {
        duration: 0.25,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Variantes para el botón del accordion
  const buttonVariants = {
    closed: {
      backgroundColor: "transparent",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    open: {
      backgroundColor: "#ffff",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  // Variantes para el texto del contenido
  const textVariants = {
    hidden: {
      opacity: 0,
      y: -12,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.25,
        delay: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      y: -8,
      scale: 0.98,
      transition: {
        duration: 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const faqData = {
    compras: [
      {
        question: isEn
          ? "What is a seiza meditation bench and how does it help?"
          : "¿Qué es un banco de meditación seiza y cómo ayuda?",
        answer: isEn
          ? "A seiza meditation bench is a traditional Japanese wooden support that allows you to kneel comfortably in the seiza position for extended periods. It reduces pressure on your legs and ankles while maintaining proper posture for meditation, making your practice more comfortable and sustainable."
          : "Un banco de meditación seiza es un soporte tradicional japonés de madera que te permite arrodillarte cómodamente en la posición seiza por períodos prolongados. Reduce la presión en piernas y tobillos mientras mantiene la postura correcta para meditar, haciendo tu práctica más cómoda y sostenible.",
      },
      {
        question: isEn
          ? "What materials is the meditation bench made of?"
          : "¿De qué materiales está hecho el banco de meditación?",
        answer: isEn
          ? "Our seiza meditation bench is crafted from high-quality wood with a smooth, natural finish. The wood is carefully selected for durability and comfort, providing stable support while maintaining the traditional aesthetic of Japanese meditation furniture."
          : "Nuestro banco de meditación seiza está elaborado con madera de alta calidad con un acabado natural suave. La madera es cuidadosamente seleccionada por su durabilidad y comodidad, proporcionando soporte estable mientras mantiene la estética tradicional del mobiliario japonés de meditación.",
      },
      {
        question: isEn
          ? "What are the dimensions and weight capacity?"
          : "¿Cuáles son las dimensiones y capacidad de peso?",
        answer: isEn
          ? "The bench measures 42 × 18 × 15 cm and weighs 1.1 kg, designed to accommodate most body types comfortably. It supports up to 120 kg and features a slightly angled seat that naturally aligns your spine for optimal meditation posture."
          : "El banco mide 42 × 18 × 15 cm y pesa 1.1 kg, diseñado para acomodar cómodamente la mayoría de tipos de cuerpo. Soporta hasta 120 kg y cuenta con un asiento ligeramente inclinado que alinea naturalmente tu columna para una postura óptima de meditación.",
      },
      {
        question: isEn
          ? "Is this suitable for beginners or experienced meditators?"
          : "¿Es adecuado para principiantes o meditadores experimentados?",
        answer: isEn
          ? "Our seiza bench is perfect for both beginners and experienced practitioners. For beginners, it makes the seiza position accessible and comfortable, helping establish a regular practice. Experienced meditators appreciate the traditional design and enhanced stability for longer meditation sessions."
          : "Nuestro banco seiza es perfecto tanto para principiantes como para practicantes experimentados. Para principiantes, hace la posición seiza accesible y cómoda, ayudando a establecer una práctica regular. Los meditadores experimentados aprecian el diseño tradicional y la estabilidad mejorada para sesiones de meditación más largas.",
      },
    ],
    envios: [
      {
        question: isEn
          ? "How long does shipping take?"
          : "¿Cuánto tiempo tarda el envío?",
        answer: isEn
          ? "Standard shipping within Mexico takes 5-7 business days. Express shipping (2-3 business days) is also available. International shipping typically takes 10-15 business days. All orders are carefully packaged to ensure your meditation bench arrives in perfect condition."
          : "El envío estándar dentro de México toma de 5-7 días hábiles. También disponemos de envío express (2-3 días hábiles). El envío internacional típicamente toma 10-15 días hábiles. Todos los pedidos son cuidadosamente empacados para asegurar que tu banco de meditación llegue en perfectas condiciones.",
      },
      {
        question: isEn
          ? "What are the shipping costs?"
          : "¿Cuáles son los costos de envío?",
        answer: isEn
          ? "Shipping cost is $10 USD for all orders within Mexico, regardless of quantity. Express shipping is available for an additional cost. International shipping rates vary by destination and are calculated at checkout based on weight and location."
          : "El costo de envío es de $10 USD para todos los pedidos dentro de México, sin importar la cantidad. El envío express está disponible por un costo adicional. Las tarifas de envío internacional varían según el destino y se calculan al finalizar la compra.",
      },
      {
        question: isEn
          ? "Do you ship internationally?"
          : "¿Realizan envíos internacionales?",
        answer: isEn
          ? "Yes, we ship worldwide! International shipping is available to most countries. Customs duties and taxes may apply depending on your country's regulations - these are the responsibility of the customer. We provide tracking information for all international shipments."
          : "¡Sí, enviamos a todo el mundo! El envío internacional está disponible para la mayoría de países. Pueden aplicar aranceles y impuestos aduaneros dependiendo de las regulaciones de tu país - estos son responsabilidad del cliente. Proporcionamos información de rastreo para todos los envíos internacionales.",
      },
      {
        question: isEn
          ? "How is the meditation bench packaged for shipping?"
          : "¿Cómo se empaca el banco de meditación para el envío?",
        answer: isEn
          ? "Each meditation bench is carefully wrapped in protective foam and placed in a sturdy cardboard box with additional padding. We use eco-friendly packaging materials whenever possible. The bench is secured to prevent movement during transit, ensuring it arrives without scratches or damage."
          : "Cada banco de meditación es cuidadosamente envuelto en espuma protectora y colocado en una caja de cartón resistente con acolchado adicional. Utilizamos materiales de empaque ecológicos siempre que sea posible. El banco está asegurado para prevenir movimiento durante el tránsito, asegurando que llegue sin rayones o daños.",
      },
    ],
    devoluciones: [
      {
        question: isEn
          ? "What is your return policy?"
          : "¿Cuál es su política de devoluciones?",
        answer: isEn
          ? "We offer a 30-day return policy from the date of delivery. The meditation bench must be in original condition with no signs of use or damage. Original packaging is required for returns. Customer is responsible for return shipping costs unless the item was defective or incorrectly shipped."
          : "Ofrecemos una política de devolución de 30 días desde la fecha de entrega. El banco de meditación debe estar en condiciones originales sin señales de uso o daño. Se requiere el empaque original para devoluciones. El cliente es responsable de los costos de envío de devolución a menos que el artículo haya estado defectuoso o mal enviado.",
      },
      {
        question: isEn
          ? "How do I initiate a return?"
          : "¿Cómo inicio una devolución?",
        answer: isEn
          ? "To initiate a return, contact our customer service team with your order number and reason for return. We'll provide a return authorization number and detailed instructions. Please don't ship the item back without authorization, as unauthorized returns may not be processed."
          : "Para iniciar una devolución, contacta a nuestro equipo de servicio al cliente con tu número de orden y la razón de la devolución. Te proporcionaremos un número de autorización de devolución e instrucciones detalladas. Por favor no envíes el artículo de vuelta sin autorización, ya que las devoluciones no autorizadas pueden no ser procesadas.",
      },
      {
        question: isEn
          ? "When will I receive my refund?"
          : "¿Cuándo recibiré mi reembolso?",
        answer: isEn
          ? "Once we receive and inspect your returned meditation bench, we'll process your refund within 3-5 business days. The refund will be issued to your original payment method. Please allow additional time for your bank or credit card company to process the refund to your account."
          : "Una vez que recibamos e inspeccionemos tu banco de meditación devuelto, procesaremos tu reembolso dentro de 3-5 días hábiles. El reembolso será emitido a tu método de pago original. Por favor permite tiempo adicional para que tu banco o compañía de tarjeta de crédito procese el reembolso a tu cuenta.",
      },
      {
        question: isEn
          ? "Can I exchange my meditation bench for a different model?"
          : "¿Puedo cambiar mi banco de meditación por un modelo diferente?",
        answer: isEn
          ? "Since we specialize in one high-quality seiza meditation bench model, exchanges for different models aren't available. However, if you're not satisfied with your purchase, you can return it within 30 days for a full refund and place a new order if desired."
          : "Como nos especializamos en un modelo de banco de meditación seiza de alta calidad, no están disponibles cambios por modelos diferentes. Sin embargo, si no estás satisfecho con tu compra, puedes devolverlo dentro de 30 días para un reembolso completo y realizar un nuevo pedido si lo deseas.",
      },
    ],
    garantia: [
      {
        question: isEn
          ? "What warranty do you offer on the meditation bench?"
          : "¿Qué garantía ofrecen en el banco de meditación?",
        answer: isEn
          ? "We provide a 2-year limited warranty against manufacturing defects and structural issues. This covers cracking, splitting, or joint failure under normal use. The warranty does not cover damage from misuse, normal wear and tear, or cosmetic issues that don't affect functionality."
          : "Proporcionamos una garantía limitada de 2 años contra defectos de fabricación y problemas estructurales. Esto cubre agrietamiento, división o falla de uniones bajo uso normal. La garantía no cubre daños por mal uso, desgaste normal o problemas cosméticos que no afecten la funcionalidad.",
      },
      {
        question: isEn
          ? "How do I claim warranty service?"
          : "¿Cómo reclamo el servicio de garantía?",
        answer: isEn
          ? "To claim warranty service, contact us with photos of the issue, your order number, and purchase date. Our team will evaluate the claim and, if approved, we'll either repair, replace, or refund the meditation bench at our discretion. Warranty claims must be made within the 2-year warranty period."
          : "Para reclamar el servicio de garantía, contáctanos con fotos del problema, tu número de orden y fecha de compra. Nuestro equipo evaluará el reclamo y, si es aprobado, repararemos, reemplazaremos o reembolsaremos el banco de meditación a nuestra discreción. Los reclamos de garantía deben hacerse dentro del período de garantía de 2 años.",
      },
      {
        question: isEn
          ? "What maintenance is recommended to preserve the warranty?"
          : "¿Qué mantenimiento se recomienda para preservar la garantía?",
        answer: isEn
          ? "To maintain your warranty, keep the meditation bench in a dry environment, clean it gently with a soft cloth, and avoid exposure to extreme temperatures or moisture. Don't use harsh chemicals or abrasive cleaners. Occasional treatment with wood conditioner can help preserve the natural finish."
          : "Para mantener tu garantía, mantén el banco de meditación en un ambiente seco, límpialo suavemente con un paño suave y evita la exposición a temperaturas extremas o humedad. No uses químicos fuertes o limpiadores abrasivos. El tratamiento ocasional con acondicionador de madera puede ayudar a preservar el acabado natural.",
      },
      {
        question: isEn
          ? "Does the warranty cover shipping costs for repairs?"
          : "¿La garantía cubre los costos de envío para reparaciones?",
        answer: isEn
          ? "For valid warranty claims, we cover return shipping costs to our facility. If we determine the issue is covered under warranty, we'll also cover shipping costs to send the repaired or replacement bench back to you. For claims deemed outside warranty coverage, shipping costs are the customer's responsibility."
          : "Para reclamos de garantía válidos, cubrimos los costos de envío de devolución a nuestras instalaciones. Si determinamos que el problema está cubierto bajo garantía, también cubriremos los costos de envío para enviarte de vuelta el banco reparado o de reemplazo. Para reclamos considerados fuera de la cobertura de garantía, los costos de envío son responsabilidad del cliente.",
      },
    ],
  };

  const renderAccordion = (section, data) => (
    <div className="mb-8 space-y-3">
      {data.map((faq, idx) => {
        const key = `${section}-${idx}`;
        const isOpen = openSection === key;

        return (
          <motion.div
            key={key}
            layout
            layoutId={key}
            className={`rounded-xl overflow-hidden ${getAccordionClasses(
              section,
              isOpen
            )}`}
            initial={false}
            animate={{
              scale: isOpen ? 1.02 : 1,
              y: isOpen ? -2 : 0,
            }}
            transition={{
              duration: 0.25,
              ease: [0.25, 0.46, 0.45, 0.94],
              layout: {
                duration: 0.25,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            }}
            whileHover={{
              scale: isOpen ? 1.02 : 1.01,
              y: isOpen ? -2 : -1,
              transition: { duration: 0.2 },
            }}
          >
            <motion.button
              type="button"
              onClick={() => toggleSection(key)}
              className="w-full px-6 py-5 text-left flex justify-between items-center font-semibold focus:outline-none  active:scale-[0.98] transition-transform duration-150 rounded-xl"
              variants={buttonVariants}
              animate={isOpen ? "open" : "closed"}
              whileHover={{
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.1 },
              }}
            >
              <motion.span
                className="pr-4"
                animate={{
                  color: isOpen ? "#8C5A2E" : "inherit",
                }}
                transition={{ duration: 0.2 }}
              >
                {faq.question}
              </motion.span>
              <motion.div
                variants={chevronVariants}
                animate={isOpen ? "open" : "closed"}
                className="flex-shrink-0 p-1 rounded-full"
                whileHover={{
                  transition: { duration: 0.2 },
                }}
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
                  className="overflow-hidden"
                  style={{
                    originY: 0,
                  }}
                >
                  <motion.div
                    className="px-6 py-5 border-t border-black/10 bg-gradient-to-r from-transparent via-[#4DE8D9]/5 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    <motion.p
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="text-sm leading-relaxed text-gray-700"
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
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
          src="/banner_faq.webp"
          className="md:h-auto h-screen w-full object-cover"
          alt="banner"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.h1
          className="absolute bottom-10 left-10 text-[50px] md:text-[120px] text-white font-bold drop-shadow-[4px_4px_8px_rgba(0,0,0,0.8)] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] stroke-2 stroke-black"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {isEn ? "Frequently Asked Questions" : "Preguntas Frecuentes"}
        </motion.h1>
      </section>

      <section className="bg-[url(/background.webp)] bg-cover bg-center">
        <motion.div
          className="md:px-14 px-6 py-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {!isEn && (
            <motion.p
              className="text-[30px] text-black mb-8"
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
            id="purchase"
            className="scroll-mt-20"
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
            id="shipping"
            className="scroll-mt-20"
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
            id="return"
            className="scroll-mt-20"
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
            id="warranty"
            className="scroll-mt-20"
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
