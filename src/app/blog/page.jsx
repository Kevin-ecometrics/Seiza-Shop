"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaTag,
} from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useLanguage } from "../context/LanguageContext";

const blogCardsData = [
  {
    en: {
      title: "Meditation: The Power to Transform Your Mind, Body, and Emotions",
      text: "Beyond a spiritual practice, science supports its physical, emotional, and cognitive benefits. In a world so fast-paced, competitive, and lacking empathy, work, activities, and even socializing fill us with a thick fog of overwhelm and what we know as burnout. Therefore, meditation practice has gained more popularity.",
      url: "/blog/meditation-power-transform-mind-body-emotions",
      date: "March 15, 2025",
      readTime: "5 min read",
      author: "Seiza Shop",
      category: "Mindfulness",
    },
    es: {
      title: "Meditación: El Poder de Transformar tu Mente, Cuerpo y Emociones",
      text: "Más allá de una práctica espiritual, la ciencia respalda sus beneficios físicos, emocionales y cognitivos. En un mundo tan acelerado, competitivo y con ausencia de empatía, cada vez el trabajo, nuestras actividades e incluso la convivencia nos llena de una bruma espesa de agobio y lo que conocemos como burnout. Por lo tanto, la práctica de la meditación ha tenido más auge.",
      url: "/blog/meditacion-poder-transformar-mente-cuerpo-emociones",
      date: "15 de Marzo, 2025",
      readTime: "5 min de lectura",
      author: "Seiza Shop",
      category: "Mindfulness",
    },
  },
  {
    en: {
      title: "Types of Meditation: Find the Practice That Resonates With You",
      text: "Meditation as a refuge amid the noise. We are always connected to the outside world because it never rests: stimuli, screens, and notifications keep coming. The stress of everyday life increases, leaving our mind restless, body tense, making it difficult to simply rest or even fall asleep.",
      url: "/blog/types-of-meditation-find-your-practice",
      date: "March 10, 2025",
      readTime: "7 min read",
      author: "Seiza Shop",
      category: "Wellness",
    },
    es: {
      title: "Tipos de Meditación: Encuentra la Práctica que Resuena Contigo",
      text: "Meditación como refugio en medio del ruido. Siempre estamos conectados con el mundo exterior ya que este no descansa: estímulos, pantallas y notificaciones llegan sin parar. El estrés de la vida cotidiana aumenta, nos deja la mente agitada, el cuerpo tenso, dificultando el simple acto de descansar e incluso dificulta la conciliación del sueño.",
      url: "/blog/tipos-de-meditacion-encuentra-tu-practica",
      date: "10 de Marzo, 2025",
      readTime: "7 min de lectura",
      author: "Seiza Shop",
      category: "Bienestar",
    },
  },
  {
    en: {
      title: "Different Postures: Your Yoga, Your Pace",
      text: "Yoga does not demand perfect conditions. You can start today, at home, in your free time, with nothing else required but the desire to try. It doesn't matter if it's calm in the morning or a break at work, amid stress and bustle. This practice adapts to you, not the other way around.",
      url: "/blog/different-postures-your-yoga-pace",
      date: "March 5, 2025",
      readTime: "6 min read",
      author: "Seiza Shop",
      category: "Yoga",
    },
    es: {
      title: "Diferentes Posturas: Tu Yoga, Tu Ritmo",
      text: "El yoga no exige condiciones perfectas. Puedes empezar hoy, en casa, en un rato libre, sin más requisito que las ganas de probar. No importa si es por la mañana con calma o en una pausa del trabajo, entre el estrés y el ajetreo. Esta práctica se adapta a ti, no al revés.",
      url: "/blog/diferentes-posturas-tu-yoga-tu-ritmo",
      date: "5 de Marzo, 2025",
      readTime: "6 min de lectura",
      author: "Seiza Shop",
      category: "Yoga",
    },
  },
  {
    en: {
      title: "Seiza: A Simple Posture for a Healthy Spine and a Peaceful Mind",
      text: "Seiza —that traditional Japanese way of sitting on the knees— transcends its use in martial arts like Iaido or ceremonies like Chanoyu (tea ceremony). Today, it is rediscovered as a powerful psychotherapeutic tool and a spiritual practice.",
      url: "/blog/seiza-simple-posture-healthy-spine-peaceful-mind",
      date: "February 28, 2025",
      readTime: "4 min read",
      author: "Seiza Shop",
      category: "Meditation",
    },
    es: {
      title:
        "Seiza: Una Simple Postura para una Columna Sana y una Mente en Paz",
      text: "Seiza —ese modo tradicional japonés de sentarse sobre las rodillas— trasciende su uso en artes marciales como el Iaido o ceremonias como el chanoyu (ceremonia del té). Hoy, se redescubre como una poderosa herramienta psicoterapéutica y una práctica espiritual.",
      url: "/blog/seiza-simple-postura-columna-sana-mente-en-paz",
      date: "28 de Febrero, 2025",
      readTime: "4 min de lectura",
      author: "Seiza Shop",
      category: "Meditación",
    },
  },
  {
    en: {
      title: "How to Meditate: Starting from Scratch",
      text: "Meditation: a path to holistic well-being. It is a powerful tool to improve quality of life, both mentally and physically. However, starting meditation requires patience and consistency, as it is a gradual process cultivated with practice.",
      url: "/blog/how-to-meditate-starting-from-scratch",
      date: "February 20, 2025",
      readTime: "8 min read",
      author: "Seiza Shop",
      category: "Beginner",
    },
    es: {
      title: "Cómo Meditar: Empezar desde cero",
      text: "La meditación: un camino hacia el bienestar integral. Se trata de una herramienta poderosa para mejorar la calidad de vida, tanto a nivel mental como físico. Sin embargo, iniciarse en la meditación requiere paciencia y constancia, pues es un proceso gradual que se cultiva con la práctica.",
      url: "/blog/como-meditar-empezar-desde-cero",
      date: "20 de Febrero, 2025",
      readTime: "8 min de lectura",
      author: "Seiza Shop",
      category: "Principiante",
    },
  },
  {
    en: {
      title: "Meditation Myths: Discovering the Truth Behind the Practice",
      text: "Some believe meditation should lead to mystical visions, divine enlightenment, or out-of-body experiences. While meditation can generate deep feelings of peace and happiness, its true purpose is not to reach extraordinary phenomena but to cultivate a clearer and calmer mind.",
      url: "/blog/meditation-myths-truth-behind-practice",
      date: "February 15, 2025",
      readTime: "6 min read",
      author: "Seiza Shop",
      category: "Education",
    },
    es: {
      title:
        "Mitos sobre la meditación: Descubriendo la verdad detrás de la práctica",
      text: "Algunas personas creen que la meditación debe llevarlos a visiones místicas, iluminación divina o experiencias fuera del cuerpo. Si bien la meditación puede generar sensaciones profundas de paz y felicidad, su verdadero propósito no es alcanzar fenómenos extraordinarios, sino cultivar una mente más clara y serena.",
      url: "/blog/mitos-sobre-la-meditacion-verdad-detras-de-practica",
      date: "15 de Febrero, 2025",
      readTime: "6 min de lectura",
      author: "Seiza Shop",
      category: "Educación",
    },
  },
];

const CARDS_PER_PAGE_DESKTOP = 3;
const CARDS_PER_PAGE_MOBILE = 1;

function BlogPage() {
  const { language } = useLanguage();
  const isEn = language === "en";
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isMounted) return null; // evita el render hasta que coincidan cliente y servidor

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
          src={isMobile ? "/banner_blog_mobile.webp" : "/banner_blog.webp"}
          className="w-full"
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
                  : "grid-cols-1 lg:grid-cols-3 mx-16"
              }`}
            >
              <AnimatePresence mode="wait">
                {currentCards.map((card, i) => (
                  <motion.a
                    key={card.en.title}
                    href={isEn ? card.en.url : card.es.url}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    whileHover={{
                      y: -12,
                      scale: 1.05,
                    }}
                    className={`group block rounded-2xl shadow-lg relative no-underline transition-all duration-500 hover:shadow-2xl cursor-pointer bg-cover bg-center overflow-hidden ${
                      isMobile ? "w-full h-[500px]" : "w-80 h-[520px]"
                    }`}
                    style={{
                      backgroundImage: `url(/banner_blog_inside_mobile.webp)`,
                    }}
                  >
                    {/* Gradient overlay base - más fuerte para mejor contraste */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30"></div>

                    {/* Hover overlay - se oscurece más al hacer hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500"></div>

                    {/* Contenido de la card */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6 relative z-10">
                      {/* Header con categoría */}
                      <div className="flex justify-between items-start">
                        <span className="inline-block px-3 py-1 bg-[#8C5A2E]/80 text-white text-xs font-bold rounded-full shadow-lg border border-white/20 backdrop-blur-sm mb-4">
                          <FaTag className="inline mr-1" size={10} />
                          {isEn ? card.en.category : card.es.category}
                        </span>
                      </div>

                      {/* Contenido principal */}
                      <div className="flex-1 flex flex-col justify-center">
                        {/* Título con mejor contraste */}
                        <h3 className="text-2xl font-black text-white mb-4 leading-tight group-hover:text-[#F5E6D3] transition-colors duration-300 drop-shadow-2xl text-shadow-strong">
                          {isEn ? card.en.title : card.es.title}
                        </h3>

                        {/* Descripción con mejor legibilidad */}
                        <p className="text-white text-base leading-relaxed group-hover:text-white transition-colors duration-300 drop-shadow-xl font-medium opacity-95">
                          {isEn
                            ? card.en.text.length > 100
                              ? card.en.text.slice(0, 100) + "..."
                              : card.en.text
                            : card.es.text.length > 100
                            ? card.es.text.slice(0, 100) + "..."
                            : card.es.text}
                        </p>

                        {/* Línea decorativa que aparece en hover */}
                        <div className="mt-4 w-0 group-hover:w-20 h-1 bg-[#F5E6D3] transition-all duration-700 rounded-full shadow-lg"></div>
                      </div>

                      {/* Footer con información adicional */}
                      <div className="space-y-4">
                        {/* Información del artículo */}
                        <div className="pt-4 border-t border-white/20">
                          <div className="items-start justify-between text-white/90 text-sm">
                            <div className=" items-center space-x-4 mb-2">
                              <div className="flex mb-2 items-center space-x-1">
                                <FaCalendarAlt
                                  size={12}
                                  className="text-[#F5E6D3]"
                                />
                                <span className="font-medium">
                                  {isEn ? card.en.date : card.es.date}
                                </span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <FaClock size={12} className="text-[#F5E6D3]" />
                                <span className="font-medium">
                                  {isEn ? card.en.readTime : card.es.readTime}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1">
                              <FaUser size={12} className="text-[#F5E6D3]" />
                              <span className="font-medium text-[#F5E6D3]">
                                {isEn ? card.en.author : card.es.author}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Badge decorativo en el bottom */}
                        <div className="md:absolute  md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                          <span className="inline-block px-4 py-2 bg-[#8C5A2E] text-white text-sm font-bold rounded-full shadow-lg border border-white/20">
                            {isEn ? "READ MORE" : "LEER MÁS"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Efecto de brillo en hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </motion.a>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {isMobile && (
            <div className="flex justify-center items-center mt-8 space-x-4">
              <motion.button
                onClick={handlePrev}
                disabled={index === 0}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`text-[#8C5A2E] transition-all duration-300 p-3 rounded-full bg-white shadow-lg ${
                  index === 0
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:text-[#6b3e1a] hover:bg-gray-50 hover:shadow-xl"
                }`}
                aria-label={isEn ? "Previous page" : "Página anterior"}
              >
                <FaArrowLeft size={20} />
              </motion.button>

              <span className="text-[#8C5A2E] font-semibold bg-white/80 px-4 py-2 rounded-full shadow-md">
                {isEn ? "Page" : "Página"} {index + 1} {isEn ? "of" : "de"}{" "}
                {totalPages}
              </span>

              <motion.button
                onClick={handleNext}
                disabled={index === totalPages - 1}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`text-[#8C5A2E] transition-all duration-300 p-3 rounded-full bg-white shadow-lg ${
                  index === totalPages - 1
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:text-[#6b3e1a] hover:bg-gray-50 hover:shadow-xl"
                }`}
                aria-label={isEn ? "Next page" : "Página siguiente"}
              >
                <FaArrowRight size={20} />
              </motion.button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BlogPage;
