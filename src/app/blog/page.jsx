"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

const blogCards = [
  { title: "Primer blog", text: "Texto de ejemplo para el blog 1." },
  { title: "Segundo blog", text: "Texto de ejemplo para el blog 2." },
  { title: "Tercer blog", text: "Texto de ejemplo para el blog 3." },
  { title: "Cuarto blog", text: "Texto de ejemplo para el blog 4." },
  { title: "Quinto blog", text: "Texto de ejemplo para el blog 5." },
  { title: "Sexto blog", text: "Texto de ejemplo para el blog 6." },
];

const CARDS_PER_PAGE = 3;

function BlogPage() {
  const [index, setIndex] = useState(0);

  const totalPages = Math.ceil(blogCards.length / CARDS_PER_PAGE);

  const handleNext = () => {
    if (index < totalPages - 1) setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const currentCards = blogCards.slice(
    index * CARDS_PER_PAGE,
    index * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  return (
    <div>
      <Navbar />

      <section className="relative">
        <img src="/banner_blog.webp" className="h-screen w-full" alt="banner" />
        <h1 className="absolute translate-x-24 inset-0 flex items-center justify-start text-[80px] md:text-[150px] text-[#8C5A2E] font-bold">
          Blog
        </h1>
      </section>

      <section className="bg-[url(/background.webp)] bg-cover bg-center py-20 px-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold text-[#8C5A2E]">Últimos posts</h2>
            <div className="space-x-4">
              <button
                onClick={handlePrev}
                disabled={index === 0}
                className={`text-[#8C5A2E] transition-colors ${
                  index === 0
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:text-[#6b3e1a]"
                }`}
              >
                <FaArrowLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                disabled={index === totalPages - 1}
                className={`text-[#8C5A2E] transition-colors ${
                  index === totalPages - 1
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:text-[#6b3e1a]"
                }`}
              >
                <FaArrowRight size={24} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {currentCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-gray-200 rounded-lg p-6 shadow-md w-72 h-96"
                >
                  <h3 className="text-2xl font-bold text-[#1E1E1E] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-base">{card.text}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BlogPage;
