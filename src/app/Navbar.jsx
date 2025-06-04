"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../app/context/LanguageContext";

function Navbar() {
  const { language, changeLanguage } = useLanguage();
  const isEn = language === "en";
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú cuando se hace scroll
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [scrolled]);

  // Cerrar menú al hacer clic en un enlace
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const links = [
    { id: 1, label: isEn ? "Home" : "Inicio", href: "/" },
    { id: 2, label: "Blog", href: "/blog" },
    { id: 3, label: isEn ? "Contact" : "Contacto", href: "/contact" },
    { id: 4, label: isEn ? "FAQ" : "Preguntas", href: "/faq" },
  ];

  const navClass = [
    "fixed top-0 left-0 w-full px-4 md:px-8 py-4 z-50 transition-colors duration-300",
    scrolled ? "bg-white shadow-md" : "bg-transparent",
  ].join(" ");

  const selectClass = [
    "border rounded-lg px-3 py-2 text-sm md:text-base focus:ring-2 outline-none transition-colors duration-200",
    scrolled
      ? "border-[#8C5A2E] text-[#8C5A2E] focus:ring-[#8C5A2E]/70"
      : "border-white text-white focus:ring-white",
  ].join(" ");

  const getLinkClass = (isActive, isMobile = false) => {
    const baseClass = isMobile ? "block py-3 px-4 text-lg" : "";

    if (isActive) {
      return `${baseClass} font-black text-[#8C5A2E] underline transition-colors duration-200 hover:text-[#8C5A2E]`;
    }
    if (scrolled || isMobile) {
      return `${baseClass} font-bold text-[#8C5A2E]/70 transition-colors duration-200 hover:text-[#8C5A2E]`;
    }
    return `${baseClass} font-bold text-white/70 transition-colors duration-200 hover:text-[#8C5A2E]`;
  };

  // Función para renderizar el icono de hamburguesa
  const HamburgerIcon = ({ isOpen, scrolled }) => (
    <div className="relative w-6 h-6 cursor-pointer">
      <span
        className={`absolute left-0 w-6 h-0.5 transition-all duration-300 ${
          scrolled ? "bg-[#8C5A2E]" : "bg-white"
        } ${isOpen ? "top-3 rotate-45" : "top-1"}`}
      />
      <span
        className={`absolute left-0 top-3 w-6 h-0.5 transition-all duration-300 ${
          scrolled ? "bg-[#8C5A2E]" : "bg-white"
        } ${isOpen ? "opacity-0" : "opacity-100"}`}
      />
      <span
        className={`absolute left-0 w-6 h-0.5 transition-all duration-300 ${
          scrolled ? "bg-[#8C5A2E]" : "bg-white"
        } ${isOpen ? "top-3 -rotate-45" : "top-5"}`}
      />
    </div>
  );

  function renderDesktopLinks() {
    return links.map(({ id, label, href }) => (
      <li key={id}>
        <Link href={href} className={getLinkClass(pathname === href)}>
          {label}
        </Link>
      </li>
    ));
  }

  function renderMobileLinks() {
    return links.map(({ id, label, href }) => (
      <li key={id} className="border-b border-gray-200 last:border-b-0">
        <Link
          href={href}
          className={getLinkClass(pathname === href, true)}
          onClick={handleLinkClick}
        >
          {label}
        </Link>
      </li>
    ));
  }

  return (
    <>
      <nav className={navClass}>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-end w-full">
          <ul className="flex space-x-6">{renderDesktopLinks()}</ul>
          <div className="ml-4">
            <select
              value={language || ""}
              onChange={(e) => {
                const newLang = e.target.value;
                const currentPath = pathname;

                if (currentPath.startsWith("/blog/")) {
                  const slug = currentPath.split("/")[2];
                  const { blogSlugMap } = require("./utils/blogSlugMap");

                  const translatedSlug = blogSlugMap[slug];
                  if (translatedSlug) {
                    const newPath = `/blog/${translatedSlug}`;
                    changeLanguage(newLang);
                    window.location.href = newPath;
                    return;
                  }
                }

                changeLanguage(newLang);
              }}
              className={selectClass}
            >
              <option value="" disabled>
                Language / Idioma
              </option>
              <option value="en" className="text-[#8C5A2E]">
                English
              </option>
              <option value="es" className="text-[#8C5A2E]">
                Español
              </option>
            </select>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between w-full">
          {/* Logo/Brand - opcional */}
          <div className="flex-1">
            {/* Aquí puedes agregar tu logo si lo tienes */}
          </div>

          {/* Language Selector - Mobile */}
          <div className="mr-4">
            <select
              value={language || ""}
              onChange={(e) => changeLanguage(e.target.value)}
              className={selectClass}
            >
              <option value="" disabled>
                Language / Idioma
              </option>
              <option value="en" className="text-[#8C5A2E]">
                EN
              </option>
              <option value="es" className="text-[#8C5A2E]">
                ES
              </option>
            </select>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <HamburgerIcon isOpen={isMenuOpen} scrolled={scrolled} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Slide Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-[#8C5A2E]">
            {isEn ? "Menu" : "Menú"}
          </h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-[#8C5A2E] hover:bg-gray-100 rounded-full"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <nav className="py-4">
          <ul>{renderMobileLinks()}</ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
