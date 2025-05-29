"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { useLanguage } from "../../context/LanguageContext";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

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
            ? "How to Meditate: Starting from Zero"
            : "Cómo Meditar: Empezar desde cero"}
        </motion.h1>
      </section>

      <article className="bg-[url(/background.webp)] bg-cover bg-center px-6 md:px-12 py-8 font-normal">
        <motion.h2
          className="text-[28px] md:text-[40px] font-bold mb-6"
          {...fadeInUp}
          transition={{ duration: 0.5 }}
        >
          {isEn
            ? "Meditation: A Path to Integral Well-being"
            : "La meditación: un camino hacia el bienestar integral"}
        </motion.h2>

        <motion.p
          className="text-[18px] md:text-[22px] mb-6 leading-relaxed text-black"
          {...fadeInUp}
          transition={{ duration: 0.6 }}
        >
          {isEn
            ? "It is a powerful tool to improve quality of life, both mentally and physically. However, starting meditation requires patience and consistency, as it is a gradual process cultivated through practice."
            : "Se trata de una herramienta poderosa para mejorar la calidad de vida, tanto a nivel mental como físico. Sin embargo, iniciarse en la meditación requiere paciencia y constancia, pues es un proceso gradual que se cultiva con la práctica."}
        </motion.p>

        <motion.p
          className="text-[18px] md:text-[22px] mb-6 leading-relaxed text-black"
          {...fadeInUp}
          transition={{ duration: 0.7 }}
        >
          {isEn
            ? "To develop solid meditation habits, it is fundamental to pay attention to two key aspects: technique and posture. We invite you to explore different ways to meditate and positions until you find those that bring you greater comfort and mental clarity. Once identified, follow these recommendations to optimize your practice:"
            : "Para desarrollar hábitos de meditación sólidos, es fundamental prestar atención a dos aspectos clave: la técnica y la postura. Te invitamos a explorar diferentes formas de meditar y posiciones hasta encontrar aquellas que te brinden mayor comodidad y claridad mental. Una vez identificadas, sigue estas recomendaciones para optimizar tu práctica:"}
        </motion.p>

        <motion.ul
          className="list-disc list-inside text-[18px] md:text-[22px] mb-10 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <li>
            <strong>
              {isEn ? "Dress comfortably:" : "Viste con comodidad:"}
            </strong>{" "}
            {isEn
              ? "Opt for loose, breathable clothing that does not restrict your movements. Shoes and accessories are not necessary, as the ideal is to minimize distractions and focus on the connection with your body."
              : "Opta por ropa holgada y transpirable que no restrinja tus movimientos. Los zapatos y accesorios no son necesarios, ya que lo ideal es minimizar distracciones y enfocarte en la conexión con tu cuerpo."}
          </li>
          <li>
            <strong>
              {isEn ? "Choose a serene space:" : "Elige un espacio sereno:"}
            </strong>{" "}
            {isEn
              ? "Find a quiet place where you can relax without interruptions. It can be a corner of your home, a park, a lake, or even the mountains. The important thing is that the environment transmits peace and allows you to immerse yourself in the practice."
              : "Busca un lugar tranquilo donde puedas relajarte sin interrupciones. Puede ser un rincón de tu hogar, un parque, un lago o incluso las montañas. Lo importante es que el entorno te transmita paz y te permita sumergirte en la práctica."}
          </li>
          <li>
            <strong>
              {isEn
                ? "Adopt a conscious posture:"
                : "Adopta una postura consciente:"}
            </strong>{" "}
            {isEn
              ? "Sit with your back straight but not rigid, keeping your body relaxed. You can start on the floor, on a cushion or mat, with your legs crossed. The classic position (such as sukhasana or padmasana) favors concentration, but the essential thing is that you find a sustainable posture for you. Breathe deeply to harmonize body and mind."
              : "Siéntate con la espalda erguida, pero sin rigidez, manteniendo el cuerpo relajado. Puedes comenzar en el suelo, sobre un cojín o esterilla, con las piernas cruzadas. La posición clásica (como sukhasana o padmasana) favorece la concentración, pero lo esencial es que encuentres una postura sostenible para ti. Respira profundamente para armonizar cuerpo y mente."}
          </li>
          <li>
            <strong>
              {isEn ? "Focus on your breath:" : "Enfócate en la respiración:"}
            </strong>{" "}
            {isEn
              ? "Close your eyes and direct your attention to the natural rhythm of your breath. If you prefer, you can support yourself with techniques such as meditation with sounds (for example, mantras or bells) to deepen the meditative state."
              : "Cierra los ojos y dirige tu atención al ritmo natural de tu respiración. Si lo prefieres, puedes apoyarte en técnicas como la meditación con sonidos (por ejemplo, mantras o campanas) para profundizar en el estado meditativo."}
          </li>
          <li>
            <strong>
              {isEn
                ? "Accept your thoughts without judgment:"
                : "Acepta tus pensamientos sin juicio:"}
            </strong>{" "}
            {isEn
              ? "During meditation, it is normal for ideas, emotions, or even worries to arise. Instead of resisting, observe them kindly and let them pass, like clouds in the sky. This acceptance exercise will help you release emotional burdens and cultivate resilience."
              : "Durante la meditación, es normal que surjan ideas, emociones o incluso preocupaciones. En lugar de resistirte, obsérvalas con amabilidad y déjalas pasar, como nubes en el cielo. Este ejercicio de aceptación te ayudará a liberar cargas emocionales y a cultivar resiliencia."}
          </li>
          <li>
            <strong>
              {isEn ? "Gradual progression:" : "Progresión gradual:"}
            </strong>{" "}
            {isEn
              ? "Start with short sessions of 1 or 2 minutes and gradually increase the time. The ideal goal is to reach meditations of 30 minutes or more, but always adapting to your own pace. Consistency is more valuable than duration."
              : "Inicia con sesiones breves de 1 o 2 minutos y aumenta el tiempo paulatinamente. El objetivo ideal es alcanzar meditaciones de 30 minutos o más, pero siempre adaptándote a tu propio ritmo. La consistencia es más valiosa que la duración."}
          </li>
        </motion.ul>

        <motion.p
          className="text-[18px] md:text-[22px] mb-12 leading-relaxed text-black"
          {...fadeInUp}
          transition={{ duration: 0.9 }}
        >
          {isEn
            ? "Starting to meditate is a personal process, and every small step counts. Our solid poplar seiza bench is designed to accompany you on this path, offering comfort and stability from your first practices to longer sessions."
            : "Comenzar a meditar es un proceso personal, y cada pequeño avance cuenta. Nuestro banco seiza de álamo macizo está diseñado para acompañarte en este camino, ofreciéndote comodidad y estabilidad desde tus primeras prácticas hasta sesiones más prolongadas."}
        </motion.p>
      </article>

      <Footer />
    </div>
  );
}

export default page;
