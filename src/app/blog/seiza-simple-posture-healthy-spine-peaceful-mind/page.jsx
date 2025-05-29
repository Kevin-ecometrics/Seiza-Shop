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
            ? "Seiza: A Simple Posture for a Healthy Spine and a Peaceful Mind"
            : "Seiza: Una Simple Postura para una Columna Sana y una Mente en Paz"}
        </motion.h1>
      </section>

      <article className="bg-[url(/background.webp)] bg-cover bg-center px-6 md:px-12 py-8 font-normal text-black">
        <p className="text-[18px] md:text-[25px] mb-8 leading-relaxed">
          {isEn
            ? "a Seiza —the traditional Japanese posture of sitting on the knees— goes beyond martial arts or tea ceremonies. Today, it’s rediscovered as a powerful therapeutic tool and a spiritual practice that can:"
            : "a Seiza —ese modo tradicional japonés de sentarse sobre las rodillas— trasciende su uso en artes marciales como el Iaido o ceremonias como el chanoyu (ceremonia del té). Hoy, se redescubre como una poderosa herramienta psicoterapéutica y una práctica espiritual capaz de:"}
        </p>
        <ul className="list-disc list-inside text-xl mb-8 space-y-2">
          <li>
            {isEn
              ? "Dissolve fear (both of life and death) through conscious stillness."
              : "Disolver el miedo (tanto a la vida como a la muerte) mediante la quietud consciente."}
          </li>
          <li>
            {isEn
              ? "Restore the natural flow of the body, balancing physical and mental functions."
              : "Restaurar el flujo natural del cuerpo, equilibrando funciones físicas y mentales."}
          </li>
          <li>
            {isEn
              ? "Create a sacred space in daily life, breaking the cycle of obsessive thoughts that pull us away from the present."
              : "Crear un espacio sagrado en lo cotidiano, rompiendo el ciclo de pensamientos obsesivos que nos alejan del presente."}
          </li>
        </ul>

        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          {isEn ? "How to Do the Seiza Posture" : "Cómo Hacer la Postura Seiza"}
        </h2>
        <ul className="list-disc list-inside text-xl mb-12 space-y-2">
          <li>
            {isEn
              ? "Bend your legs and place your left knee on the ground. Support your right knee leaving a two-hand-width space from the left."
              : "Dobla las piernas y coloque la rodilla izquierda en el suelo. Apoya la rodilla derecha haciendo un espacio de dos manos de largo de la izquierda."}
          </li>
          <li>
            {isEn
              ? "Now place the outside of your feet on the floor opposite the soles so that the tips of your big toes touch."
              : "Ahora coloca la parte exterior en el piso opuesta a las plantas de tus pies de modo que las puntas de los dedos gordos del pie la toquen."}
          </li>
          <li>
            {isEn
              ? "Lower your hips until they are between your heels. Align your back so that the lower back is forward as if your spine were forming an S."
              : "Baja las caderas hasta que estén en el medio de tus talones. Alinee la espalda de modo que la parte inferior de la espalda esté hacia adelante como si su columna vertebral estuviera formando una S."}
          </li>
          <li>
            {isEn
              ? "Your weight should be centered somewhere between your toes and knees, slightly over your feet."
              : "Su peso debe estar centrado en algún lugar entre los dedos de los pies y las rodillas, ligeramente sobre sus pies."}
          </li>
          <li>
            {isEn
              ? "Balance your head with the tip of your spine. Your ears should be directed toward your shoulders and your nose aligned with your navel."
              : "Se coloca la cabeza en equilibrio con la punta de la espina dorsal. Las orejas deben estar en dirección a los hombros y la nariz se debe alinear con el ombligo."}
          </li>
          <li>
            {isEn
              ? "Bringing your nose to this position, move your back seeking verticality. Place your chin forward and stretch the back of your neck."
              : "Llevando la nariz hacia esta posición mueve la espalda buscando una verticalidad. Coloca la barbilla hacia adelante y estire la parte trasera del cuello."}
          </li>
          <li>
            {isEn
              ? "You should feel as if someone is pulling your hair to straighten your back. To find the straight position, you can rock in circles starting from the hips and slowly reduce the circles until you rest in a stable position. This straight and centered position is important to avoid muscle cramps or fatigue while sitting."
              : "Debes sentir como si alguien tirara de su cabello para enderezar su espalda. Para encontrar la posición recta, puede balancearse en círculos comenzando por las caderas y reducir lentamente los círculos hasta que descanse en una posición estable. Esta posición recta y centrada es importante para evitar calambres musculares o fatiga mientras se está sentado."}
          </li>
        </ul>

        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          {isEn ? "Benefits of Seiza" : "Beneficios de Seiza"}
        </h2>
        <p className="text-xl mb-12 leading-relaxed">
          {isEn
            ? "Some benefits of this posture are that it regulates nerve impulses, improves digestion, strengthens knees, reduces cramps and menstrual cycle discomfort, promotes proper spinal posture, and increases muscular endurance."
            : "Algunos de los beneficios de esta postura son que regula los impulsos nerviosos, mejora la digestión, fortalece las rodillas, reduce los cólicos, el ciclo menstrual, promueve la postura adecuada de la columna y aumenta la resistencia muscular."}
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-16 items-start">
          <div className="h-[300px] md:h-[400px] xl:h-[600px] w-full bg-[#D9D9D9] rounded-lg flex items-center justify-center text-center p-8"></div>
          <div className="w-full">
            <h2 className="text-[35px] md:text-[50px] font-bold mb-8">
              {isEn ? "Seiza Bench" : "Banco Seiza"}
            </h2>
            <p className="text-xl mb-4 leading-relaxed">
              {isEn
                ? "If you are a beginner and want to practice the Seiza posture simply and fluidly, we suggest using our Seiza bench designed to provide you comfort and support, helping you maintain an upright posture effortlessly, aligning your spine and relaxing your body while you meditate."
                : "Si eres principiante y estas buscando realizar tu postura seiza con simpleza y fluidez, te sugerimos utilizar nuestro banco seiza diseñado para brindarte comodidad y apoyo, te ayuda a mantener una postura erguida sin esfuerzo, alineando tu columna y relajando tu cuerpo mientras meditas."}
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

export default page;
