"use client";
import React, { useEffect, useState } from "react";

function page() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = window.sessionStorage.getItem("checkout_cart");
      if (stored) setCart(JSON.parse(stored));
    }
  }, []);

  const total = cart.reduce((acc, item) => acc + (item.total || 0), 0);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-2">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100">
        <div className="px-8 py-8 border-b">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
            Checkout
          </h1>
          <p className="text-gray-500 text-base">
            Revisa tu pedido y completa tus datos para finalizar la compra.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 px-8 py-8">
          {/* Carrito */}
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Tu carrito</h2>
            {cart.length === 0 ? (
              <div className="text-gray-500 text-center py-12 text-lg">
                No hay productos en el carrito.
              </div>
            ) : (
              <ul className="space-y-6">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center gap-4 border-b pb-4 last:border-b-0"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-20 h-20 object-contain rounded-lg border bg-white"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-base">
                        {item.alt}
                      </div>
                      <div className="text-sm text-gray-500">
                        Cantidad:{" "}
                        <span className="font-bold text-gray-700">
                          {item.quantity}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-700">
                        ${item.total?.toLocaleString("es-MX")}
                      </div>
                      <div className="text-xs text-gray-400">
                        c/u ${item.price?.toLocaleString("es-MX")}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {/* Resumen */}
            {cart.length > 0 && (
              <div className="mt-8 border-t pt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">Subtotal</span>
                  <span className="text-gray-900 font-bold text-lg">
                    ${total.toLocaleString("es-MX")}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500 text-sm">
                    Envío (calculado al finalizar)
                  </span>
                  <span className="text-gray-500 text-sm">-</span>
                </div>
                <div className="flex justify-between items-center border-t pt-4 mt-4">
                  <span className="text-xl font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-extrabold text-blue-700">
                    ${total.toLocaleString("es-MX")}
                  </span>
                </div>
              </div>
            )}
          </div>
          {/* Formulario de datos */}
          <div className="flex-1 max-w-md mx-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Información de contacto
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                  placeholder="tucorreo@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                  placeholder="Ej. 55 1234 5678"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Dirección de envío
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                  placeholder="Calle, número, colonia, ciudad, estado, CP"
                  rows={3}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg mt-4 text-lg shadow transition"
              >
                Finalizar compra
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
