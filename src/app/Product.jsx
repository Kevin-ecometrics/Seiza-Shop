"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronBack, IoChevronForward, IoCart } from "react-icons/io5";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useLanguage } from "../app/context/LanguageContext";

function Product() {
  const { language } = useLanguage();
  const isEn = language === "en";
  const [dolar, setDolar] = useState(null);

  useEffect(() => {
    const obtenerDolar = async () => {
      try {
        const response = await axios.get(process.env.NEXT_PUBLIC_DOLLAR);
        const dolarValue = response.data.bmx.series[0].datos[0].dato;
        setDolar(dolarValue);
        if (typeof window !== "undefined") {
          window.sessionStorage.setItem("dolar", dolarValue);
        }
      } catch (err) {
        console.error(err);
      }
    };
    obtenerDolar();
  }, []);

  const [currentPosition, setCurrentPosition] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [stock, setStock] = useState(null);
  const router = useRouter();

  const unitPrice = 69; // Precio oficial en USD
  const totalPrice = unitPrice * quantity;

  const productImages = [
    "/Seiza_01.jpg",
    "/Seiza_45_traserag.jpg",
    "/Seiza_45g.jpg",
    "/Seiza_45g2.jpg",
    "/Seiza_frontal.jpg",
    "/Seiza_inclinadajpg.jpg",
    "/Seiza_lateral.jpg",
    "/Seiza_lateral2.jpg",
    "/Seiza_superior.jpg",
    "/Seiza_trasera.jpg",
  ];

  const positions = productImages.map((image, index) => ({
    id: index,
    src: image,
    alt: isEn
      ? `Product view position ${index + 1}`
      : `Vista del producto posición ${index + 1}`,
    position: isEn ? `Position ${index + 1}` : `Posición ${index + 1}`,
  }));

  useEffect(() => {
    let interval;
    if (isAutoRotating && !isDragging) {
      interval = setInterval(() => {
        setCurrentPosition((prev) => (prev + 1) % positions.length);
      }, 600);
    }
    return () => clearInterval(interval);
  }, [isAutoRotating, isDragging, positions.length]);

  const nextPosition = () =>
    setCurrentPosition((prev) => (prev + 1) % positions.length);
  const prevPosition = () =>
    setCurrentPosition(
      (prev) => (prev - 1 + positions.length) % positions.length
    );
  const goToPosition = (index) => setCurrentPosition(index);

  const mainProduct = {
    id: "seiza-banco",
    src: positions[0].src,
    alt: isEn ? "Seiza Meditation Bench" : "Banco Seiza para Meditación",
    price: unitPrice,
    quantity,
    total: totalPrice,
  };

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => {
      let next = prev + delta;
      if (next < 0) next = 0;
      if (stock && next > stock) next = stock;
      return next;
    });
  };

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const response = await axios.get("http://localhost:5000/stock");
        if (Array.isArray(response.data) && response.data.length > 0) {
          setStock(response.data[0].stock);
        } else {
          setStock(0);
        }
      } catch (error) {
        setStock(0);
      }
    };
    fetchStock();
  }, []);

  const handleBuyNow = () => {
    if (quantity > 0 && (!stock || quantity <= stock)) {
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(
          "checkout_cart",
          JSON.stringify([{ ...mainProduct }])
        );
      }
      router.push("/checkout");
    }
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Visor del Producto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contenedor de Imagen Principal */}
            <div className="relative bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <motion.div
                className="relative aspect-square overflow-hidden rounded-2xl bg-white"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentPosition}
                    src={positions[currentPosition].src}
                    alt={positions[currentPosition].alt}
                    className="w-full h-full object-contain cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={(event, info) => {
                      setIsDragging(false);
                      const sensitivity = 50;
                      if (Math.abs(info.offset.x) > sensitivity) {
                        if (info.offset.x > 0) {
                          prevPosition();
                        } else {
                          nextPosition();
                        }
                      }
                    }}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    whileDrag={{ scale: 0.97 }}
                    style={{ background: "#fff" }}
                  />
                </AnimatePresence>

                {/* Indicador de Posición */}
                <motion.div
                  className="absolute top-4 right-4 bg-gray-900/70 text-white px-3 py-1 rounded-full text-sm font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {positions[currentPosition].position}
                </motion.div>

                {/* Flechas de Navegación */}
                <motion.button
                  onClick={prevPosition}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full shadow transition-all duration-200 z-10"
                  whileHover={{ scale: 1.1, x: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={isEn ? "Previous position" : "Posición anterior"}
                >
                  <IoChevronBack size={24} />
                </motion.button>

                <motion.button
                  onClick={nextPosition}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full shadow transition-all duration-200 z-10"
                  whileHover={{ scale: 1.1, x: 2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={isEn ? "Next position" : "Posición siguiente"}
                >
                  <IoChevronForward size={24} />
                </motion.button>
              </motion.div>
            </div>

            {/* Navegación por Miniaturas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm"
            >
              <div className="grid grid-cols-10 gap-2">
                {positions.map((position, index) => (
                  <motion.button
                    key={position.id}
                    onClick={() => goToPosition(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      currentPosition === index
                        ? "border-blue-500 ring-2 ring-blue-200"
                        : "border-gray-200 hover:border-blue-200"
                    }`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={
                      isEn
                        ? `Go to position ${index + 1}`
                        : `Ir a la posición ${index + 1}`
                    }
                  >
                    <img
                      src={position.src}
                      alt={position.alt}
                      className="w-full h-full object-contain bg-white"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Información del Producto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {isEn
                  ? "Ergonomic Meditation Bench – Seiza"
                  : "Banco ergonómico para postura Seiza"}
              </motion.h2>

              <motion.p
                className="text-gray-600 text-lg mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {isEn
                  ? "The Seiza bench is designed to support your meditation practice, allowing you to maintain the Seiza posture comfortably and naturally. Its ergonomic shape reduces pressure on knees and ankles for longer, deeper sessions."
                  : "El banco Seiza está diseñado para apoyar tu práctica de meditación, permitiéndote mantener la postura Seiza de forma cómoda y natural. Su diseño ergonómico reduce la presión en las rodillas y tobillos, facilitando sesiones más largas y profundas."}
              </motion.p>

              <motion.div
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <span className="text-gray-500 block mb-1 font-medium">
                  {isEn ? "Price" : "Precio"}
                </span>
                <span className="text-3xl font-bold text-gray-900">
                  {isEn
                    ? `$${totalPrice.toFixed(2)} USD`
                    : `$${(totalPrice * dolar).toLocaleString("es-MX")} MXN`}
                </span>
              </motion.div>

              <div className="flex items-center space-x-4 mb-8">
                <button
                  className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 text-xl font-bold"
                  onClick={() => handleQuantityChange(-1)}
                  aria-label={isEn ? "Decrease quantity" : "Disminuir cantidad"}
                >
                  -
                </button>
                <span className="text-xl font-semibold text-gray-900 min-w-[2rem] text-center">
                  {quantity}
                </span>
                <button
                  className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 text-xl font-bold"
                  onClick={() => handleQuantityChange(1)}
                  aria-label={isEn ? "Increase quantity" : "Aumentar cantidad"}
                >
                  +
                </button>
              </div>

              {stock !== null && (
                <motion.p
                  className={`mb-6 ${
                    quantity > stock ? "text-red-600" : "text-gray-600"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  {isEn
                    ? `Stock available: ${stock}`
                    : `Stock disponible: ${stock}`}
                  {quantity > stock &&
                    (isEn
                      ? " — Quantity exceeds stock"
                      : " — La cantidad excede el stock")}
                </motion.p>
              )}

              <motion.button
                onClick={handleBuyNow}
                disabled={
                  quantity === 0 || (stock !== null && quantity > stock)
                }
                className={`w-full flex justify-center items-center gap-2 px-6 py-3 rounded-3xl text-white font-semibold shadow-md transition-colors duration-200 ${
                  quantity === 0 || (stock !== null && quantity > stock)
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                aria-label={isEn ? "Buy now" : "Comprar ahora"}
              >
                <IoCart size={24} /> {isEn ? "Buy Now" : "Comprar ahora"}
              </motion.button>
            </div>

            {/* Beneficios y Características */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {isEn ? "Benefits & Features" : "Beneficios y Características"}
              </h3>
              <ul className="space-y-3">
                {(isEn
                  ? [
                      "Allows comfortable and stable Seiza posture.",
                      "Reduces pressure on knees and ankles during meditation.",
                      "Made of strong yet lightweight wood.",
                      "Smooth finish and rounded edges for comfort.",
                      "Ideal for both beginners and experienced practitioners.",
                      "Easy to transport and store.",
                    ]
                  : [
                      "Permite mantener la postura Seiza de manera cómoda y estable.",
                      "Reduce la presión en rodillas y tobillos durante la meditación.",
                      "Fabricado en madera resistente y ligera.",
                      "Acabado suave y bordes redondeados para mayor confort.",
                      "Ideal para principiantes y practicantes avanzados.",
                      "Fácil de transportar y almacenar.",
                    ]
                ).map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="flex items-center text-gray-600"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Product;
