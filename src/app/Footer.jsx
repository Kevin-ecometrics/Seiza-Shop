"use client";
import React from "react";
import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";
import { usePathname } from "next/navigation";

const blogLinks = [
  {
    url: "/blog/meditation-power-transform-mind-body-emotions",
    title: {
      en: "Meditation: The Power to Transform Your Mind, Body, and Emotions",
      es: "Meditación: El Poder de Transformar tu Mente, Cuerpo y Emociones",
    },
  },
  {
    url: "/blog/types-of-meditation-find-your-practice",
    title: {
      en: "Types of Meditation: Find the Practice That Resonates With You",
      es: "Tipos de Meditación: Encuentra la Práctica que Resuena Contigo",
    },
  },
  {
    url: "/blog/different-postures-your-yoga-pace",
    title: {
      en: "Different Postures: Your Yoga, Your Pace",
      es: "Diferentes Posturas: Tu Yoga, Tu Ritmo",
    },
  },
  {
    url: "/blog/seiza-simple-posture-healthy-spine-peaceful-mind",
    title: {
      en: "Seiza: A Simple Posture for a Healthy Spine and a Peaceful Mind",
      es: "Seiza: Una Simple Postura para una Columna Sana y una Mente en Paz",
    },
  },
  {
    url: "/blog/how-to-meditate-starting-from-scratch",
    title: {
      en: "How to Meditate: Starting from Scratch",
      es: "Cómo Meditar: Empezar desde cero",
    },
  },
  {
    url: "/blog/meditation-myths-truth-behind-practice",
    title: {
      en: "Meditation Myths: Discovering the Truth Behind the Practice",
      es: "Mitos sobre la meditación: Descubriendo la verdad detrás de la práctica",
    },
  },
];

function Footer() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const pathname = usePathname();

  // Mostrar links solo si estamos en /blog o sub-rutas
  const isBlogPath = pathname === "/blog" || pathname.startsWith("/blog/");

  return (
    <footer className="w-full bg-[url(/background.webp)] bg-cover bg-center text-[#8C5A2E] font-bold px-8 md:px-16 py-12 relative overflow-hidden">
      {/* Línea decorativa superior */}
      <div className="border-t-2 border-[#8C5A2E] w-[95%] mx-auto absolute top-0 left-0 right-0"></div>

      {/* Contenedor principal en columna en mobile */}
      <div className="flex flex-col md:items-center md:flex-row md:justify-between gap-12">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/logo_footer.svg"
            alt="Seiza Logo"
            className="h-20 w-auto"
          />
        </div>

        {/* Bloques de links en columna en mobile */}
        <div className="flex flex-col   md:grid md:grid-cols-2 gap-8 md:text-center text-left text-lg  ">
          {/* Bloque 1: Enlaces hacia secciones dentro de /faq */}
          <ul className="space-y-2">
            <li>
              <Link href="/faq#purchase" className="hover:underline">
                {isEn ? "Purchase Policies" : "Políticas de Compras"}
              </Link>
            </li>
            <li>
              <Link href="/faq#shipping" className="hover:underline">
                {isEn ? "Shipping Policies" : "Políticas de Envíos"}
              </Link>
            </li>
            <li>
              <Link href="/faq#return" className="hover:underline">
                {isEn ? "Return Policies" : "Políticas de Devoluciones"}
              </Link>
            </li>
            <li>
              <Link href="/faq#warranty" className="hover:underline">
                {isEn
                  ? "Product Warranty Policies"
                  : "Políticas de Garantía de Producto"}
              </Link>
            </li>
          </ul>

          {/* Bloque 2 */}
          <div className="relative text-lg md:pl-4">
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[2px] bg-seiza-cuaternario rounded-full" />
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  {isEn ? "Home" : "Inicio"}
                </Link>
              </li>

              <li>
                <Link href="/blog" className="hover:underline">
                  {isEn ? "Blog" : "Blog"}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  {isEn ? "Contact" : "Contacto"}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline">
                  {isEn ? "Questions" : "Preguntas"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {isBlogPath && (
        <div className="mt-6 border-t border-[#8C5A2E] pt-4">
          <h3 className=" mb-2 md:text-center text-lg text-black font-bold">
            {isEn ? "Blog Posts" : "Artículos del Blog"}
          </h3>
          <ul className="gap-4 font-bold md:text-center text-lg grid grid-cols-1 xl:grid-cols-3">
            {blogLinks.map(({ url, title }) => (
              <li key={url}>
                <Link
                  href={url}
                  className="hover:underline text-sm md:text-base"
                >
                  {isEn ? title.en : title.es}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </footer>
  );
}

export default Footer;
