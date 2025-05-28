"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";

function SuccessPage() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const [resumen, setResumen] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const stored = sessionStorage.getItem("resumenCompra");
    if (!stored) {
      router.push("/");
    } else {
      setResumen(JSON.parse(stored));
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">
          {isEn ? "Loading order summary..." : "Cargando resumen de compra..."}
        </p>
      </div>
    );
  }

  const formatoMoneda = new Intl.NumberFormat(isEn ? "en-US" : "es-MX", {
    style: "currency",
    currency: isEn ? "USD" : "MXN",
  });

  const handleVolverInicio = () => {
    sessionStorage.removeItem("resumenCompra");
    router.push("/");
  };

  return (
    <main
      role="main"
      className="min-h-screen bg-green-50 flex items-center justify-center py-10 px-4"
      aria-label={
        isEn ? "Order confirmation page" : "Página de confirmación de compra"
      }
    >
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 border border-green-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            {isEn
              ? "🎉 Thank you for your purchase!"
              : "🎉 ¡Gracias por tu compra!"}
          </h1>
          <p className="text-gray-700 text-lg">
            {isEn
              ? "Your order has been successfully processed."
              : "Tu pedido ha sido procesado exitosamente."}
          </p>
        </div>

        <section className="mt-8 space-y-4" aria-labelledby="detalles-compra">
          <div
            className="bg-green-50 p-4 rounded-md border border-green-200"
            role="region"
            aria-live="polite"
          >
            <h2
              id="detalles-compra"
              className="text-lg font-semibold text-green-800 mb-2"
            >
              {isEn ? "Order Details" : "Detalles de tu compra"}
            </h2>
            <ul className="text-gray-700 space-y-1">
              <li>
                <strong>{isEn ? "Name:" : "Nombre:"}</strong> {resumen.nombre}
              </li>
              <li>
                <strong>Email:</strong>{" "}
                {resumen.email || (isEn ? "Not provided" : "No registrado")}
              </li>
              <li>
                <strong>{isEn ? "Phone:" : "Teléfono:"}</strong>{" "}
                {resumen.telefono || (isEn ? "Not provided" : "No registrado")}
              </li>
              <li>
                <strong>{isEn ? "Address:" : "Dirección:"}</strong>
                <br />
                {isEn ? "Street" : "Calle"}: {resumen.direccion_calle}
                <br />
                {isEn ? "Number" : "Número"}: {resumen.direccion_numero}
                <br />
                {isEn ? "Neighborhood" : "Colonia"}: {resumen.direccion_colonia}
                <br />
                {isEn ? "City" : "Ciudad"}: {resumen.direccion_ciudad}
                <br />
                {isEn ? "State" : "Estado"}: {resumen.direccion_estado}
                <br />
                {isEn ? "Postal Code" : "Código Postal"}: {resumen.direccion_cp}
              </li>
              <li>
                <strong>
                  {isEn ? "Items purchased:" : "Cantidad comprada:"}
                </strong>{" "}
                {resumen.cantidad_comprada}
              </li>
              <li>
                <strong>{isEn ? "Total:" : "Total:"}</strong>{" "}
                {formatoMoneda.format(resumen.total)}
              </li>
            </ul>
          </div>

          <div
            className="bg-white p-4 rounded-md border border-gray-200"
            role="region"
            aria-label={
              isEn
                ? "Next steps information"
                : "Información sobre los siguientes pasos"
            }
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {isEn ? "What’s next?" : "¿Qué sigue?"}
            </h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>
                {isEn
                  ? "We’ll send you a confirmation email if one was provided."
                  : "Te enviaremos un correo de confirmación si registraste uno."}
              </li>
              <li>
                {isEn
                  ? "Your order will be prepared within the next 24 business hours."
                  : "Tu pedido será preparado en las próximas 24 horas hábiles."}
              </li>
              <li>
                {isEn
                  ? "You’ll be notified when it’s ready for shipping."
                  : "Te notificaremos cuando esté listo para envío."}
              </li>
              <li>
                {isEn
                  ? "Thanks for trusting us 🙌"
                  : "Gracias por confiar en nosotros 🙌"}
              </li>
            </ul>
          </div>
        </section>

        <div className="mt-8 text-center">
          <button
            onClick={handleVolverInicio}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow transition"
            aria-label={
              isEn ? "Go back to homepage" : "Volver a la página principal"
            }
          >
            {isEn ? "Back to Home" : "Volver al inicio"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default SuccessPage;
