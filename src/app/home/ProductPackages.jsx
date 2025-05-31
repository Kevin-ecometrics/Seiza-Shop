"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

function ProductPackages() {
  const { language } = useLanguage();
  const isEn = language === "en";
  const router = useRouter();

  // Cada paquete tiene su propia foto y descuento fijo
  const packageOptions = [
    { units: 1, img: "/paquete1.png", discount: 0 },
    { units: 2, img: "/paquete2.png", discount: 5 },
    { units: 3, img: "/paquete3.png", discount: 10 },
    { units: 4, img: "/paquete4.png", discount: 12 },
  ];

  const unitPrice = 69;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [dolar, setDolar] = useState(null); // null para saber si ya cargó
  const [stock, setStock] = useState(null);

  // Detecta si es mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Fetch stock y dólar actual
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Stock
        const stockRes = await axios.get(`${process.env.NEXT_PUBLIC_URL}stock`);
        if (
          Array.isArray(stockRes.data) &&
          stockRes.data.length > 0 &&
          typeof stockRes.data[0].stock === "number"
        ) {
          setStock(stockRes.data[0].stock);
        } else {
          setStock(0);
        }
      } catch {
        setStock(0);
      }

      if (!isEn) {
        try {
          const response = await axios.get(process.env.NEXT_PUBLIC_DOLLAR);
          const mxn =
            response?.data?.bmx?.series?.[0]?.datos?.[0]?.dato ||
            response?.data?.bmx?.series?.[0]?.datos?.at(-1)?.dato;
          if (mxn) setDolar(Number(mxn));
          else setDolar(19);
        } catch {
          setDolar(19);
        }
      } else {
        setDolar(null); // No se usa en inglés
      }
    };
    fetchData();
  }, [isEn]);

  // Agrupa en slides de 3 para desktop, 1 para mobile
  const getSlidesData = () => {
    const groupSize = isMobile ? 1 : 3;
    const slides = [];
    for (let i = 0; i < packageOptions.length; i += groupSize) {
      slides.push(packageOptions.slice(i, i + groupSize));
    }
    return slides;
  };

  const slidesData = getSlidesData();
  const totalSlides = slidesData.length;

  const getDiscountedPrice = (units, discount) => {
    const regularPrice = unitPrice * units;
    return Math.round(regularPrice * (1 - discount / 100));
  };

  const handleBuyPackage = (units, img, discount) => {
    const finalPrice = getDiscountedPrice(units, discount);
    const product = {
      id: `seiza-banco-pack-${units}`,
      src: img,
      alt: isEn ? `Seiza Bench Package x${units}` : `Paquete Seiza x${units}`,
      price: finalPrice / units,
      quantity: units,
      total: finalPrice,
    };

    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("checkout_cart", JSON.stringify([product]));
    }

    router.push("/checkout");
  };

  // Formatea el precio según idioma
  const formatPrice = (usd) => {
    if (isEn) {
      return `${usd} USD`;
    } else if (dolar !== null) {
      const mxn = usd * dolar;
      return `$${mxn.toLocaleString("es-MX", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })} MXN`;
    } else {
      return (
        <span className="inline-flex items-center gap-1">
          <span className="animate-pulse">...</span> MXN
        </span>
      );
    }
  };

  const formatPricePerUnit = (usd) => {
    if (isEn) {
      return `${usd.toFixed(2)} USD per unit`;
    } else if (dolar !== null) {
      const mxn = usd * dolar;
      return `$${mxn.toLocaleString("es-MX", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })} MXN por unidad`;
    } else {
      return (
        <span className="inline-flex items-center gap-1">
          <span className="animate-pulse">...</span> MXN por unidad
        </span>
      );
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? prev : prev - 1));
  };

  return (
    <div className="bg-[url(/background.webp)] bg-cover bg-center ">
      {" "}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8C5A2E] mb-4">
            {isEn ? "Get yours!" : "¡Consigue el tuyo!"}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            {isEn
              ? "We have the best packages for your needs."
              : "Tenemos los mejores paquetes para tus necesidades."}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-md md:max-w-7xl mx-auto mb-8">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-200 ${
              currentIndex === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-[#8C5A2E] hover:bg-[#8C5A2E] hover:text-white shadow-xl"
            }`}
          >
            <IoChevronBack size={24} />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === totalSlides - 1}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-200 ${
              currentIndex === totalSlides - 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-[#8C5A2E] hover:bg-[#8C5A2E] hover:text-white shadow-xl"
            }`}
          >
            <IoChevronForward size={24} />
          </button>

          {/* Carousel Card(s) with animation */}
          <div className="overflow-hidden rounded-2xl px-4 md:px-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full"
              >
                <div
                  className={`grid ${
                    isMobile
                      ? "grid-cols-1"
                      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  } gap-6`}
                >
                  {slidesData[currentIndex].map((pkg) => {
                    const { units, img, discount } = pkg;
                    const regularPrice = unitPrice * units;
                    const discountedPrice = getDiscountedPrice(units, discount);

                    const outOfStock = stock !== null && stock < units;

                    return (
                      <div
                        key={units}
                        className="relative border-4 rounded-2xl p-6 text-center transition-all duration-300 shadow-lg hover:shadow-xl border-[#8C5A2E] bg-white hover:border-[#D9ADBD] flex flex-col justify-between h-full"
                      >
                        {/* Package Title */}
                        <div>
                          <h3 className="text-xl font-bold text-[#8C5A2E] mb-2">
                            {isEn
                              ? `Package of ${units}`
                              : `Paquete de ${units}`}
                          </h3>
                        </div>

                        {/* Product Image */}
                        <div className="mb-4 flex justify-center">
                          <div className="relative w-32 h-24 rounded-xl flex items-center justify-center overflow-hidden">
                            <img
                              src={img}
                              alt={
                                isEn
                                  ? `Seiza Bench Package x${units}`
                                  : `Paquete Seiza x${units}`
                              }
                              className="w-full h-full object-contain p-2"
                            />
                            {/* Quantity Badge */}
                            <div className="absolute top-1 right-1 bg-[#8C5A2E] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                              {units}
                            </div>
                          </div>
                        </div>

                        {/* Pricing Section */}
                        <div className="mb-4">
                          {discount > 0 && (
                            <span className="text-sm text-gray-400 line-through block">
                              {formatPrice(regularPrice)}
                            </span>
                          )}
                          <div className="text-2xl font-bold text-[#8C5A2E] mb-1">
                            {formatPrice(discountedPrice)}
                          </div>
                          {discount > 0 && (
                            <div className="text-sm text-green-700 font-semibold">
                              -{discount}% {isEn ? "Discount" : "Descuento"}
                            </div>
                          )}
                          <div className="text-xs text-gray-500 mt-1">
                            {formatPricePerUnit(discountedPrice / units)}
                          </div>
                        </div>

                        {/* Footer with Buy Button */}
                        <div className="mt-auto pt-2">
                          <button
                            onClick={() =>
                              !outOfStock &&
                              handleBuyPackage(units, img, discount)
                            }
                            disabled={outOfStock}
                            className={`w-full py-2 px-4 rounded-xl font-semibold text-sm transition-all duration-200 ${
                              outOfStock
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-[#8C5A2E] hover:bg-[#7A4F28] text-white shadow-md hover:shadow-lg"
                            }`}
                          >
                            {outOfStock
                              ? isEn
                                ? "Out of Stock"
                                : "Sin stock"
                              : isEn
                              ? "Buy Now"
                              : "Comprar Ahora"}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {slidesData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentIndex === index
                    ? "bg-[#8C5A2E] scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPackages;
