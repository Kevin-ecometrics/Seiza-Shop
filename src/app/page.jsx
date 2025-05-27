"use client";
import React, { useState } from "react";
import Hero from "./Hero";
import Product from "./Product";
import Navbar from "./Navbar";

function page() {
  // Estados globales para sincronizar favoritos y carrito
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [purchaseMethod, setPurchaseMethod] = useState("Pago en línea");

  // Métodos para manipular favoritos y carrito
  const addToFavorites = (product) => {
    setFavorites((prev) =>
      prev.some((item) => item.id === product.id) ? prev : [...prev, product]
    );
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        // Actualiza cantidad si ya existe
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prev, product];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Navbar
        favorites={favorites}
        cart={cart}
        purchaseMethod={purchaseMethod}
        setPurchaseMethod={setPurchaseMethod}
        removeFromFavorites={removeFromFavorites}
        removeFromCart={removeFromCart}
      />
      <Hero />
      <Product
        favorites={favorites}
        cart={cart}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default page;
