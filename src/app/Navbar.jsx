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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: 1, label: isEn ? "Home" : "Inicio", href: "/" },
    { id: 2, label: "Blog", href: "/blog" },
    { id: 3, label: isEn ? "Contact" : "Contacto", href: "/contact" },
    { id: 4, label: isEn ? "FAQ" : "Preguntas", href: "/faq" },
  ];

  const navClass = [
    "fixed top-0 left-0 w-full px-8 py-4 z-50 flex items-center justify-end transition-colors duration-300",
    scrolled ? "bg-white shadow-md" : "bg-transparent",
  ].join(" ");

  const selectClass = [
    "border rounded-lg px-3 py-2 text-base focus:ring-2 outline-none transition-colors duration-200",
    scrolled
      ? "border-[#8C5A2E] text-[#8C5A2E] focus:ring-[#8C5A2E]/70"
      : "border-white text-white focus:ring-white",
  ].join(" ");

  const getLinkClass = (isActive) => {
    if (isActive) {
      return "font-black text-[#8C5A2E] underline transition-colors duration-200 hover:text-[#8C5A2E]";
    }
    if (scrolled) {
      return "font-bold text-[#8C5A2E]/70 transition-colors duration-200 hover:text-[#8C5A2E]";
    }
    return "font-bold text-white/70 transition-colors duration-200 hover:text-[#8C5A2E]";
  };

  function renderLinks() {
    return links.map(({ id, label, href }) => (
      <li key={id}>
        <Link href={href} className={getLinkClass(pathname === href)}>
          {label}
        </Link>
      </li>
    ));
  }

  return (
    <nav className={navClass}>
      <ul className="flex space-x-6">{renderLinks()}</ul>
      <div className="ml-4">
        <select
          value={language || ""}
          onChange={(e) => changeLanguage(e.target.value)}
          className={selectClass}
        >
          <option value="" disabled>
            Language / Idioma
          </option>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
