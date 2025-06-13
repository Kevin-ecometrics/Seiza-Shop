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
          className="absolute bottom-10 left-4 md:left-10 text-[20px] text-balance md:text-[60px] text-white font-bold drop-shadow-[4px_4px_8px_rgba(0,0,0,0.8)] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] stroke-2 stroke-black"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Meditation: The Power to Transform Your Mind, Body, and Emotions
        </motion.h1>
      </section>

      <article className="bg-[url(/background.webp)] bg-cover bg-center px-6 md:px-12 py-8 font-normal ">
        {/* Introducción */}
        <p className="text-black text-[18px] md:text-[25px] mb-8 leading-relaxed">
          "Beyond a spiritual practice, science supports its physical,
          emotional, and cognitive benefits. In an accelerated, competitive
          world increasingly lacking empathy, work, daily activities, and even
          social interaction fill us with a thick haze of stress and what we
          know as burnout. Therefore, meditation practice has grown in
          popularity.
        </p>

        {/* Beneficios Físicos */}
        <h2 className="text-[30px] md:text-[60px] font-bold mb-6">
          Physical Benefits: Care for Your Body from Within
        </h2>

        <h3 className="text-[30px] md:text-[40px] font-semibold mb-4">
          Cardiovascular Health and Meditation
        </h3>
        <p className="text-xl mb-4">
          Meditation not only calms and clears that haze of fatigue and stress,
          it also protects your heart.
        </p>
        <p className="text-xl mb-2 font-semibold">
          Studies from the American Heart Association show:
        </p>
        <ul className="list-disc list-inside text-xl mb-6 space-y-2">
          <li>
            Regulates blood pressure: Relaxes nervous signals that tighten blood
            vessels, facilitating blood flow.
          </li>
          <li>
            Prevents atherosclerosis: Chronic stress narrows arteries;
            meditation counteracts this effect, preventing heart attacks and
            strokes.
          </li>
        </ul>
        <p className="italic text-lg mb-12">
          "Just 10 minutes a day is enough to notice changes in your heart
          rate,"
        </p>

        {/* Cortisol */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12 items-start">
          <img src="/blog1.1.webp" alt="" />
          <div className="w-full">
            <h2 className="text-[35px] md:text-[50px] font-bold mb-8">
              Meditation: The Best Tool to Reduce Cortisol
            </h2>
            <p className="text-xl mb-4">
              Psychological and physical stress causes an increase in the
              hormone cortisol, which in excess leads to inflammation, fatigue,
              insomnia, increased depression, anxiety, and high blood pressure.
            </p>
            <ul className="list-disc list-inside text-xl space-y-2">
              <li>
                Reduces cortisol levels: A University of California experiment
                showed participants had 30% less cortisol after 8 weeks of
                practice.
              </li>
              <li>
                Stops chronic inflammation: By lowering inflammatory cytokines,
                meditation protects your immune system.
              </li>
            </ul>
          </div>
        </div>

        {/* Mindfulness */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12 items-start">
          <div className="w-full">
            <h2 className="text-[35px] md:text-[50px] font-bold mb-8">
              Mindfulness: Clarity in the Midst of Chaos
            </h2>
            <p className="text-xl mb-4">
              Meditation can increase positive emotions and actions towards
              ourselves and others. It's not about 'clearing the mind' but
              observing without judgment.
            </p>
            <ul className="list-disc list-inside text-xl space-y-2">
              <li>
                Reduces social anxiety: A Stanford study showed it improves
                confidence in interactions.
              </li>
              <li>
                Transforms relationships: Cultivating self-kindness
                (self-compassion) extends empathy to others, even those who
                challenge you.
              </li>
            </ul>
          </div>
          <img src="/blog1.2.webp" alt="" />
        </div>

        {/* Managing Anxiety */}
        <h2 className="text-[35px] md:text-[50px] mb-8 font-bold">
          Meditation for Managing Anxiety
        </h2>
        <p className="text-xl mb-6 leading-relaxed">
          Meditation can be an excellent support for dealing with anxiety and
          related psychological issues. From panic attacks to work stress,
          meditation acts like a pause button.
        </p>
        <p className="text-xl mb-12 leading-relaxed">
          Exercises combining yoga and meditation blend movement and
          mindfulness, improving memory capacity, focus, and mental clarity.
          They are excellent tools to keep the mind young, reducing anxiety by
          40% according to the Journal of Clinical Psychology.
        </p>

        {/* Memory and Focus */}
        <h2 className="text-[35px] md:text-[50px] mb-8 font-bold">
          Memory and Focus: Kirtan Kriya Meditation
        </h2>
        <p className="text-xl mb-12 leading-relaxed">
          This meditation combines a mantra with repeated finger movements to
          focus your thoughts. It helps improve alertness, mental speed, and
          memory. This method aids in combating normal age-related memory loss.
        </p>

        {/* Age of Distractions */}
        <h2 className="text-[35px] md:text-[50px] mb-8 font-bold">
          Meditation: The Solution in the Age of Distractions
        </h2>
        <p className="text-xl mb-4">
          Does your attention jump from one place to another like a frog?
          Meditation trains the brain to:
        </p>
        <ul className="list-disc list-inside text-xl mb-12 space-y-2">
          <li>
            Filter irrelevant stimuli: Like a muscle, concentration strengthens
            with practice.
          </li>
          <li>
            Make clearer decisions: Reduces impulsivity by activating the
            prefrontal cortex.
          </li>
        </ul>

        {/* Seiza Bench */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-16 items-start">
          <img src="/blog1.3.webp" alt="" />
          <div className="w-full">
            <h2 className="text-[35px] md:text-[50px] font-bold mb-8">
              Your Best Ally: The Seiza Bench
            </h2>
            <p className="text-xl mb-4 leading-relaxed">
              If you want to start meditating or take your practice to the next
              level, our Seiza bench is your best ally. Designed to provide
              comfort and support, it helps you maintain an upright posture
              effortlessly, aligning your spine and relaxing your body while you
              meditate.
            </p>
            <p className="text-xl leading-relaxed">
              Thanks to its ergonomic shape, it improves circulation and avoids
              tension in your knees and back. Also, its compact and lightweight
              design allows you to take it anywhere or store it easily when not
              in use.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

export default page;
