"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

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
          Seiza: Una Simple Postura para una Columna Sana y una Mente en Paz
        </motion.h1>
      </section>

      <article className="bg-[url(/background.webp)] bg-cover bg-center px-6 md:px-12 py-8 font-normal text-black">
        <p className="text-[18px] md:text-[25px] mb-8 leading-relaxed">
          Seiza —ese modo tradicional japonés de sentarse sobre las rodillas—
          trasciende su uso en artes marciales como el Iaido o ceremonias como
          el chanoyu (ceremonia del té). Hoy, se redescubre como una poderosa
          herramienta psicoterapéutica y una práctica espiritual capaz de:
        </p>

        <ul className="list-disc list-inside text-xl mb-8 space-y-2">
          <li>
            Disolver el miedo (tanto a la vida como a la muerte) mediante la
            quietud consciente.
          </li>
          <li>
            Restaurar el flujo natural del cuerpo, equilibrando funciones
            físicas y mentales.
          </li>
          <li>
            Crear un espacio sagrado en lo cotidiano, rompiendo el ciclo de
            pensamientos obsesivos que nos alejan del presente.
          </li>
        </ul>

        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          Cómo Hacer la Postura Seiza
        </h2>
        <ul className="list-disc list-inside text-xl mb-12 space-y-2">
          <li>
            Dobla las piernas y coloca la rodilla izquierda en el suelo. Apoya
            la rodilla derecha haciendo un espacio de dos manos de largo
            respecto a la izquierda.
          </li>
          <li>
            Ahora coloca la parte exterior de los pies en el suelo, opuesta a
            las plantas, de modo que las puntas de los dedos gordos se toquen.
          </li>
          <li>
            Baja las caderas hasta que estén entre los talones. Alinea la
            espalda de modo que la parte baja esté hacia adelante como si la
            columna formara una S.
          </li>
          <li>
            El peso debe estar centrado entre los dedos de los pies y las
            rodillas, ligeramente sobre los pies.
          </li>
          <li>
            Equilibra la cabeza con la punta de la columna. Las orejas deben
            estar dirigidas hacia los hombros y la nariz alineada con el
            ombligo.
          </li>
          <li>
            Lleva la nariz a esta posición, mueve la espalda buscando
            verticalidad. Coloca la barbilla hacia adelante y estira la parte
            posterior del cuello.
          </li>
          <li>
            Debes sentir como si alguien tirara de tu cabello para enderezar la
            espalda. Para encontrar la posición recta, puedes balancearte en
            círculos desde las caderas y reducir lentamente hasta estabilizarte.
            Esta postura recta y centrada es importante para evitar calambres o
            fatiga.
          </li>
        </ul>

        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          Beneficios de Seiza
        </h2>
        <p className="text-xl mb-12 leading-relaxed">
          Algunos de los beneficios de esta postura son: regula los impulsos
          nerviosos, mejora la digestión, fortalece las rodillas, reduce los
          cólicos y molestias del ciclo menstrual, promueve una postura adecuada
          de la columna y aumenta la resistencia muscular.
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-16 items-start">
          <div className="h-[300px] md:h-[400px] xl:h-[600px] w-full bg-[#D9D9D9] rounded-lg flex items-center justify-center text-center p-8"></div>
          <div className="w-full">
            <h2 className="text-[35px] md:text-[50px] font-bold mb-8">
              Banco Seiza
            </h2>
            <p className="text-xl mb-4 leading-relaxed">
              Si eres principiante y estás buscando realizar tu postura Seiza
              con simpleza y fluidez, te sugerimos utilizar nuestro banco Seiza
              diseñado para brindarte comodidad y apoyo. Te ayuda a mantener una
              postura erguida sin esfuerzo, alineando tu columna y relajando tu
              cuerpo mientras meditas.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

export default Page;
