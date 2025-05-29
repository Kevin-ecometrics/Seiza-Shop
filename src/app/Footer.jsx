"use client";
import React from "react";
import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";

function Footer() {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <footer className="w-full bg-[url(/background.webp)] bg-cover bg-center text-[#8C5A2E] font-bold px-8 md:px-16 py-12 relative overflow-hidden">
      {/* Línea decorativa superior */}
      <div className="border-t-2 border-[#8C5A2E] w-[95%] mx-auto absolute top-0 left-0 right-0"></div>

      {/* Contenedor principal en columna en mobile */}
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-12">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/logo_footer.svg"
            alt="Seiza Logo"
            className="h-20 w-auto"
          />
        </div>

        {/* Bloques de links en columna en mobile */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 text-center md:text-left text-sm md:text-base">
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
          <div className="relative md:pl-4">
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
    </footer>
  );
}

export default Footer;
