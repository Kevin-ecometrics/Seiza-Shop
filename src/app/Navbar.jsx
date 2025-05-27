"use client";

import React from "react";
import { useLanguage } from "../app/context/LanguageContext";

function Navbar() {
  const { language, changeLanguage } = useLanguage();
  const isEn = language === "en";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-sm px-8 py-4 flex items-center justify-between z-50">
      <div className="text-2xl font-extrabold tracking-tight text-gray-900 select-none">
        {isEn ? "Seiza Store" : "Tienda Seiza"}
      </div>
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
    </nav>
  );
}

export default Navbar;
