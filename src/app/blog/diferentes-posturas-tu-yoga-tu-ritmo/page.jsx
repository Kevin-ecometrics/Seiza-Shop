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
          src="/banner_blog_inside3.webp"
          className="h-auto w-full object-cover hidden md:block"
          alt="banner"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.img
          src="/banner_blog_inside_mobile3.webp"
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
          Diferentes Posturas: Tu Yoga, Tu Ritmo
        </motion.h1>
      </section>

      <article className="bg-[url(/background.webp)] bg-cover bg-center px-6 md:px-12 py-8 font-normal ">
        <p className="text-black text-[18px] md:text-[25px] mb-8 leading-relaxed">
          El yoga no exige condiciones perfectas. Puedes empezar hoy, en casa,
          en un rato libre, sin más requisito que las ganas de probar. No
          importa si es por la mañana con calma o en una pausa del trabajo,
          entre el estrés y el ajetreo. Esta práctica se adapta a ti, no al
          revés.
        </p>
        <p className="text-black text-[18px] md:text-[25px] mb-8 leading-relaxed">
          Sus beneficios físicos, emocionales, mentales son un regalo para quien
          lo cultiva con constancia y escucha su cuerpo. El yoga no es una
          competencia ni una pose; es un diálogo interno que busca equilibrio.
        </p>
        <p className="text-black text-[18px] md:text-[25px] mb-12 leading-relaxed italic">
          ¿La única regla verdadera de las posturas? Empezar. Con humildad, sin
          pretensiones, permitiéndote fluir hacia tu propio bienestar. El resto,
          vendrá con el tiempo y la práctica.
        </p>
        {/* La Barca */}
        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          La Barca (Naukasana)
        </h2>
        <div className="md:flex gap-8">
          <img src="/blog3.1.webp" alt="" className="size-96 mb-4" />
          <div>
            <p className="text-xl mb-8 leading-relaxed">
              Una de las mejores asanas para estirar la columna y promover la
              flexibilidad, además de fortalecer el núcleo abdominal. Al
              principio puede parecer un reto, pero lo importante es progresar,
              no perfeccionar.
            </p>
            <ul className="list-disc list-inside text-xl mb-12 space-y-2">
              <li>
                No levantes las piernas por completo (mantenlas a unos
                centímetros del suelo).
              </li>
              <li>Dobla ligeramente las rodillas para reducir la tensión.</li>
              <li>
                Coloca las manos bajo los glúteos para apoyar la pelvis si
                sientes demasiada presión en la zona lumbar.
              </li>
            </ul>
          </div>
        </div>
        {/* La Pinza */}
        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">La Pinza</h2>
        <div className="md:flex gap-8">
          <img src="/blog3.2.webp" alt="" className="size-96 mb-4" />
          <p className="text-xl mb-12 leading-relaxed">
            Consiste en inclinarse hacia adelante hasta que puedas sostener el
            pecho con las piernas. Puede ser difícil al principio, pero mejora
            la flexibilidad. La columna no debe arquearse, puedes empezar
            colocando manos en rodillas o pantorrillas.
          </p>
        </div>
        {/* Postura del Niño */}
        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          Postura del Niño (Balasana)
        </h2>
        <div className="md:flex gap-8">
          <img src="/blog3.3.webp" alt="" className="size-96 mb-4" />
          <p className="text-xl mb-12 leading-relaxed">
            También conocida como la postura de la hoja, es ese rincón de calma
            en medio de la práctica. Siéntate sobre tus talones, lleva el torso
            hacia adelante y apoya la frente en el suelo. Brazos estirados o
            junto al cuerpo. Respira hondo y déjate ser.
          </p>
        </div>
        {/* Perro Boca Abajo */}
        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          Perro Boca Abajo (Adho Mukha Svanasana)
        </h2>
        <div className="md:flex gap-8">
          <img src="/blog3.4.webp" alt="" className="size-96 mb-4" />
          <p className="text-xl mb-12 leading-relaxed">
            Estira músculos, alarga la columna, fortalece cuello y espalda.
            Apoya manos y pies en el suelo, eleva las caderas. Si los
            isquiotibiales están tensos, dobla ligeramente las rodillas.
          </p>
        </div>
        {/* Postura de la Montaña */}
        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          Postura de la Montaña (Tadasana)
        </h2>
        <div className="md:flex gap-8">
          <img src="/blog3.5.webp" alt="" className="size-96 mb-4" />
          <p className="text-xl mb-12 leading-relaxed">
            Una de las posturas más básicas pero esenciales. Activa grupos
            musculares y promueve la concentración y la relajación del cuerpo.
          </p>
        </div>
        {/* Postura de Meditación */}
        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          Postura de Meditación (Sukhasana o Padmasana)
        </h2>{" "}
        <div className="md:flex gap-8">
          <img src="/blog3.6.webp" alt="" className="size-96 mb-4" />
          <p className="text-xl mb-12 leading-relaxed">
            Ideal para comenzar o cerrar tu práctica. Siéntate sobre un cojín o
            manta doblada. Rodillas relajadas, manos en mudra o sobre los
            muslos. Espalda alargada y hombros relajados.
          </p>
        </div>
        {/* Phalakasana */}
        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          Phalakasana (Tabla o Plancha)
        </h2>
        <div className="md:flex gap-8">
          <img src="/blog3.7.webp" alt="" className="size-96 mb-4" />
          <p className="text-xl mb-12 leading-relaxed">
            Aparentemente simple, pero poderosa. Fortalece el abdomen y todo el
            cuerpo. Alinea hombros con muñecas, activa el core y respira de
            forma constante.
          </p>
        </div>
        {/* Banco Seiza */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-16 items-start">
          <img src="/blog3.8.webp" alt="" className=" mb-4" />

          <div className="w-full">
            <h2 className="text-[35px] md:text-[50px] font-bold mb-8">
              Complementa tu práctica con nuestro banco Seiza
            </h2>
            <p className="text-xl mb-4 leading-relaxed">
              Fabricado con álamo 100% natural, su diseño ergonómico ofrece
              soporte firme y ligero. Ayuda a mantener una postura alineada y
              permite sesiones más largas sin forzar rodillas o espalda.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}

export default page;
