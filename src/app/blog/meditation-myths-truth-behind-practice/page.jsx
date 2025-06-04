"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

function page() {
  return (
    <div>
      <Navbar />
      <section className="relative">
        <motion.img
          src="/banner_blog_inside.webp"
          className="h-auto w-full object-cover hidden md:block"
          alt="banner"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.img
          src="/banner_blog_inside_mobile.webp"
          className="h-screen w-full object-cover block md:hidden"
          alt="banner"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.h1
          className="absolute bottom-10 left-4 md:left-10 text-[20px] md:text-[60px] text-white font-bold drop-shadow-[4px_4px_8px_rgba(0,0,0,0.8)] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] stroke-2 stroke-black"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Meditation Myths: Discovering the Truth Behind the Practice
        </motion.h1>
      </section>

      <article className="bg-[url(/background.webp)] bg-cover bg-center px-6 md:px-12 py-8 font-normal text-black">
        <p className="text-[18px] md:text-[22px] mb-8 leading-relaxed">
          Some people believe meditation must lead to mystical visions, divine
          enlightenment, or out-of-body experiences. While meditation can
          generate deep feelings of peace and happiness, its true purpose is not
          to achieve extraordinary phenomena but to cultivate a clearer and
          calmer mind.
        </p>

        <p className="text-[18px] md:text-[22px] mb-12 leading-relaxed">
          The real benefits are reflected in daily life: greater concentration,
          creativity, and a calmer attitude towards challenges. Meditation is
          not an escape from reality but a tool to live it more fully.
        </p>

        <h2 className="text-[28px] md:text-[40px] font-bold mb-6">
          "To meditate, you must have spiritual practice or beliefs"
        </h2>
        <p className="text-[18px] md:text-[22px] mb-12 leading-relaxed">
          Meditation is a practice that takes us beyond mental noise to a more
          relaxed and calm inner state. It does not imply any particular
          spiritual orientation; it is a universal practice that can adapt to
          any life philosophy.
        </p>

        <h2 className="text-[28px] md:text-[40px] font-bold mb-6">
          "Meditation means emptying the mind"
        </h2>
        <p className="text-[18px] md:text-[22px] mb-12 leading-relaxed">
          Meditation does not mean stopping or eliminating your thoughts. In
          fact, this approach only creates more internal stress. The real focus
          is observing thoughts without clinging to them, like clouds passing in
          the sky. Whether through breathing, a mantra, or mindfulness, the goal
          is to choose where to focus without judging what arises. If you get
          distracted, simply gently return to your point of attention.
        </p>

        <h2 className="text-[28px] md:text-[40px] font-bold mb-6">
          "To meditate, you need to distance yourself from everyone and
          everything"
        </h2>
        <p className="text-[18px] md:text-[22px] mb-12 leading-relaxed">
          The true purpose of meditation is not to detach from everything and
          get rid of it all, but rather to transcend all external situations.
          Its true essence is not to escape but to learn to be present in any
          circumstance.
        </p>
        <p className="text-[18px] md:text-[22px] mb-12 leading-relaxed">
          With constant practice, you will develop a more balanced mind, capable
          of maintaining calm even amid chaos. Meditation does not disconnect
          you from life; it helps you live it with greater awareness and
          harmony.
        </p>

        <h2 className="text-[28px] md:text-[40px] font-bold mb-6">
          Meditation is simple, deep, and accessible
        </h2>
        <p className="text-[18px] md:text-[22px] mb-12 leading-relaxed">
          Meditation requires no special skills, beliefs, or perfect conditions.
          It is a journey back to oneself, where you discover that peace is not
          in what you achieve but in how you inhabit the present.
        </p>
        <p className="text-[18px] md:text-[22px] mb-12 leading-relaxed">
          By demystifying it, we understand it is not magic but mental training
          that, with consistency, transforms how we live.
        </p>

        <p className="text-[18px] md:text-[22px] mb-12 leading-relaxed">
          Meditation is a daily gift. When you need support that grows with you,
          our seiza bench is here to make your sessions more comfortable and
          fluid.
        </p>
      </article>

      <Footer />
    </div>
  );
}

export default page;
