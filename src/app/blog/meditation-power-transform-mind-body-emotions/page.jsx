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
            ? "Meditation: The Power to Transform Your Mind, Body, and Emotions"
            : "Meditación: El Poder de Transformar tu Mente, Cuerpo y Emociones"}
        </motion.h1>
      </section>

      <article className="bg-[url(/background.webp)] bg-cover bg-center px-6 md:px-12 py-8 font-normal ">
        {/* Introducción */}
        <p className="text-black text-[18px] md:text-[25px] mb-8 leading-relaxed">
          {isEn
            ? "Beyond a spiritual practice, science supports its physical, emotional, and cognitive benefits. In an accelerated, competitive world increasingly lacking empathy, work, daily activities, and even social interaction fill us with a thick haze of stress and what we know as burnout. Therefore, meditation practice has grown in popularity."
            : "Más allá de una práctica espiritual, la ciencia respalda sus beneficios físicos, emocionales y cognitivos. En un mundo tan acelerado, competitivo y con ausencia de empatía, cada vez el trabajo, nuestras actividades e incluso la convivencia nos llena de una bruma espesa de agobio y lo que conocemos como burnout, por lo tanto, la práctica de la meditación ha tenido más auge."}
        </p>

        {/* Beneficios Físicos */}
        <h2 className="text-[30px] md:text-[60px] font-bold mb-6">
          {isEn
            ? "Physical Benefits: Care for Your Body from Within"
            : "Beneficios Físicos: Cuida tu Cuerpo desde Dentro"}
        </h2>

        <h3 className="text-[30px] md:text-[40px] font-semibold mb-4">
          {isEn
            ? "Cardiovascular Health and Meditation"
            : "Salud cardiovascular y meditación"}
        </h3>
        <p className="text-xl mb-4">
          {isEn
            ? "Meditation not only calms and clears that haze of fatigue and stress, it also protects your heart."
            : "La meditación no solo calma y despeja esa bruma de cansancio y agobio, también protege tu corazón."}
        </p>
        <p className="text-xl mb-2 font-semibold">
          {isEn
            ? "Studies from the American Heart Association show:"
            : "Estudios de la American Heart Association demuestran que su práctica regular puede reducir el riesgo de infarto hasta en un 48%. ¿Cómo lo logra?"}
        </p>
        <ul className="list-disc list-inside text-xl mb-6 space-y-2">
          <li>
            {isEn
              ? "Regulates blood pressure: Relaxes nervous signals that tighten blood vessels, facilitating blood flow."
              : "Regula la presión arterial: Relaja las señales nerviosas que tensan los vasos sanguíneos, facilitando el bombeo de sangre."}
          </li>
          <li>
            {isEn
              ? "Prevents atherosclerosis: Chronic stress narrows arteries; meditation counteracts this effect, preventing heart attacks and strokes."
              : "Previene la aterosclerosis: El estrés crónico estrecha las arterias; la meditación contrarresta este efecto, evitando ataques cardíacos y accidentes cerebrovasculares."}
          </li>
        </ul>
        <p className="italic text-lg mb-12">
          {isEn
            ? '"Just 10 minutes a day is enough to notice changes in your heart rate," notes a Harvard Health study.'
            : '"Basta con 10 minutos al día para notar cambios en tu ritmo cardíaco", señala un estudio publicado en Harvard Health.'}
        </p>

        {/* Cortisol */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12 items-start">
          <div className="h-[300px] md:h-[400px] xl:h-[600px] w-full bg-[#D9D9D9] rounded-lg flex items-center justify-center text-center p-8"></div>
          <div className="w-full">
            <h2 className="text-[35px] md:text-[50px] font-bold mb-8">
              {isEn
                ? "Meditation: The Best Tool to Reduce Cortisol"
                : "Meditación: la mejor herramienta para reducir el Cortisol"}
            </h2>
            <p className="text-xl mb-4">
              {isEn
                ? "Psychological and physical stress causes an increase in the hormone cortisol, which in excess leads to inflammation, fatigue, insomnia, increased depression, anxiety, and high blood pressure."
                : "En general, el estrés psicológico y físico provoca un aumento en el nivel de la hormona cortisol, lo cual en exceso provoca inflamación, fatiga e insomnio, aumento de la depresión, ansiedad y presión arterial."}
            </p>
            <ul className="list-disc list-inside text-xl space-y-2">
              <li>
                {isEn
                  ? "Reduces cortisol levels: A University of California experiment showed participants had 30% less cortisol after 8 weeks of practice."
                  : "Reduce los niveles de cortisol: Un experimento en la Universidad de California mostró que tras 8 semanas de práctica, los participantes tenían un 30% menos de esta hormona."}
              </li>
              <li>
                {isEn
                  ? "Stops chronic inflammation: By lowering inflammatory cytokines, meditation protects your immune system."
                  : "Frena la inflamación crónica: Al disminuir las citocinas inflamatorias, protege tu sistema inmunológico."}
              </li>
            </ul>
          </div>
        </div>

        {/* Mindfulness */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12 items-start">
          <div className="w-full">
            <h2 className="text-[35px] md:text-[50px] font-bold mb-8">
              {isEn
                ? "Mindfulness: Clarity in the Midst of Chaos"
                : "Mindfulness: la claridad en medio del caos"}
            </h2>
            <p className="text-xl mb-4">
              {isEn
                ? "Meditation can increase positive emotions and actions towards ourselves and others. It's not about 'clearing the mind' but observing without judgment."
                : 'La meditación puede aumentar las emociones y acciones positivas para nosotros y hacia otras personas. No se trata de "dejar la mente en blanco", sino de observar sin juzgar.'}
            </p>
            <ul className="list-disc list-inside text-xl space-y-2">
              <li>
                {isEn
                  ? "Reduces social anxiety: A Stanford study showed it improves confidence in interactions."
                  : "Reduce la ansiedad social: Un estudio en Stanford comprobó que mejora la seguridad en interacciones."}
              </li>
              <li>
                {isEn
                  ? "Transforms relationships: Cultivating self-kindness (self-compassion) extends empathy to others, even those who challenge you."
                  : "Transforma relaciones: Al cultivar bondad hacia ti mismo (autocompasión), extiendes esa empatía a otros, incluso a quienes te desafían."}
              </li>
            </ul>
          </div>
          <div className="h-[300px] md:h-[400px] xl:h-[600px] w-full bg-[#D9D9D9] rounded-lg"></div>
        </div>

        {/* Manejo de la ansiedad */}
        <h2 className="text-[35px] md:text-[50px] mb-8 font-bold">
          {isEn
            ? "Meditation for Managing Anxiety"
            : "La meditación para el manejo de la ansiedad"}
        </h2>
        <p className="text-xl mb-6 leading-relaxed">
          {isEn
            ? "Meditation can be an excellent support for dealing with anxiety and related psychological issues. From panic attacks to work stress, meditation acts like a pause button."
            : "La meditación puede ser un excelente apoyo para lidiar con la ansiedad y los problemas psicológicos relacionados. Desde ataques de pánico hasta tensiones laborales, la meditación actúa como un botón de pausa."}
        </p>
        <p className="text-xl mb-12 leading-relaxed">
          {isEn
            ? "Exercises combining yoga and meditation blend movement and mindfulness, improving memory capacity, focus, and mental clarity. They are excellent tools to keep the mind young, reducing anxiety by 40% according to the Journal of Clinical Psychology."
            : "Algunos ejercicios que ayudan son la combinación del yoga y la meditación. Combinan movimiento y atención plena, mejoran la capacidad de la memoria, el enfoque y la claridad de pensamiento, y son una excelente herramienta para mantener la mente joven, reduciendo la ansiedad en un 40% de acuerdo con la revista Journal of Clinical Psychology."}
        </p>

        {/* Memoria y enfoque */}
        <h2 className="text-[35px] md:text-[50px] mb-8 font-bold">
          {isEn
            ? "Memory and Focus: Kirtan Kriya Meditation"
            : "Memoria y enfoque: la meditación Kirtan Kriya"}
        </h2>
        <p className="text-xl mb-12 leading-relaxed">
          {isEn
            ? "This meditation combines a mantra with repeated finger movements to focus your thoughts. It helps improve alertness, mental speed, and memory. This method aids in combating normal age-related memory loss."
            : "Es una combinación de un mantra y movimientos repetidos de los dedos para enfocar tus pensamientos. Este método ayuda a mejorar el estado de alerta, la velocidad mental y la memoria. Este tipo de meditación ayuda a combatir la pérdida de memoria normal relacionada con la edad."}
        </p>

        {/* Era de las distracciones */}
        <h2 className="text-[35px] md:text-[50px] mb-8 font-bold">
          {isEn
            ? "Meditation: The Solution in the Age of Distractions"
            : "La meditación: la solución en la era de las distracciones"}
        </h2>
        <p className="text-xl mb-4">
          {isEn
            ? "Does your attention jump from one place to another like a frog? Meditation trains the brain to:"
            : "¿Notas que tu atención salta de un lugar a otro como una rana? La meditación entrena el cerebro para:"}
        </p>
        <ul className="list-disc list-inside text-xl mb-12 space-y-2">
          <li>
            {isEn
              ? "Filter irrelevant stimuli: Like a muscle, concentration strengthens with practice."
              : "Filtrar estímulos irrelevantes: Como un músculo, la concentración se fortalece con práctica."}
          </li>
          <li>
            {isEn
              ? "Make clearer decisions: Reduces impulsivity by activating the prefrontal cortex."
              : "Tomar decisiones más claras: Reduce la impulsividad al activar la corteza prefrontal."}
          </li>
        </ul>

        {/* Banco Seiza */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-16 items-start">
          <div className="h-[300px] md:h-[400px] xl:h-[600px] w-full bg-[#D9D9D9] rounded-lg flex items-center justify-center text-center p-8"></div>
          <div className="w-full">
            <h2 className="text-[35px] md:text-[50px] font-bold mb-8">
              {isEn
                ? "Your Best Ally: The Seiza Bench"
                : "Banco Seiza: tu aliado en la meditación"}
            </h2>
            <p className="text-xl mb-4 leading-relaxed">
              {isEn
                ? "If you want to start meditating or take your practice to the next level, our Seiza bench is your best ally. Designed to provide comfort and support, it helps you maintain an upright posture effortlessly, aligning your spine and relaxing your body while you meditate."
                : "Si estás buscando comenzar a meditar o quieres llevar tu práctica a otro nivel, nuestro banco seiza es tu mejor aliado. Diseñado para brindarte comodidad y apoyo, te ayuda a mantener una postura erguida sin esfuerzo, alineando tu columna y relajando tu cuerpo mientras meditas."}
            </p>
            <p className="text-xl leading-relaxed">
              {isEn
                ? "Thanks to its ergonomic shape, it improves circulation and avoids tension in your knees and back. Also, its compact and lightweight design allows you to take it anywhere or store it easily when not in use."
                : "Gracias a su forma ergonómica, mejora la circulación y evita la tensión en tus rodillas y espalda. Además, su diseño compacto y ligero te permite llevarlo contigo a cualquier lugar o guardarlo fácilmente cuando no lo uses."}
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

export default page;
