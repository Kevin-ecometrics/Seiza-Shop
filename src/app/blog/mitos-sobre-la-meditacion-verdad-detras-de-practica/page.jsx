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
          Mitos sobre la meditación: Descubriendo la verdad detrás de la
          práctica
        </motion.h1>
      </section>

      <article className="bg-[url(/background.webp)] bg-cover bg-center px-6 md:px-12 py-8 font-normal text-black">
        <p className="text-[18px] md:text-[22px] mb-8 leading-relaxed">
          Algunas personas creen que la meditación debe llevarlos a visiones
          místicas, iluminación divina o experiencias fuera del cuerpo. Si bien
          la meditación puede generar sensaciones profundas de paz y felicidad,
          su verdadero propósito no es alcanzar fenómenos extraordinarios, sino
          cultivar una mente más clara y serena.
        </p>

        <p className="text-[18px] md:text-[22px] mb-12 leading-relaxed">
          Los beneficios reales se reflejan en la vida cotidiana: mayor
          concentración, creatividad y una actitud más tranquila frente a los
          desafíos. La meditación no es un escape de la realidad, sino una
          herramienta para vivirla con mayor plenitud.
        </p>

        <h2 className="text-[28px] md:text-[40px] font-bold mb-6">
          "Para meditar debes tener práctica con lo espiritual o con creencias"
        </h2>
        <p className="text-[18px] md:text-[22px] mb-12 leading-relaxed">
          La meditación es una práctica que nos lleva más allá del ruido mental
          hacia un estado interior más relajado y tranquilo. No implica ninguna
          orientación espiritual en particular; es una práctica universal que
          puede adaptarse a cualquier filosofía de vida.
        </p>

        <h2 className="text-[28px] md:text-[40px] font-bold mb-6">
          "Meditar significa dejar la mente en blanco"
        </h2>
        <p className="text-[18px] md:text-[22px] mb-12 leading-relaxed">
          La meditación no significa detener o eliminar tus pensamientos. Claro,
          este enfoque sólo crea más estrés interno. El verdadero enfoque es
          observar los pensamientos sin aferrarse a ellos, como nubes que pasan
          en el cielo. Ya sea mediante la respiración, un mantra o la atención
          plena, el objetivo es elegir dónde enfocarse, sin juzgar lo que surge.
          Si te distraes, simplemente regresa suavemente a tu punto de atención.
        </p>

        <h2 className="text-[28px] md:text-[40px] font-bold mb-6">
          "Para lograr meditar es necesario alejarse de todo y todos"
        </h2>
        <p className="text-[18px] md:text-[22px] mb-12 leading-relaxed">
          El verdadero propósito de la meditación no es desprenderte de todo y
          deshacerse de todo, sino por el contrario, trascender todas las
          situaciones externas. Su verdadera esencia no es huir, sino aprender a
          estar presente en cualquier circunstancia.
        </p>
        <p className="text-[18px] md:text-[22px] mb-12 leading-relaxed">
          Con práctica constante, desarrollarás una mente más equilibrada, capaz
          de mantener la calma incluso en medio del caos. La meditación no te
          desconecta de la vida, te ayuda a vivirla con mayor conciencia y
          armonía.
        </p>

        <h2 className="text-[28px] md:text-[40px] font-bold mb-6">
          Meditar es sencillo, profundo y accesible
        </h2>
        <p className="text-[18px] md:text-[22px] mb-12 leading-relaxed">
          La meditación no requiere habilidades especiales, creencias ni
          condiciones perfectas. Es un viaje de regreso a uno mismo, donde
          descubres que la paz no está en lo que logras, sino en cómo habitas el
          presente.
        </p>
        <p className="text-[18px] md:text-[22px] mb-12 leading-relaxed">
          Al desmitificarla, entendemos que no es magia, sino un entrenamiento
          mental que, con constancia, transforma nuestra manera de vivir.
        </p>

        <p className="text-[18px] md:text-[22px] mb-12 leading-relaxed">
          Meditar es un regalo diario. Cuando necesites un soporte que crezca
          contigo, nuestro banco seiza está aquí para hacer tus sesiones más
          confortables y fluidas.
        </p>
      </article>

      <Footer />
    </div>
  );
}

export default page;
