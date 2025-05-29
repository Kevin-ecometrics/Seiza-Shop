"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useLanguage } from "../context/LanguageContext";

const blogCardsData = [
  {
    en: {
      title: "Meditation: The Power to Transform Your Mind, Body, and Emotions",
      text: "Beyond a spiritual practice, science supports its physical, emotional, and cognitive benefits. In a world so fast-paced, competitive, and lacking empathy, work, activities, and even socializing fill us with a thick fog of overwhelm and what we know as burnout. Therefore, meditation practice has gained more popularity.",
    },
    es: {
      title: "Meditación: El Poder de Transformar tu Mente, Cuerpo y Emociones",
      text: "Más allá de una práctica espiritual, la ciencia respalda sus beneficios físicos, emocionales y cognitivos. En un mundo tan acelerado, competitivo y con ausencia de empatía, cada vez el trabajo, nuestras actividades e incluso la convivencia nos llena de una bruma espesa de agobio y lo que conocemos como burnout. Por lo tanto, la práctica de la meditación ha tenido más auge.",
    },
    url: "/blog/meditation-power-transform-mind-body-emotions",
  },
  {
    en: {
      title: "Types of Meditation: Find the Practice That Resonates With You",
      text: "Meditation as a refuge amid the noise. We are always connected to the outside world because it never rests: stimuli, screens, and notifications keep coming. The stress of everyday life increases, leaving our mind restless, body tense, making it difficult to simply rest or even fall asleep.",
    },
    es: {
      title: "Tipos de Meditación: Encuentra la Práctica que Resuena Contigo",
      text: "Meditación como refugio en medio del ruido. Siempre estamos conectados con el mundo exterior ya que este no descansa: estímulos, pantallas y notificaciones llegan sin parar. El estrés de la vida cotidiana aumenta, nos deja la mente agitada, el cuerpo tenso, dificultando el simple acto de descansar e incluso dificulta la conciliación del sueño.",
    },
    url: "/blog/types-of-meditation-find-your-practice",
  },
  {
    en: {
      title: "Different Postures: Your Yoga, Your Pace",
      text: "Yoga does not demand perfect conditions. You can start today, at home, in your free time, with nothing else required but the desire to try. It doesn't matter if it's calm in the morning or a break at work, amid stress and bustle. This practice adapts to you, not the other way around.",
    },
    es: {
      title: "Diferentes Posturas: Tu Yoga, Tu Ritmo",
      text: "El yoga no exige condiciones perfectas. Puedes empezar hoy, en casa, en un rato libre, sin más requisito que las ganas de probar. No importa si es por la mañana con calma o en una pausa del trabajo, entre el estrés y el ajetreo. Esta práctica se adapta a ti, no al revés.",
    },
    url: "/blog/different-postures-your-yoga-pace",
  },
  {
    en: {
      title: "Seiza: A Simple Posture for a Healthy Spine and a Peaceful Mind",
      text: "Seiza —that traditional Japanese way of sitting on the knees— transcends its use in martial arts like Iaido or ceremonies like Chanoyu (tea ceremony). Today, it is rediscovered as a powerful psychotherapeutic tool and a spiritual practice.",
    },
    es: {
      title:
        "Seiza: Una Simple Postura para una Columna Sana y una Mente en Paz",
      text: "Seiza —ese modo tradicional japonés de sentarse sobre las rodillas— trasciende su uso en artes marciales como el Iaido o ceremonias como el chanoyu (ceremonia del té). Hoy, se redescubre como una poderosa herramienta psicoterapéutica y una práctica espiritual.",
    },
    url: "/blog/seiza-simple-posture-healthy-spine-peaceful-mind",
  },
  {
    en: {
      title: "How to Meditate: Starting from Scratch",
      text: "Meditation: a path to holistic well-being. It is a powerful tool to improve quality of life, both mentally and physically. However, starting meditation requires patience and consistency, as it is a gradual process cultivated with practice.",
    },
    es: {
      title: "Cómo Meditar: Empezar desde cero",
      text: "La meditación: un camino hacia el bienestar integral. Se trata de una herramienta poderosa para mejorar la calidad de vida, tanto a nivel mental como físico. Sin embargo, iniciarse en la meditación requiere paciencia y constancia, pues es un proceso gradual que se cultiva con la práctica.",
    },
    url: "/blog/how-to-meditate-starting-from-scratch",
  },
  {
    en: {
      title: "Meditation Myths: Discovering the Truth Behind the Practice",
      text: "Some believe meditation should lead to mystical visions, divine enlightenment, or out-of-body experiences. While meditation can generate deep feelings of peace and happiness, its true purpose is not to reach extraordinary phenomena but to cultivate a clearer and calmer mind.",
    },
    es: {
      title:
        "Mitos sobre la meditación: Descubriendo la verdad detrás de la práctica",
      text: "Algunas personas creen que la meditación debe llevarlos a visiones místicas, iluminación divina o experiencias fuera del cuerpo. Si bien la meditación puede generar sensaciones profundas de paz y felicidad, su verdadero propósito no es alcanzar fenómenos extraordinarios, sino cultivar una mente más clara y serena.",
    },
    url: "/blog/meditation-myths-truth-behind-practice",
  },
];

const CARDS_PER_PAGE_DESKTOP = 3;
const CARDS_PER_PAGE_MOBILE = 1;

function BlogPage() {
  const { language } = useLanguage();
  const isEn = language === "en";
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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
  const totalPages = Math.ceil(blogCardsData.length / cardsPerPage);

  const handleNext = () => {
    if (index < totalPages - 1) setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const currentCards = blogCardsData.slice(
    index * cardsPerPage,
    index * cardsPerPage + cardsPerPage
  );

  return (
    <div>
      <Navbar />

      <section className="relative">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src="/banner_blog.webp"
          className="h-screen w-full"
          alt="banner"
        />
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="absolute translate-x-24 inset-0 flex items-center justify-start text-[80px] md:text-[150px] text-[#8C5A2E] font-bold"
        >
          {isEn ? "Blog" : "Blog"}
        </motion.h1>
      </section>

      <section className="bg-[url(/background.webp)] bg-cover bg-center py-20 px-6">
        <div className="container mx-auto">
          <div className="relative flex items-center justify-center">
            {!isMobile && (
              <>
                <button
                  onClick={handlePrev}
                  disabled={index === 0}
                  className={`absolute left-0 z-10 text-[#8C5A2E] transition-colors p-3 rounded-full bg-white shadow-lg ${
                    index === 0
                      ? "opacity-30 cursor-not-allowed"
                      : "hover:text-[#6b3e1a] hover:bg-gray-50"
                  }`}
                  aria-label={isEn ? "Previous page" : "Página anterior"}
                >
                  <FaArrowLeft size={24} />
                </button>

                <button
                  onClick={handleNext}
                  disabled={index === totalPages - 1}
                  className={`absolute right-0 z-10 text-[#8C5A2E] transition-colors p-3 rounded-full bg-white shadow-lg ${
                    index === totalPages - 1
                      ? "opacity-30 cursor-not-allowed"
                      : "hover:text-[#6b3e1a] hover:bg-gray-50"
                  }`}
                  aria-label={isEn ? "Next page" : "Página siguiente"}
                >
                  <FaArrowRight size={24} />
                </button>
              </>
            )}

            <div
              className={`grid gap-6 ${
                isMobile
                  ? "grid-cols-1 w-full max-w-sm"
                  : "grid-cols-1 md:grid-cols-3 mx-16"
              }`}
            >
              <AnimatePresence mode="wait">
                {currentCards.map((card, i) => (
                  <motion.a
                    key={card.en.title}
                    href={card.url}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className={`block bg-[#D9D9D9] rounded-lg p-6 shadow-md relative no-underline ${
                      isMobile ? "w-full h-80" : "w-72 h-96"
                    }`}
                  >
                    <div className="absolute bottom-10">
                      <h3 className="text-xl text-balance font-bold text-[#3B3631] mb-2">
                        {isEn ? card.en.title : card.es.title}
                      </h3>
                      <p className="text-[#3B3631] text-base text-balance">
                        {isEn
                          ? card.en.text.length > 50
                            ? card.en.text.slice(0, 50) + "..."
                            : card.en.text
                          : card.es.text.length > 50
                          ? card.es.text.slice(0, 50) + "..."
                          : card.es.text}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </AnimatePresence>
            </div>
          </div>

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
                aria-label={isEn ? "Previous page" : "Página anterior"}
              >
                <FaArrowLeft size={20} />
              </button>

              <span className="text-[#8C5A2E] font-semibold">
                {isEn ? "Page" : "Página"} {index + 1} {isEn ? "of" : "de"}{" "}
                {totalPages}
              </span>

              <button
                onClick={handleNext}
                disabled={index === totalPages - 1}
                className={`text-[#8C5A2E] transition-colors p-3 rounded-full bg-white shadow-lg ${
                  index === totalPages - 1
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:text-[#6b3e1a] hover:bg-gray-50"
                }`}
                aria-label={isEn ? "Next page" : "Página siguiente"}
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
