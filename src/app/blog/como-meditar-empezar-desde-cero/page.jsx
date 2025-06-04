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
          Cómo Meditar: Empezar desde cero
        </motion.h1>
      </section>

      <article className="bg-[url(/background.webp)] bg-cover bg-center px-6 md:px-12 py-8 font-normal">
        <motion.h2
          className="text-[28px] md:text-[40px] font-bold mb-6"
          {...fadeInUp}
          transition={{ duration: 0.5 }}
        >
          La meditación: un camino hacia el bienestar integral
        </motion.h2>

        <motion.p
          className="text-[18px] md:text-[22px] mb-6 leading-relaxed text-black"
          {...fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Se trata de una herramienta poderosa para mejorar la calidad de vida,
          tanto a nivel mental como físico. Sin embargo, iniciarse en la
          meditación requiere paciencia y constancia, pues es un proceso gradual
          que se cultiva con la práctica.
        </motion.p>

        <motion.p
          className="text-[18px] md:text-[22px] mb-6 leading-relaxed text-black"
          {...fadeInUp}
          transition={{ duration: 0.7 }}
        >
          Para desarrollar hábitos de meditación sólidos, es fundamental prestar
          atención a dos aspectos clave: la técnica y la postura. Te invitamos a
          explorar diferentes formas de meditar y posiciones hasta encontrar
          aquellas que te brinden mayor comodidad y claridad mental. Una vez
          identificadas, sigue estas recomendaciones para optimizar tu práctica:
        </motion.p>

        <motion.ul
          className="list-disc list-inside text-[18px] md:text-[22px] mb-10 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <li>
            <strong>Viste con comodidad:</strong> Opta por ropa holgada y
            transpirable que no restrinja tus movimientos. Los zapatos y
            accesorios no son necesarios, ya que lo ideal es minimizar
            distracciones y enfocarte en la conexión con tu cuerpo.
          </li>
          <li>
            <strong>Elige un espacio sereno:</strong> Busca un lugar tranquilo
            donde puedas relajarte sin interrupciones. Puede ser un rincón de tu
            hogar, un parque, un lago o incluso las montañas. Lo importante es
            que el entorno te transmita paz y te permita sumergirte en la
            práctica.
          </li>
          <li>
            <strong>Adopta una postura consciente:</strong> Siéntate con la
            espalda erguida, pero sin rigidez, manteniendo el cuerpo relajado.
            Puedes comenzar en el suelo, sobre un cojín o esterilla, con las
            piernas cruzadas. La posición clásica (como sukhasana o padmasana)
            favorece la concentración, pero lo esencial es que encuentres una
            postura sostenible para ti. Respira profundamente para armonizar
            cuerpo y mente.
          </li>
          <li>
            <strong>Enfócate en la respiración:</strong> Cierra los ojos y
            dirige tu atención al ritmo natural de tu respiración. Si lo
            prefieres, puedes apoyarte en técnicas como la meditación con
            sonidos (por ejemplo, mantras o campanas) para profundizar en el
            estado meditativo.
          </li>
          <li>
            <strong>Acepta tus pensamientos sin juicio:</strong> Durante la
            meditación, es normal que surjan ideas, emociones o incluso
            preocupaciones. En lugar de resistirte, obsérvalas con amabilidad y
            déjalas pasar, como nubes en el cielo. Este ejercicio de aceptación
            te ayudará a liberar cargas emocionales y a cultivar resiliencia.
          </li>
          <li>
            <strong>Progresión gradual:</strong> Inicia con sesiones breves de 1
            o 2 minutos y aumenta el tiempo paulatinamente. El objetivo ideal es
            alcanzar meditaciones de 30 minutos o más, pero siempre adaptándote
            a tu propio ritmo. La consistencia es más valiosa que la duración.
          </li>
        </motion.ul>

        <motion.p
          className="text-[18px] md:text-[22px] mb-12 leading-relaxed text-black"
          {...fadeInUp}
          transition={{ duration: 0.9 }}
        >
          Comenzar a meditar es un proceso personal, y cada pequeño avance
          cuenta. Nuestro banco seiza de álamo macizo está diseñado para
          acompañarte en este camino, ofreciéndote comodidad y estabilidad desde
          tus primeras prácticas hasta sesiones más prolongadas.
        </motion.p>
      </article>

      <Footer />
    </div>
  );
}

export default Page;
