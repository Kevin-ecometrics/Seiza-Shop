"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useLanguage } from "@context/LanguageContext";

function StarRating({ rating, maxStars = 5, isEn }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-1 my-4">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} className="w-5 h-5 md:w-6 md:h-6 text-[#8C5A2E]" />
      ))}
      {hasHalfStar && (
        <FaStarHalfAlt className="w-5 h-5 md:w-6 md:h-6 text-[#8C5A2E]" />
      )}
      {[...Array(maxStars - Math.ceil(rating))].map((_, i) => (
        <FaRegStar
          key={i + fullStars}
          className="w-5 h-5 md:w-6 md:h-6 text-[#8C5A2E] opacity-30"
        />
      ))}
      <span className="ml-3 text-[#8C5A2E] font-bold text-lg md:text-xl">
        {rating}/5 {isEn ? "stars" : "estrellas"}
      </span>
    </div>
  );
}
function Testimonials() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const testimonials = [
    {
      name: "Alejandra Laguna",
      rating: 4,
      comment: isEn
        ? "It's very comfortable to use. It's made of very good material. It was a better product than I imagined from the photos."
        : "Es muy cómodo utilizarlo. Está hecho de muy buen material. Fue un mejor producto de lo que me imaginé en las fotos.",
      imageUrl: "/testimonial_1.webp",
    },
    {
      name: "Luis Fernández",
      rating: 5,
      comment: isEn
        ? "It's a good product. It will help me with my purpose. Thank you."
        : "Es un buen producto. Me va a ayudar a mi propósito. Gracias.",
      imageUrl: "/testimonial_2.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-[#DED3D3] text-[#1E1E1E] py-8 md:py-16">
      <h1 className="text-center text-3xl md:text-[60px] font-bold mb-8 md:mb-12 text-[#1E1E1E] px-4">
        {isEn ? "Many Satisfied Customers!" : "¡Muchos Clientes Satisfechos!"}
      </h1>

      <div className="relative">
        {/* Navigation Arrows - Only on Desktop */}
        <button
          onClick={goToPrevious}
          className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-[#8C5A2E] hover:bg-[#8C5A2E]/80 text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
          aria-label={isEn ? "Previous testimonial" : "Testimonio anterior"}
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={goToNext}
          className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-[#8C5A2E] hover:bg-[#8C5A2E]/80 text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
          aria-label={isEn ? "Next testimonial" : "Siguiente testimonio"}
        >
          <FaChevronRight className="w-5 h-5" />
        </button>

        {/* Mobile Version - Single Column */}
        <div className="block md:hidden px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-${currentIndex}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="space-y-8"
            >
              {/* Mobile Image */}
              <div className="flex justify-center">
                <div className="relative">
                  {/* Outer frame */}
                  <div className="w-80 h-96 bg-[#DED3D3] border-4 border-[#8C5A2E] rounded-lg p-4">
                    {/* Inner frame */}
                    <div className="w-full h-full border-5 border-[#8C5A2E]  overflow-hidden bg-[#DED3D3] relative transform translate-x-2">
                      {currentTestimonial.imageUrl ? (
                        <img
                          src={currentTestimonial.imageUrl}
                          alt={
                            isEn
                              ? `Photo of ${currentTestimonial.name}`
                              : `Foto de ${currentTestimonial.name}`
                          }
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-24 h-24 bg-[#8C5A2E] rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-4xl shadow-lg">
                              {currentTestimonial.name.charAt(0)}
                            </div>
                            <span className="text-[#8C5A2E] font-semibold text-sm">
                              {isEn
                                ? `${currentTestimonial.name}'s Testimonial`
                                : `Testimonio de ${currentTestimonial.name}`}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Content */}
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-[#1E1E1E]">
                  {currentTestimonial.name}
                </h3>

                <div className="flex justify-center">
                  <StarRating rating={currentTestimonial.rating} isEn={isEn} />
                </div>

                <p className="text-[#1E1E1E] text-base leading-relaxed px-4">
                  {currentTestimonial.comment}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop Version - Two Columns */}
        <section className="hidden md:grid grid-cols-2 max-w-7xl mx-auto px-8 gap-8 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentIndex}`}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="space-y-4"
            >
              <motion.h3
                className="text-3xl font-bold text-[#1E1E1E]"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {currentTestimonial.name}
              </motion.h3>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <StarRating rating={currentTestimonial.rating} isEn={isEn} />
              </motion.div>

              <motion.p
                className="text-[#1E1E1E] text-lg leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {currentTestimonial.comment}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${currentIndex}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex justify-center md:justify-end"
            >
              <div className="relative">
                {/* Outer frame */}
                <div className="w-[512px] h-[630px] bg-[#DED3D3] border-4 border-[#8C5A2E] rounded-lg p-6">
                  {/* Inner frame */}
                  <div className="w-full h-full border-4 border-[#8C5A2E] overflow-hidden bg-[#DED3D3] shadow-lg transform">
                    {currentTestimonial.imageUrl ? (
                      <img
                        src={currentTestimonial.imageUrl}
                        alt={
                          isEn
                            ? `Photo of ${currentTestimonial.name}`
                            : `Foto de ${currentTestimonial.name}`
                        }
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <motion.div
                        className="w-full h-full flex items-center justify-center"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <div className="text-center">
                          <div className="w-32 h-32 bg-[#8C5A2E] rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-6xl shadow-lg">
                            {currentTestimonial.name.charAt(0)}
                          </div>
                          <span className="text-[#8C5A2E] font-semibold text-lg">
                            {isEn
                              ? `${currentTestimonial.name}'s Testimonial`
                              : `Testimonio de ${currentTestimonial.name}`}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>
      </div>

      {/* Dots Indicator - Mobile and Desktop */}
      <div className="flex justify-center mt-8 gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#8C5A2E] scale-125 shadow-lg"
                : "bg-[#8C5A2E]/30 hover:bg-[#8C5A2E]/50"
            }`}
            aria-label={
              isEn
                ? `Go to testimonial ${index + 1}`
                : `Ir al testimonio ${index + 1}`
            }
          />
        ))}
      </div>

      {/* Progress indicator */}
      <div className="flex justify-center mt-4">
        <span className="text-[#8C5A2E] font-semibold">
          {currentIndex + 1} {isEn ? "of" : "de"} {testimonials.length}
        </span>
      </div>
    </div>
  );
}

export default Testimonials;
