"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useLanguage } from "../app/context/LanguageContext";

const banners = [
  { src: "/2. Banners SEIZA.webp", alt: "Seiza Banner 1" },
  { src: "/3. Banners SEIZA.webp", alt: "Seiza Banner 2" },
  { src: "/4. Banners SEIZA.webp", alt: "Seiza Banner 3" },
  { src: "/5. Banners SEIZA.webp", alt: "Seiza Banner 4" },
  { src: "/6. Banners SEIZA.webp", alt: "Seiza Banner 5" },
];

export default function Hero() {
  const { language } = useLanguage();
  const isEn = language === "en";
  const [index, setIndex] = useState(0);

  const nextBanner = () => setIndex((prev) => (prev + 1) % banners.length);
  const prevBanner = () =>
    setIndex((prev) => (prev - 1 + banners.length) % banners.length);

  // Cambio automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative text-center mb-8 mt-0">
      <div className="relative w-screen h-screen overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={banners[index].src}
            src={banners[index].src}
            alt={banners[index].alt}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <button
          onClick={prevBanner}
          className="absolute top-1/2 left-8 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow cursor-pointer transition z-10"
          aria-label="Previous banner"
        >
          <FaChevronLeft size={28} />
        </button>
        <button
          onClick={nextBanner}
          className="absolute top-1/2 right-8 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow cursor-pointer transition z-10"
          aria-label="Next banner"
        >
          <FaChevronRight size={28} />
        </button>
        {/* Paginación centrada abajo */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
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
        {/* Overlay for text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10"></div>
      </div>
    </div>
  );
}
