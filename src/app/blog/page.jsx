"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const blogCards = [
  {
    title: "Meditación: El Poder de Transformar tu Mente, Cuerpo y Emociones",
    text: "Más allá de una práctica espiritual, la ciencia respalda sus beneficios físicos, emocionales y cognitivos. En un mundo tan acelerado, competitivo y con ausencia de empatía, cada vez el trabajo, nuestras actividades e incluso la convivencia nos llena de una bruma espesa de agobio y lo que conocemos como burnout. Por lo tanto, la práctica de la meditación ha tenido más auge.",
  },
  {
    title: "Tipos de Meditación: Encuentra la Práctica que Resuena Contigo",
    text: "Meditación como refugio en medio del ruido. Siempre estamos conectados con el mundo exterior ya que este no descansa: estímulos, pantallas y notificaciones llegan sin parar. El estrés de la vida cotidiana aumenta, nos deja la mente agitada, el cuerpo tenso, dificultando el simple acto de descansar e incluso dificulta la conciliación del sueño.",
  },
  {
    title: "Diferentes Posturas: Tu Yoga, Tu Ritmo",
    text: "El yoga no exige condiciones perfectas. Puedes empezar hoy, en casa, en un rato libre, sin más requisito que las ganas de probar. No importa si es por la mañana con calma o en una pausa del trabajo, entre el estrés y el ajetreo. Esta práctica se adapta a ti, no al revés.",
  },
  {
    title: "Seiza: Una Simple Postura para una Columna Sana y una Mente en Paz",
    text: "Seiza —ese modo tradicional japonés de sentarse sobre las rodillas— trasciende su uso en artes marciales como el Iaido o ceremonias como el chanoyu (ceremonia del té). Hoy, se redescubre como una poderosa herramienta psicoterapéutica y una práctica espiritual.",
  },
  {
    title: "Cómo Meditar: Empezar desde cero",
    text: "La meditación: un camino hacia el bienestar integral. Se trata de una herramienta poderosa para mejorar la calidad de vida, tanto a nivel mental como físico. Sin embargo, iniciarse en la meditación requiere paciencia y constancia, pues es un proceso gradual que se cultiva con la práctica.",
  },
  {
    title:
      "Mitos sobre la meditación: Descubriendo la verdad detrás de la práctica",
    text: "Algunas personas creen que la meditación debe llevarlos a visiones místicas, iluminación divina o experiencias fuera del cuerpo. Si bien la meditación puede generar sensaciones profundas de paz y felicidad, su verdadero propósito no es alcanzar fenómenos extraordinarios, sino cultivar una mente más clara y serena.",
  },
];

const CARDS_PER_PAGE_DESKTOP = 3;
const CARDS_PER_PAGE_MOBILE = 1;

function BlogPage() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cardsPerPage = isMobile
    ? CARDS_PER_PAGE_MOBILE
    : CARDS_PER_PAGE_DESKTOP;
  const totalPages = Math.ceil(blogCards.length / cardsPerPage);

  const handleNext = () => {
    if (index < totalPages - 1) setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const currentCards = blogCards.slice(
    index * cardsPerPage,
    index * cardsPerPage + cardsPerPage
  );

  return (
    <div>
      <Navbar />

      <section className="relative">
        <img src="/banner_blog.webp" className="h-screen w-full" alt="banner" />
        <h1 className="absolute translate-x-24 inset-0 flex items-center justify-start text-[80px] md:text-[150px] text-[#8C5A2E] font-bold">
          Blog
        </h1>
      </section>

      <section className="bg-[url(/background.webp)] bg-cover bg-center py-20 px-6">
        <div className="container mx-auto">
          <div className="relative flex items-center justify-center">
            {/* Flechas laterales solo en desktop */}
            {!isMobile && (
              <>
                {/* Flecha izquierda */}
                <button
                  onClick={handlePrev}
                  disabled={index === 0}
                  className={`absolute left-0 z-10 text-[#8C5A2E] transition-colors p-3 rounded-full bg-white shadow-lg ${
                    index === 0
                      ? "opacity-30 cursor-not-allowed"
                      : "hover:text-[#6b3e1a] hover:bg-gray-50"
                  }`}
                >
                  <FaArrowLeft size={24} />
                </button>

                {/* Flecha derecha */}
                <button
                  onClick={handleNext}
                  disabled={index === totalPages - 1}
                  className={`absolute right-0 z-10 text-[#8C5A2E] transition-colors p-3 rounded-full bg-white shadow-lg ${
                    index === totalPages - 1
                      ? "opacity-30 cursor-not-allowed"
                      : "hover:text-[#6b3e1a] hover:bg-gray-50"
                  }`}
                >
                  <FaArrowRight size={24} />
                </button>
              </>
            )}

            {/* Contenedor de tarjetas */}
            <div
              className={`grid gap-6 ${
                isMobile
                  ? "grid-cols-1 w-full max-w-sm"
                  : "grid-cols-1 md:grid-cols-3 mx-16"
              }`}
            >
              <AnimatePresence mode="wait">
                {currentCards.map((card, i) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className={`bg-[#D9D9D9] rounded-lg p-6 shadow-md relative ${
                      isMobile ? "w-full h-80" : "w-72 h-96"
                    }`}
                  >
                    <div className="absolute bottom-10">
                      <h3 className="text-xl text-balance font-bold text-[#3B3631] mb-2">
                        {card.title}
                      </h3>
                      <p className="text-[#3B3631] text-base text-balance">
                        {card.text.length > 50
                          ? card.text.slice(0, 50) + "..."
                          : card.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Navegación móvil - mostrar solo en móvil */}
          {isMobile && (
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={handlePrev}
                disabled={index === 0}
                className={`text-[#8C5A2E] transition-colors p-3 rounded-full bg-white shadow-lg ${
                  index === 0
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:text-[#6b3e1a] hover:bg-gray-50"
                }`}
              >
                <FaArrowLeft size={20} />
              </button>

              <span className="text-[#8C5A2E] font-semibold">
                {index + 1} de {totalPages}
              </span>

              <button
                onClick={handleNext}
                disabled={index === totalPages - 1}
                className={`text-[#8C5A2E] transition-colors p-3 rounded-full bg-white shadow-lg ${
                  index === totalPages - 1
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:text-[#6b3e1a] hover:bg-gray-50"
                }`}
              >
                <FaArrowRight size={20} />
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BlogPage;
