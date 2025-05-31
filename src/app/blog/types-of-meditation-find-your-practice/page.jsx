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
          {isEn
            ? "Types of Meditation: Find the Practice That Resonates With You"
            : "Tipos de Meditación: Encuentra la Práctica que Resuena Contigo"}
        </motion.h1>
      </section>

      <article className="bg-[url(/background.webp)] bg-cover bg-center px-6 md:px-12 py-8 font-normal ">
        {/* Intro */}
        <p className="text-black text-[18px] md:text-[25px] mb-8 leading-relaxed">
          {isEn
            ? "We're constantly connected to the outside world—screens, notifications, and nonstop stimuli. Stress accumulates, leaving our minds restless, our bodies tense, and even making it hard to sleep. In this chaos, meditation becomes a sanctuary—a voluntary pause to reconnect and find clarity. It doesn’t mean escaping reality, but finding peace within it."
            : "Siempre estamos conectados con el mundo exterior ya que este no descansa, estímulos, pantallas y las notificaciones de estas llegan sin parar. El estrés de la vida cotidiana aumenta, nos deja la mente agitada, el cuerpo tenso, dificultando el simple acto de descansar e incluso dificulta la conciliación del sueño. En medio de este caos, la meditación se presenta como un espacio de calma. Una pausa voluntaria donde respiramos, soltamos las prisas y reconectamos con nosotros mismos. No se trata de escapar de la realidad, sino de encontrar claridad dentro de ella."}
        </p>

        <p className="text-black text-[18px] md:text-[25px] mb-12 leading-relaxed">
          {isEn
            ? "Each person is unique, and how you connect with yourself can vary. The best way to begin meditating is by exploring different techniques to find what suits your needs."
            : "Todos somos completamente diferentes, por lo que la manera en que entras en conexión contigo mismo puede variar. Lo mejor que puede hacer cuando comienza a practicar la meditación es investigar los tipos de meditación que existen y se adaptan mejor para tus necesidades."}
        </p>

        {/* Vipassana */}
        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          {isEn ? "Vipassana Meditation" : "Meditación Vipassana"}
        </h2>
        <p className="text-xl mb-12 leading-relaxed">
          {isEn
            ? "Known as 'insight meditation,' Vipassana helps us see things as they really are. It involves deep self-observation, allowing us to understand our inner world and gradually let go of negative thoughts and emotional pain. Mindfulness techniques are rooted in this tradition."
            : "Otra de las prácticas más conocidas, se conoce como la 'meditación penetrante'. La técnica de mindfulness se basa en este tipo de meditación, la cual te permite observarte a ti mismo para controlar pensamientos negativos y dolencias emocionales."}
        </p>

        {/* Budista */}
        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          {isEn ? "Buddhist Meditation" : "Meditación Budista"}
        </h2>
        <p className="text-xl mb-12 leading-relaxed">
          {isEn
            ? "Also called 'total meditation,' its purpose is to stay present—fully aware of the here and now. It invites us to embrace all thoughts, sensations, and emotions without judgment, helping us take control of our minds rather than being controlled by them."
            : "Es una técnica llamada 'meditación total' y su finalidad es intentar enfocar la mente por completo en el presente. Busca enfocarse en las perturbaciones internas para reconectarnos con nuestra esencia y soltar pensamientos limitantes."}
        </p>

        {/* Mantra */}
        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          {isEn ? "Mantra Meditation" : "Meditación Mantra"}
        </h2>
        <p className="text-xl mb-12 leading-relaxed">
          {isEn
            ? "This technique involves chanting sacred sounds to enter deep meditation. The vibration of the sounds affects both the voice and the mind, creating a profound inner stillness."
            : "Un mantra es un canto sagrado que permite entrar en un estado profundo de meditación. Estos cánticos hacen vibrar las cuerdas vocales y generan ondas vibratorias en la mente, logrando una meditación completa."}
        </p>

        {/* Trascendental */}
        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          {isEn ? "Transcendental Meditation" : "Meditación Trascendental"}
        </h2>
        <p className="text-xl mb-12 leading-relaxed">
          {isEn
            ? "Simple yet powerful: sit in silence, close your eyes, and softly repeat a personalized mantra. Practiced for just 20 minutes a day, it can deeply relax your body and mind."
            : "Su práctica es sencilla, pero poderosa: solo necesitas sentarte en silencio, cerrar los ojos y repetir suavemente un mantra personalizado. Con solo 20 minutos al día, logra liberar tensiones y conectar con un estado de profunda relajación."}
        </p>

        {/* Cierre Inspirador */}
        <p className="text-xl mb-12 leading-relaxed italic">
          {isEn
            ? "There are many paths to calm. Some days your body needs silence, others repetition or breath. Let yourself explore until you find the practice that resonates with you. It's not about mastering a technique, but finding a refuge that brings clarity amid daily chaos."
            : "Existen diferentes caminos hacia la calma. Tu mente y tu cuerpo saben qué necesitan; a veces es silencio, otras, repetición o simplemente respirar. Déjate llevar hasta descubrir qué práctica resuena contigo. Al final, no se trata de dominar una técnica, sino de encontrar ese refugio interno que te devuelva la claridad."}
        </p>

        {/* Banco Seiza */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-16 items-start">
          <div className="h-[300px] md:h-[400px] xl:h-[600px] w-full bg-[#D9D9D9] rounded-lg flex items-center justify-center text-center p-8"></div>
          <div className="w-full">
            <h2 className="text-[35px] md:text-[50px] font-bold mb-8">
              {isEn
                ? "Complement Your Practice: The Seiza Bench"
                : "Complementa tu Práctica con el Banco Seiza"}
            </h2>
            <p className="text-xl mb-4 leading-relaxed">
              {isEn
                ? "For greater stability and relaxation, try our ergonomic Seiza bench. It supports natural posture, easing knee and back tension so you can meditate in comfort."
                : "Si buscas complementar tu meditación con mayor estabilidad y relajación, te invitamos a probar nuestro banco seiza. Su diseño ergonómico alivia la tensión en rodillas y espalda, permitiendo una postura natural y cómoda."}
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

export default page;
