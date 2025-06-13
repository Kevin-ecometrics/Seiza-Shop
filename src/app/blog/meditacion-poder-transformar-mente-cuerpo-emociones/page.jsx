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
          Meditación: El poder para transformar tu mente, cuerpo y emociones
        </motion.h1>
      </section>

      <article className="bg-[url(/background.webp)] bg-cover bg-center px-6 md:px-12 py-8 font-normal ">
        {/* Introducción */}
        <p className="text-black text-[18px] md:text-[25px] mb-8 leading-relaxed">
          "Más allá de una práctica espiritual, la ciencia respalda sus
          beneficios físicos, emocionales y cognitivos. En un mundo acelerado,
          competitivo y cada vez más carente de empatía, el trabajo, las
          actividades diarias e incluso la interacción social nos llenan de una
          densa neblina de estrés y lo que conocemos como agotamiento. Por ello,
          la práctica de la meditación ha ido en aumento.
        </p>

        {/* Beneficios Físicos */}
        <h2 className="text-[30px] md:text-[60px] font-bold mb-6">
          Beneficios físicos: Cuida tu cuerpo desde adentro
        </h2>

        <h3 className="text-[30px] md:text-[40px] font-semibold mb-4">
          Salud cardiovascular y meditación
        </h3>
        <p className="text-xl mb-4">
          La meditación no solo calma y despeja esa neblina de fatiga y estrés,
          también protege tu corazón.
        </p>
        <p className="text-xl mb-2 font-semibold">
          Estudios de la American Heart Association muestran:
        </p>
        <ul className="list-disc list-inside text-xl mb-6 space-y-2">
          <li>
            Regula la presión arterial: Relaja señales nerviosas que tensan los
            vasos sanguíneos, facilitando el flujo de sangre.
          </li>
          <li>
            Previene la aterosclerosis: El estrés crónico estrecha las arterias;
            la meditación contrarresta este efecto, previniendo ataques
            cardíacos y accidentes cerebrovasculares.
          </li>
        </ul>
        <p className="italic text-lg mb-12">
          "Solo 10 minutos al día son suficientes para notar cambios en tu ritmo
          cardíaco,"
        </p>

        {/* Cortisol */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12 items-start">
          <img src="/blog1.1.webp" alt="" />

          <div className="w-full">
            <h2 className="text-[35px] md:text-[50px] font-bold mb-8">
              Meditación: La mejor herramienta para reducir el cortisol
            </h2>
            <p className="text-xl mb-4">
              El estrés psicológico y físico provoca un aumento en la hormona
              cortisol, que en exceso causa inflamación, fatiga, insomnio, mayor
              depresión, ansiedad y presión arterial alta.
            </p>
            <ul className="list-disc list-inside text-xl space-y-2">
              <li>
                Reduce niveles de cortisol: Un experimento de la Universidad de
                California mostró que los participantes tenían un 30% menos de
                cortisol después de 8 semanas de práctica.
              </li>
              <li>
                Detiene la inflamación crónica: Al disminuir las citocinas
                inflamatorias, la meditación protege tu sistema inmunológico.
              </li>
            </ul>
          </div>
        </div>

        {/* Mindfulness */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12 items-start">
          <div className="w-full">
            <h2 className="text-[35px] md:text-[50px] font-bold mb-8">
              Mindfulness: Claridad en medio del caos
            </h2>
            <p className="text-xl mb-4">
              La meditación puede aumentar emociones y acciones positivas hacia
              nosotros y hacia los demás. No se trata de "dejar la mente en
              blanco", sino de observar sin juzgar.
            </p>
            <ul className="list-disc list-inside text-xl space-y-2">
              <li>
                Reduce la ansiedad social: Un estudio en Stanford comprobó que
                mejora la seguridad en interacciones.
              </li>
              <li>
                Transforma relaciones: Al cultivar bondad hacia ti mismo
                (autocompasión), extiendes esa empatía a otros, incluso a
                quienes te desafían.
              </li>
            </ul>
          </div>
          <img src="/blog1.2.webp" alt="" />
        </div>

        {/* Manejo de la ansiedad */}
        <h2 className="text-[35px] md:text-[50px] mb-8 font-bold">
          La meditación para el manejo de la ansiedad
        </h2>
        <p className="text-xl mb-6 leading-relaxed">
          La meditación puede ser un excelente apoyo para lidiar con la ansiedad
          y los problemas psicológicos relacionados. Desde ataques de pánico
          hasta tensiones laborales, la meditación actúa como un botón de pausa.
        </p>
        <p className="text-xl mb-12 leading-relaxed">
          Algunos ejercicios que ayudan son la combinación del yoga y la
          meditación. Combinan movimiento y atención plena, mejoran la capacidad
          de la memoria, el enfoque y la claridad de pensamiento, y son una
          excelente herramienta para mantener la mente joven, reduciendo la
          ansiedad en un 40% de acuerdo con la revista Journal of Clinical
          Psychology.
        </p>

        {/* Memoria y enfoque */}
        <h2 className="text-[35px] md:text-[50px] mb-8 font-bold">
          Memoria y enfoque: La meditación Kirtan Kriya
        </h2>
        <p className="text-xl mb-12 leading-relaxed">
          Es una combinación de un mantra y movimientos repetidos de los dedos
          para enfocar tus pensamientos. Este método ayuda a mejorar el estado
          de alerta, la velocidad mental y la memoria. Este tipo de meditación
          ayuda a combatir la pérdida de memoria normal relacionada con la edad.
        </p>

        {/* Era de las distracciones */}
        <h2 className="text-[35px] md:text-[50px] mb-8 font-bold">
          La meditación: la solución en la era de las distracciones
        </h2>
        <p className="text-xl mb-4">
          ¿Notas que tu atención salta de un lugar a otro como una rana? La
          meditación entrena el cerebro para:
        </p>
        <ul className="list-disc list-inside text-xl mb-12 space-y-2">
          <li>
            Filtrar estímulos irrelevantes: Como un músculo, la concentración se
            fortalece con práctica.
          </li>
          <li>
            Tomar decisiones más claras: Reduce la impulsividad al activar la
            corteza prefrontal.
          </li>
        </ul>

        {/* Banco Seiza */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-16 items-start">
          <img src="/blog1.3.webp" alt="" />

          <div className="w-full">
            <h2 className="text-[35px] md:text-[50px] font-bold mb-8">
              Banco Seiza: tu aliado en la meditación
            </h2>
            <p className="text-xl mb-4 leading-relaxed">
              Si estás buscando comenzar a meditar o quieres llevar tu práctica
              a otro nivel, nuestro banco seiza es tu mejor aliado. Diseñado
              para brindarte comodidad y apoyo, te ayuda a mantener una postura
              erguida sin esfuerzo, alineando tu columna y relajando tu cuerpo
              mientras meditas.
            </p>
            <p className="text-xl leading-relaxed">
              Gracias a su forma ergonómica, mejora la circulación y evita la
              tensión en tus rodillas y espalda. Además, su diseño compacto y
              ligero te permite llevarlo contigo a cualquier lugar o guardarlo
              fácilmente cuando no lo uses.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

export default page;
