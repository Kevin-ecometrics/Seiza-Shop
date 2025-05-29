"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { useLanguage } from "../../context/LanguageContext";

function page() {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <div>
      <Navbar />
      <section className="relative">
        <motion.img
          src="/banner_blog_inside.webp"
          className="h-screen w-full object-cover"
          alt="banner"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.h1
          className="absolute bottom-10 left-10 text-[20px] md:text-[60px] text-white font-bold drop-shadow-[4px_4px_8px_rgba(0,0,0,0.8)] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] stroke-2 stroke-black"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {isEn
            ? "Meditation Myths: Discovering the Truth Behind the Practice"
            : "Mitos sobre la meditación: Descubriendo la verdad detrás de la práctica"}
        </motion.h1>
      </section>

      <article className="bg-[url(/background.webp)] bg-cover bg-center px-6 md:px-12 py-8 font-normal text-black">
        <p className="text-[18px] md:text-[22px] mb-8 leading-relaxed">
          {isEn
            ? "Some people believe meditation must lead to mystical visions, divine enlightenment, or out-of-body experiences. While meditation can generate deep feelings of peace and happiness, its true purpose is not to achieve extraordinary phenomena but to cultivate a clearer and calmer mind."
            : "Algunas personas creen que la meditación debe llevarlos a visiones místicas, iluminación divina o experiencias fuera del cuerpo. Si bien la meditación puede generar sensaciones profundas de paz y felicidad, su verdadero propósito no es alcanzar fenómenos extraordinarios, sino cultivar una mente más clara y serena."}
        </p>

        <p className="text-[18px] md:text-[22px] mb-12 leading-relaxed">
          {isEn
            ? "The real benefits are reflected in daily life: greater concentration, creativity, and a calmer attitude towards challenges. Meditation is not an escape from reality but a tool to live it more fully."
            : "Los beneficios reales se reflejan en la vida cotidiana: mayor concentración, creatividad y una actitud más tranquila frente a los desafíos. La meditación no es un escape de la realidad, sino una herramienta para vivirla con mayor plenitud."}
        </p>

        <h2 className="text-[28px] md:text-[40px] font-bold mb-6">
          {isEn
            ? `"To meditate, you must have spiritual practice or beliefs"`
            : `"Para meditar debes tener práctica con lo espiritual o con creencias"`}
        </h2>
        <p className="text-[18px] md:text-[22px] mb-12 leading-relaxed">
          {isEn
            ? "Meditation is a practice that takes us beyond mental noise to a more relaxed and calm inner state. It does not imply any particular spiritual orientation; it is a universal practice that can adapt to any life philosophy."
            : "La meditación es una práctica que nos lleva más allá del ruido mental hacia un estado interior más relajado y tranquilo. No implica ninguna orientación espiritual en particular; Es una práctica universal que puede adaptarse a cualquier filosofía de vida."}
        </p>

        <h2 className="text-[28px] md:text-[40px] font-bold mb-6">
          {isEn
            ? `"Meditation means emptying the mind"`
            : `"Meditar significa dejar la mente en blanco"`}
        </h2>
        <p className="text-[18px] md:text-[22px] mb-12 leading-relaxed">
          {isEn
            ? "Meditation does not mean stopping or eliminating your thoughts. In fact, this approach only creates more internal stress. The real focus is observing thoughts without clinging to them, like clouds passing in the sky. Whether through breathing, a mantra, or mindfulness, the goal is to choose where to focus without judging what arises. If you get distracted, simply gently return to your point of attention."
            : "La meditación no significa detener o eliminar tus pensamientos. Claro, este enfoque sólo crea más estrés interno.El verdadero enfoque es observar los pensamientos sin aferrarse a ellos, como nubes que pasan en el cielo. Ya sea mediante la respiración, un mantra o la atención plena, el objetivo es elegir dónde enfocarse, sin juzgar lo que surge. Si te distraes, simplemente regresa suavemente a tu punto de atención."}
        </p>

        <h2 className="text-[28px] md:text-[40px] font-bold mb-6">
          {isEn
            ? `"To meditate, you need to distance yourself from everyone and everything"`
            : `"Para lograr meditar es necesario alejarse de todo y todos"`}
        </h2>
        <p className="text-[18px] md:text-[22px] mb-12 leading-relaxed">
          {isEn
            ? "The true purpose of meditation is not to detach from everything and get rid of it all, but rather to transcend all external situations. Its true essence is not to escape but to learn to be present in any circumstance."
            : "El verdadero propósito de la meditación no es desprenderte de todo y deshacerse de todo, sino por el contrario, trascender todas las situaciones externas. su verdadera esencia no es huir, sino aprender a estar presente en cualquier circunstancia."}
        </p>
        <p className="text-[18px] md:text-[22px] mb-12 leading-relaxed">
          {isEn
            ? "With constant practice, you will develop a more balanced mind, capable of maintaining calm even amid chaos. Meditation does not disconnect you from life; it helps you live it with greater awareness and harmony."
            : "Con práctica constante, desarrollarás una mente más equilibrada, capaz de mantener la calma incluso en medio del caos. La meditación no te desconecta de la vida, te ayuda a vivirla con mayor conciencia y armonía."}
        </p>

        <h2 className="text-[28px] md:text-[40px] font-bold mb-6">
          {isEn
            ? "Meditation is simple, deep, and accessible"
            : "Meditar es sencillo, profundo y accesible"}
        </h2>
        <p className="text-[18px] md:text-[22px] mb-12 leading-relaxed">
          {isEn
            ? "Meditation requires no special skills, beliefs, or perfect conditions. It is a journey back to oneself, where you discover that peace is not in what you achieve but in how you inhabit the present."
            : "La meditación no requiere habilidades especiales, creencias ni condiciones perfectas. Es un viaje de regreso a uno mismo, donde descubres que la paz no está en lo que logras, sino en cómo habitas el presente."}
        </p>
        <p className="text-[18px] md:text-[22px] mb-12 leading-relaxed">
          {isEn
            ? "By demystifying it, we understand it is not magic but mental training that, with consistency, transforms how we live."
            : "Al desmitificarla, entendemos que no es magia, sino un entrenamiento mental que, con constancia, transforma nuestra manera de vivir."}
        </p>

        <p className="text-[18px] md:text-[22px] mb-12 leading-relaxed">
          {isEn
            ? "Meditation is a daily gift. When you need support that grows with you, our seiza bench is here to make your sessions more comfortable and fluid."
            : "Meditar es un regalo diario. Cuando necesites un soporte que crezca contigo, nuestro banco seiza está aquí para hacer tus sesiones más confortables y fluidas."}
        </p>
      </article>

      <Footer />
    </div>
  );
}

export default page;
