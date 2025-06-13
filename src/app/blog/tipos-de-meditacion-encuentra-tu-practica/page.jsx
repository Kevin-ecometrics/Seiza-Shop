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
          Tipos de Meditación: Encuentra la Práctica que Resuena Contigo
        </motion.h1>
      </section>

      <article className="bg-[url(/background.webp)] bg-cover bg-center px-6 md:px-12 py-8 font-normal">
        <p className="text-black text-[18px] md:text-[25px] mb-8 leading-relaxed">
          Siempre estamos conectados con el mundo exterior ya que este no
          descansa, estímulos, pantallas y las notificaciones de estas llegan
          sin parar. El estrés de la vida cotidiana aumenta, nos deja la mente
          agitada, el cuerpo tenso, dificultando el simple acto de descansar e
          incluso dificulta la conciliación del sueño. En medio de este caos, la
          meditación se presenta como un espacio de calma. Una pausa voluntaria
          donde respiramos, soltamos las prisas y reconectamos con nosotros
          mismos. No se trata de escapar de la realidad, sino de encontrar
          claridad dentro de ella.
        </p>

        <p className="text-black text-[18px] md:text-[25px] mb-12 leading-relaxed">
          Todos somos completamente diferentes, por lo que la manera en que
          entras en conexión contigo mismo puede variar. Lo mejor que puede
          hacer cuando comienza a practicar la meditación es investigar los
          tipos de meditación que existen y se adaptan mejor para tus
          necesidades.
        </p>

        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          Meditación Vipassana
        </h2>
        <div className="md:flex gap-8">
          <img src="/blog2.1.webp" alt="" className="size-96 mb-4" />

          <p className="text-xl mb-12 leading-relaxed">
            Otra de las prácticas más conocidas, se conoce como la “meditación
            penetrante”. La técnica de mindfulness se basa en este tipo de
            meditación, la cual te permite observarte a ti mismo para controlar
            pensamientos negativos y dolencias emocionales.
          </p>
        </div>
        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          Meditación Budista
        </h2>
        <div className="md:flex gap-8">
          <img src="/blog2.2.webp" alt="" className="size-96 mb-4" />

          <p className="text-xl mb-12 leading-relaxed">
            Es una técnica llamada “meditación total” y su finalidad es intentar
            enfocar la mente por completo en el presente. Busca enfocarse en las
            perturbaciones internas para reconectarnos con nuestra esencia y
            soltar pensamientos limitantes.
          </p>
        </div>
        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          Meditación Mantra
        </h2>
        <div className="md:flex gap-8">
          <img src="/blog2.3.webp" alt="" className="size-96 mb-4" />

          <p className="text-xl mb-12 leading-relaxed">
            Un mantra es un canto sagrado que permite entrar en un estado
            profundo de meditación. Estos cánticos hacen vibrar las cuerdas
            vocales y generan ondas vibratorias en la mente, logrando una
            meditación completa.
          </p>
        </div>
        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          Meditación Trascendental
        </h2>
        <div className="md:flex gap-8">
          <img src="/blog2.4.webp" alt="" className="size-96 mb-4" />
          <div>
            <p className="text-xl mb-4 leading-relaxed">
              Su práctica es sencilla, pero poderosa: solo necesitas sentarte en
              silencio, cerrar los ojos y repetir suavemente un mantra
              personalizado. Con solo 20 minutos al día, logra liberar tensiones
              y conectar con un estado de profunda relajación.
            </p>
            <p className="text-xl mb-12 leading-relaxed italic">
              Existen diferentes caminos hacia la calma. Tu mente y tu cuerpo
              saben qué necesitan; a veces es silencio, otras, repetición o
              simplemente respirar. Déjate llevar hasta descubrir qué práctica
              resuena contigo. Al final, no se trata de dominar una técnica,
              sino de encontrar ese refugio interno que te devuelva la claridad.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-16 items-start">
          <img src="/blog2.5.webp" alt="" />

          <div className="w-full">
            <h2 className="text-[35px] md:text-[50px] font-bold mb-8">
              Complementa tu Práctica con el Banco Seiza
            </h2>
            <p className="text-xl mb-4 leading-relaxed">
              Si buscas complementar tu meditación con mayor estabilidad y
              relajación, te invitamos a probar nuestro banco seiza. Su diseño
              ergonómico alivia la tensión en rodillas y espalda, permitiendo
              una postura natural y cómoda.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

export default page;
