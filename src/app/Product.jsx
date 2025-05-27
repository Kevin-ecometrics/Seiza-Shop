"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoChevronBack,
  IoChevronForward,
  IoCart,
  IoHeart,
} from "react-icons/io5";

function Product({
  favorites = [],
  cart = [],
  addToFavorites,
  removeFromFavorites,
  addToCart,
  removeFromCart,
}) {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Simulación de stock
  const stock = 7;

  // Calcula el precio total según la cantidad seleccionada
  const unitPrice = 2400;
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
    alt: `Vista del producto posición ${index + 1}`,
    position: `Posición ${index + 1}`,
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
    alt: "Banco Seiza para Meditación",
    price: unitPrice,
    stock,
  };

  const isFavorite = favorites.some((item) => item.id === mainProduct.id);
  const isInCart = cart.some((item) => item.id === mainProduct.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(mainProduct.id);
    } else {
      addToFavorites(mainProduct);
    }
  };

  const handleAddToCart = () => {
    if (!isInCart && quantity > 0 && quantity <= stock) {
      addToCart({ ...mainProduct, quantity, total: totalPrice });
    }
  };

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => {
      const next = prev + delta;
      if (next < 1) return 1;
      if (next > stock) return stock;
      return next;
    });
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
                >
                  <IoChevronBack size={24} />
                </motion.button>

                <motion.button
                  onClick={nextPosition}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full shadow transition-all duration-200 z-10"
                  whileHover={{ scale: 1.1, x: 2 }}
                  whileTap={{ scale: 0.9 }}
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
                Banco ergonómico para postura Seiza
              </motion.h2>

              <motion.p
                className="text-gray-600 text-lg mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                El banco Seiza está diseñado para apoyar tu práctica de
                meditación, permitiéndote mantener la postura Seiza de forma
                cómoda y natural. Su diseño ergonómico reduce la presión en las
                rodillas y tobillos, facilitando sesiones más largas y
                profundas.
              </motion.p>

              <motion.div
                className="space-y-4 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Material</span>
                  <span className="text-gray-900 font-medium">
                    Madera de alta calidad
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Dimensiones</span>
                  <span className="text-gray-900 font-medium">
                    42 x 18 x 15 cm
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Peso</span>
                  <span className="text-gray-900 font-medium">1.1 kg</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Stock disponible</span>
                  <span
                    className={`font-medium ${
                      stock > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stock > 0 ? `${stock} piezas` : "Agotado"}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Vista Actual</span>
                  <span className="text-blue-500 font-medium">
                    Posición {currentPosition + 1}/10
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900">
                    ${totalPrice.toLocaleString("es-MX")} MXN
                  </span>
                  <span className="text-green-600 text-sm bg-green-100 px-3 py-1 rounded-full">
                    {stock > 0 ? "Disponible" : "Agotado"}
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-gray-700">Cantidad:</span>
                  <button
                    className="bg-gray-200 px-2 py-1 rounded text-lg font-bold"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{quantity}</span>
                  <button
                    className="bg-gray-200 px-2 py-1 rounded text-lg font-bold"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= stock}
                  >
                    +
                  </button>
                  <span className="text-gray-500 text-sm">(Máx: {stock})</span>
                </div>
                <motion.button
                  className={`w-full bg-blue-500 text-white font-bold py-4 px-8 rounded-2xl hover:bg-blue-600 transition-all duration-200 shadow flex items-center justify-center gap-2 ${
                    isInCart || stock === 0 || quantity < 1
                      ? "opacity-60 cursor-not-allowed"
                      : ""
                  }`}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  disabled={isInCart || stock === 0 || quantity < 1}
                >
                  <IoCart size={20} />
                  {isInCart
                    ? "En carrito"
                    : stock === 0
                    ? "Sin stock"
                    : quantity < 1
                    ? "Selecciona cantidad"
                    : "Añadir al carrito"}
                </motion.button>
                <motion.button
                  className={`w-full ${
                    isFavorite
                      ? "bg-red-500 text-white"
                      : "bg-gray-100 text-gray-700"
                  } font-medium py-3 px-8 rounded-2xl hover:bg-gray-200 transition-all duration-200 border border-gray-200 flex items-center justify-center gap-2`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleToggleFavorite}
                >
                  <IoHeart size={18} />
                  {isFavorite ? "En Favoritos" : "Guardar en Favoritos"}
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
        {/* Beneficios y Características: ocupa ambas columnas en desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mt-8 lg:col-span-2"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Beneficios y Características
          </h3>
          <ul className="space-y-3">
            {[
              "Permite mantener la postura Seiza de manera cómoda y estable.",
              "Reduce la presión en rodillas y tobillos durante la meditación.",
              "Fabricado en madera resistente y ligera.",
              "Acabado suave y bordes redondeados para mayor confort.",
              "Ideal para principiantes y practicantes avanzados.",
              "Fácil de transportar y almacenar.",
            ].map((feature, index) => (
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
        </motion.div>
      </div>
    </div>
  );
}

export default Product;
