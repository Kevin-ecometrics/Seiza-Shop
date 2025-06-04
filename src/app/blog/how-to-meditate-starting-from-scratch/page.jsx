"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

function Page() {
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
          How to Meditate: Starting from Zero
        </motion.h1>
      </section>

      <article className="bg-[url(/background.webp)] bg-cover bg-center px-6 md:px-12 py-8 font-normal">
        <motion.h2
          className="text-[28px] md:text-[40px] font-bold mb-6"
          {...fadeInUp}
          transition={{ duration: 0.5 }}
        >
          Meditation: A Path to Integral Well-being
        </motion.h2>

        <motion.p
          className="text-[18px] md:text-[22px] mb-6 leading-relaxed text-black"
          {...fadeInUp}
          transition={{ duration: 0.6 }}
        >
          It is a powerful tool to improve quality of life, both mentally and
          physically. However, starting meditation requires patience and
          consistency, as it is a gradual process cultivated through practice.
        </motion.p>

        <motion.p
          className="text-[18px] md:text-[22px] mb-6 leading-relaxed text-black"
          {...fadeInUp}
          transition={{ duration: 0.7 }}
        >
          To develop solid meditation habits, it is fundamental to pay attention
          to two key aspects: technique and posture. We invite you to explore
          different ways to meditate and positions until you find those that
          bring you greater comfort and mental clarity. Once identified, follow
          these recommendations to optimize your practice:
        </motion.p>

        <motion.ul
          className="list-disc list-inside text-[18px] md:text-[22px] mb-10 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <li>
            <strong>Dress comfortably:</strong> Opt for loose, breathable
            clothing that does not restrict your movements. Shoes and
            accessories are not necessary, as the ideal is to minimize
            distractions and focus on the connection with your body.
          </li>
          <li>
            <strong>Choose a serene space:</strong> Find a quiet place where you
            can relax without interruptions. It can be a corner of your home, a
            park, a lake, or even the mountains. The important thing is that the
            environment transmits peace and allows you to immerse yourself in
            the practice.
          </li>
          <li>
            <strong>Adopt a conscious posture:</strong> Sit with your back
            straight but not rigid, keeping your body relaxed. You can start on
            the floor, on a cushion or mat, with your legs crossed. The classic
            position (such as sukhasana or padmasana) favors concentration, but
            the essential thing is that you find a sustainable posture for you.
            Breathe deeply to harmonize body and mind.
          </li>
          <li>
            <strong>Focus on your breath:</strong> Close your eyes and direct
            your attention to the natural rhythm of your breath. If you prefer,
            you can support yourself with techniques such as meditation with
            sounds (for example, mantras or bells) to deepen the meditative
            state.
          </li>
          <li>
            <strong>Accept your thoughts without judgment:</strong> During
            meditation, it is normal for ideas, emotions, or even worries to
            arise. Instead of resisting, observe them kindly and let them pass,
            like clouds in the sky. This acceptance exercise will help you
            release emotional burdens and cultivate resilience.
          </li>
          <li>
            <strong>Gradual progression:</strong> Start with short sessions of 1
            or 2 minutes and gradually increase the time. The ideal goal is to
            reach meditations of 30 minutes or more, but always adapting to your
            own pace. Consistency is more valuable than duration.
          </li>
        </motion.ul>

        <motion.p
          className="text-[18px] md:text-[22px] mb-12 leading-relaxed text-black"
          {...fadeInUp}
          transition={{ duration: 0.9 }}
        >
          Starting to meditate is a personal process, and every small step
          counts. Our solid poplar seiza bench is designed to accompany you on
          this path, offering comfort and stability from your first practices to
          longer sessions.
        </motion.p>
      </article>

      <Footer />
    </div>
  );
}

export default Page;
