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
          src="/banner_blog_inside2.webp"
          className="h-auto w-full object-cover hidden md:block"
          alt="banner"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.img
          src="/banner_blog_inside_mobile2.webp"
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
          Types of Meditation: Find the Practice That Resonates With You
        </motion.h1>
      </section>

      <article className="bg-[url(/background.webp)] bg-cover bg-center px-6 md:px-12 py-8 font-normal">
        <p className="text-black text-[18px] md:text-[25px] mb-8 leading-relaxed">
          We're constantly connected to the outside world—screens,
          notifications, and nonstop stimuli. Stress accumulates, leaving our
          minds restless, our bodies tense, and even making it hard to sleep. In
          this chaos, meditation becomes a sanctuary—a voluntary pause to
          reconnect and find clarity. It doesn’t mean escaping reality, but
          finding peace within it.
        </p>

        <p className="text-black text-[18px] md:text-[25px] mb-12 leading-relaxed">
          Each person is unique, and how you connect with yourself can vary. The
          best way to begin meditating is by exploring different techniques to
          find what suits your needs.
        </p>

        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          Vipassana Meditation
        </h2>
        <div className="md:flex gap-8">
          <img src="/blog2.1.webp" alt="" className="size-96 mb-4" />

          <p className="text-xl mb-12 leading-relaxed">
            Known as "insight meditation," Vipassana helps us see things as they
            really are. It involves deep self-observation, allowing us to
            understand our inner world and gradually let go of negative thoughts
            and emotional pain. Mindfulness techniques are rooted in this
            tradition.
          </p>
        </div>
        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          Buddhist Meditation
        </h2>
        <div className="md:flex gap-8">
          <img src="/blog2.2.webp" alt="" className="size-96 mb-4" />

          <p className="text-xl mb-12 leading-relaxed">
            Also called "total meditation," its purpose is to stay present—fully
            aware of the here and now. It invites us to embrace all thoughts,
            sensations, and emotions without judgment, helping us take control
            of our minds rather than being controlled by them.
          </p>
        </div>
        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          Mantra Meditation
        </h2>
        <div className="md:flex gap-8">
          <img src="/blog2.3.webp" alt="" className="size-96 mb-4" />

          <p className="text-xl mb-12 leading-relaxed">
            This technique involves chanting sacred sounds to enter deep
            meditation. The vibration of the sounds affects both the voice and
            the mind, creating a profound inner stillness.
          </p>
        </div>
        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          Transcendental Meditation
        </h2>
        <div className="md:flex gap-8">
          <img src="/blog2.4.webp" alt="" className="size-96 mb-4" />
          <div>
            <p className="text-xl mb-4 leading-relaxed">
              Simple yet powerful: sit in silence, close your eyes, and softly
              repeat a personalized mantra. Practiced for just 20 minutes a day,
              it can deeply relax your body and mind.
            </p>
            <p className="text-xl mb-12 leading-relaxed italic">
              There are many paths to calm. Some days your body needs silence,
              others repetition or breath. Let yourself explore until you find
              the practice that resonates with you. It's not about mastering a
              technique, but finding a refuge that brings clarity amid daily
              chaos.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-16 items-start">
          <img src="/blog2.5.webp" alt="" className="mb-4" />

          <div className="w-full">
            <h2 className="text-[35px] md:text-[50px] font-bold mb-8">
              Complement Your Practice: The Seiza Bench
            </h2>
            <p className="text-xl mb-4 leading-relaxed">
              For greater stability and relaxation, try our ergonomic Seiza
              bench. It supports natural posture, easing knee and back tension
              so you can meditate in comfort.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

export default page;
