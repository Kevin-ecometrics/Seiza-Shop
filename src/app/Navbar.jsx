"use client";

import React, { useState } from "react";
import {
  IoCart,
  IoHeart,
  IoClose,
  IoTrashBin,
  IoArrowForward,
} from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../app/context/LanguageContext";
import { useRouter } from "next/navigation";

function Navbar({
  favorites = [],
  cart = [],
  removeFromFavorites,
  removeFromCart,
}) {
  const [showFavs, setShowFavs] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { language, changeLanguage } = useLanguage();
  const router = useRouter();

  const isEn = language === "en";

  const asideVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  // Botón base estilo Shopify
  const buttonBase =
    "flex items-center justify-center gap-2 font-semibold rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-400";

  // Botón primario
  const buttonPrimary =
    buttonBase +
    " bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 shadow-md text-base";

  // Botón secundario
  const buttonSecondary =
    buttonBase +
    " bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 shadow text-base";

  // Botón icono
  const buttonIcon =
    "flex items-center justify-center rounded-full p-2 hover:bg-gray-100 transition text-xl";

  const handleCheckout = () => {
    // Guarda el carrito en sessionStorage para la página de checkout
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("checkout_cart", JSON.stringify(cart));
    }
    router.push("/checkout");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-sm px-8 py-4 flex items-center justify-between z-50">
      <div className="text-2xl font-extrabold tracking-tight text-gray-900 select-none">
        {isEn ? "Seiza Store" : "Tienda Seiza"}
      </div>
      <div className="flex items-center gap-8">
        {/* Favoritos */}
        <div className="relative">
          <button
            onClick={() => {
              setShowFavs(true);
              setShowCart(false);
            }}
            className={buttonIcon + " relative"}
            aria-label={isEn ? "View favorites" : "Ver favoritos"}
          >
            <IoHeart
              size={28}
              className={`${
                favorites.length > 0 ? "text-red-500" : "text-gray-700"
              }`}
            />
            {favorites.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5 shadow">
                {favorites.length}
              </span>
            )}
          </button>
        </div>
        {/* Carrito */}
        <div className="relative">
          <button
            onClick={() => {
              setShowCart(true);
              setShowFavs(false);
            }}
            className={buttonIcon + " relative"}
            aria-label={isEn ? "View cart" : "Ver carrito"}
          >
            <IoCart
              size={28}
              className={`${
                cart.length > 0 ? "text-blue-600" : "text-gray-700"
              }`}
            />
            {cart.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white text-xs font-bold rounded-full px-2 py-0.5 shadow">
                {cart.length}
              </span>
            )}
          </button>
        </div>
        {/* Selector de idioma */}
        <div className="ml-4">
          <select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-base focus:ring-2 focus:ring-blue-400"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
      </div>
      {/* Aside Favoritos */}
      <AnimatePresence>
        {showFavs && (
          <motion.aside
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={asideVariants}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[100] flex flex-col"
          >
            <div className="flex items-center justify-between px-8 py-6 border-b">
              <span className="font-extrabold text-2xl text-gray-800 flex items-center gap-2">
                <IoHeart className="text-red-500" size={28} />
                {isEn ? "Favorites" : "Favoritos"}
              </span>
              <button
                onClick={() => setShowFavs(false)}
                className={buttonIcon + " text-2xl"}
                aria-label={isEn ? "Close favorites" : "Cerrar favoritos"}
              >
                <IoClose size={28} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {favorites.length === 0 ? (
                <div className="text-gray-500 text-center mt-16 text-lg">
                  {isEn
                    ? "No favorite products."
                    : "No hay productos en favoritos."}
                </div>
              ) : (
                favorites.map((item) => (
                  <motion.div
                    key={item.id}
                    className="flex items-center gap-4 px-2 py-4 border-b last:border-b-0"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-16 h-16 object-contain rounded-lg border"
                    />
                    <span className="flex-1 text-gray-800 text-base font-medium">
                      {item.alt}
                    </span>
                    <button
                      className={buttonIcon + " text-red-500"}
                      onClick={() => removeFromFavorites(item.id)}
                      title={
                        isEn ? "Remove from favorites" : "Eliminar de favoritos"
                      }
                    >
                      <IoTrashBin size={22} />
                    </button>
                  </motion.div>
                ))
              )}
            </div>
            <div className="p-6 border-t flex justify-end">
              <button
                onClick={() => setShowFavs(false)}
                className={buttonSecondary}
              >
                {isEn ? "Close" : "Cerrar"}
                <IoArrowForward />
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
      {/* Aside Carrito */}
      <AnimatePresence>
        {showCart && (
          <motion.aside
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={asideVariants}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[100] flex flex-col"
          >
            <div className="flex items-center justify-between px-8 py-6 border-b">
              <span className="font-extrabold text-2xl text-gray-800 flex items-center gap-2">
                <IoCart className="text-blue-600" size={28} />
                {isEn ? "Cart" : "Carrito"}
              </span>
              <button
                onClick={() => setShowCart(false)}
                className={buttonIcon + " text-2xl"}
                aria-label={isEn ? "Close cart" : "Cerrar carrito"}
              >
                <IoClose size={28} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {cart.length === 0 ? (
                <div className="text-gray-500 text-center mt-16 text-lg">
                  {isEn
                    ? "Your cart is empty."
                    : "No hay productos en el carrito."}
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div
                    key={item.id}
                    className="flex items-center gap-4 px-2 py-4 border-b last:border-b-0"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-16 h-16 object-contain rounded-lg border"
                    />
                    <div className="flex-1">
                      <div className="text-gray-800 text-base font-semibold">
                        {item.alt}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {isEn ? "Quantity" : "Cantidad"}:{" "}
                        <span className="font-bold text-gray-700">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        {isEn ? "Total" : "Total"}:{" "}
                        <span className="font-bold text-blue-600">
                          ${item.total?.toLocaleString("es-MX") || 0}
                        </span>
                      </div>
                    </div>
                    <button
                      className={buttonIcon + " text-red-500"}
                      onClick={() => removeFromCart(item.id)}
                      title={isEn ? "Remove from cart" : "Eliminar del carrito"}
                    >
                      <IoTrashBin size={22} />
                    </button>
                  </motion.div>
                ))
              )}
            </div>
            <div className="p-6 border-t flex justify-end">
              <button
                onClick={handleCheckout}
                className={buttonPrimary}
                disabled={cart.length === 0}
              >
                {isEn ? "Checkout" : "Finalizar compra"}
                <IoArrowForward />
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
