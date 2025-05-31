"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaCheck } from "react-icons/fa";
import { useLanguage } from "@context/LanguageContext";

const desktopBanners = [
  { src: "/banner_hero1.webp", alt: "Seiza Banner 1" },
  { src: "/banner_hero2.webp", alt: "Seiza Banner 2" },
];
const mobileBanners = [
  { src: "/banner_hero_mobile1.webp", alt: "Seiza Banner Mobile 1" },
  { src: "/banner_hero_mobile2.webp", alt: "Seiza Banner Mobile 2" },
];

export default function Hero() {
  const { language } = useLanguage();
  const isEn = language === "en";
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(null); // null para controlar el render inicial

  // Detecta si es mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Corrige el index si cambia el tamaño y el array de banners es diferente
  const banners =
    isMobile === null ? [] : isMobile ? mobileBanners : desktopBanners;
  useEffect(() => {
    if (isMobile === null) return;
    setIndex((prev) => {
      const arr = isMobile ? mobileBanners : desktopBanners;
      return prev >= arr.length ? 0 : prev;
    });
  }, [isMobile]);

  const nextBanner = () => setIndex((prev) => (prev + 1) % banners.length);
  const prevBanner = () =>
    setIndex((prev) => (prev - 1 + banners.length) % banners.length);

  // Contenido para mobile banners
  const renderMobileContent = () => {
    if (!isMobile) return null;

    const textShadow =
      "drop-shadow-[4px_4px_8px_rgba(0,0,0,0.8)] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)]";

    if (index === 0) {
      return (
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <motion.img
            src="/logo_mobile.png"
            alt="Seiza Logo"
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          />

          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <motion.span
              className="text-white text-xl sm:text-2xl font-bold px-4 py-2 rounded-full bg-gradient-to-r from-[#8C5A2E] to-[#D9ADBD] bg-clip-text  border border-white shadow-lg drop-shadow-[4px_4px_8px_rgba(0,0,0,0.8)] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4, type: "spring" }}
            >
              {isEn ? "Menstrual Relief" : "Alivio Menstrual"}
            </motion.span>
            <motion.span
              className="text-white text-xl sm:text-2xl font-bold px-4 py-2 rounded-full bg-gradient-to-r from-[#D9ADBD] to-[#8C5A2E] bg-clip-text  border border-white shadow-lg drop-shadow-[4px_4px_8px_rgba(0,0,0,0.8)] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.4, type: "spring" }}
            >
              {isEn ? "Blood Flow" : "Flujo Sanguíneo"}
            </motion.span>
            <motion.span
              className="text-white text-xl sm:text-2xl font-bold px-4 py-2 rounded-full bg-gradient-to-r from-[#8C5A2E] to-[#D9ADBD] bg-clip-text  border border-white shadow-lg drop-shadow-[4px_4px_8px_rgba(0,0,0,0.8)] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4, type: "spring" }}
            >
              {isEn ? "Effortless Posture" : "Postura Sin Esfuerzo"}
            </motion.span>
            <motion.span
              className="text-white text-xl sm:text-2xl font-bold px-4 py-2 rounded-full bg-gradient-to-r from-[#D9ADBD] to-[#8C5A2E] bg-clip-text  border border-white shadow-lg drop-shadow-[4px_4px_8px_rgba(0,0,0,0.8)] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.4, type: "spring" }}
            >
              {isEn ? "Deep Relaxation" : "Relajación Profunda"}
            </motion.span>
            <motion.span
              className="text-white text-xl sm:text-2xl font-bold px-4 py-2 rounded-full bg-gradient-to-r from-[#8C5A2E] to-[#D9ADBD] bg-clip-text  border border-white shadow-lg drop-shadow-[4px_4px_8px_rgba(0,0,0,0.8)] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.4, type: "spring" }}
            >
              {isEn ? "Total Comfort" : "Comodidad Total"}
            </motion.span>
          </div>
        </motion.div>
      );
    }

    if (index === 1) {
      return (
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <motion.img
            src="/logo_mobile.png"
            alt="Seiza Logo"
            className="mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          />
          <motion.ul
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4, type: "spring" }}
            className="text-white text-lg sm:text-xl space-y-4 pl-1 text-center"
          >
            {[
              { text: isEn ? "High quality" : "Alta calidad", delay: 0.1 },
              {
                text: isEn
                  ? "Supports more than 100kg"
                  : "Soporta más de 100kg",
                delay: 0.2,
              },
              { text: isEn ? "Comfortable" : "Cómodo", delay: 0.3 },
              { text: isEn ? "Easy to clean" : "Fácil limpieza", delay: 0.4 },
              {
                text: isEn ? "High durability" : "Alta durabilidad",
                delay: 0.5,
              },
            ].map((item, i) => (
              <motion.li
                key={i}
                className="relative"
                initial={{ opacity: 0, x: -30, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  delay: 0.8 + item.delay,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 120,
                  damping: 12,
                }}
              >
                {/* Fondo transparente sutil */}
                <motion.div
                  className="absolute inset-0 bg-white/5 rounded-xl border border-white/10"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + item.delay, duration: 0.3 }}
                />

                {/* Contenido */}
                <div
                  className={`relative flex items-center justify-center gap-3 py-3 px-4 ${textShadow}`}
                >
                  {/* Icono con animación mejorada */}
                  <motion.div
                    className="flex-shrink-0 relative"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 1 + item.delay,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    {/* Efecto de glow detrás del icono */}
                    <motion.div
                      className="absolute inset-0 bg-black/20 rounded-full blur-sm scale-150"
                      animate={{
                        opacity: [0.5, 0.8, 0.5],
                        scale: [1.5, 1.7, 1.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <motion.div className="relative w-7 h-7 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center shadow-lg border border-gray-700">
                      <FaCheck className="text-white text-sm" />
                    </motion.div>
                  </motion.div>

                  {/* Texto */}
                  <motion.span
                    className="font-medium transition-colors duration-300 relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 + item.delay, duration: 0.3 }}
                  >
                    {item.text}
                  </motion.span>
                </div>

                {/* Línea decorativa inferior */}
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: "60%" }}
                  transition={{ delay: 1.2 + item.delay, duration: 0.4 }}
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      );
    }

    return null;
  };

  if (isMobile === null) {
    return (
      <div
        className="w-screen"
        style={{ minHeight: "320px", maxHeight: "600px" }}
      />
    );
  }

  return (
    <div className="relative text-center mt-0">
      <div className="relative w-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={banners[index]?.src}
            src={banners[index]?.src}
            alt={banners[index]?.alt}
            className="w-screen object-cover md:h-auto h-screen"
            initial={{ scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
          />
        </AnimatePresence>
        {renderMobileContent()}
        {/* Flechas solo en desktop */}
        <button
          onClick={prevBanner}
          className="absolute top-1/2 left-8 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow cursor-pointer transition z-10 hidden md:block"
          aria-label="Previous banner"
        >
          <FaChevronLeft size={28} />
        </button>
        <button
          onClick={nextBanner}
          className="absolute top-1/2 right-8 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow cursor-pointer transition z-10 hidden md:block"
          aria-label="Next banner"
        >
          <FaChevronRight size={28} />
        </button>
        {/* Paginación centrada sobre la imagen */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-4 h-4 rounded-full border border-gray-400 transition-colors duration-200 ${
                i === index ? "bg-gray-900" : "bg-white"
              }`}
              aria-label={`Go to banner ${i + 1}`}
            />
          ))}
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 pointer-events-none"></div>
      </div>
    </div>
  );
}
