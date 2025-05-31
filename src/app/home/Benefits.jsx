"use client";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

function Benefits() {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <div className="flex justify-center items-center py-8 flex-col md:px-16 px-4  bg-[url(/background_benefits.png)] bg-cover bg-center relative">
      <div className="absolute left-0">
        <img src="/mandala.png" alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:px-12">
        <div className="z-10">
          {" "}
          <img src="/seiza_letras.png" alt="Seiza" title="Seiza" />
          <img src="/seiza_banco.png" alt="Banquito" title="Banquito" />
        </div>
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[40px] md:text-[60px] text-[#1E1E1E] font-bold text-start mb-4"
          >
            {isEn ? "Benefits" : "Beneficios"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-seiza-cuaternario font-normal text-[20px] md:text-[30px] text-balance text-start mb-8"
          >
            <strong>
              {isEn ? "Meditation bench" : "Banco para meditación"}:
            </strong>{" "}
            {isEn
              ? " Facilitates the connection and alignment of the pelvis, sacrum, and crown, promoting a tension-free spine."
              : "Facilita la conexión y alineación de la pelvis, sacro y coronilla, promoviendo una columna sin tensiones."}
          </motion.p>
          {/* 2 */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-seiza-cuaternario font-normal text-[20px] md:text-[30px] text-balance text-start mb-8"
          >
            <strong>
              {isEn ? "Effortless comfort" : "Comodidad sin esfuerzo"}:
            </strong>{" "}
            {isEn
              ? " Relaxes your body and prevents overloading joints."
              : "Relaja tu cuerpo, evita sobrecargar articulaciones."}
          </motion.p>
          {/* 3 */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-seiza-cuaternario font-normal text-[20px] md:text-[30px] text-balance text-start mb-8"
          >
            <strong>
              {isEn ? "Improved circulation" : "Mejor circulación"}:
            </strong>{" "}
            {isEn
              ? " Enhances oxygenation and blood flow to the brain, organs, and tissues."
              : "Favorece la oxigenación y el flujo sanguíneo al cerebro, órganos y tejidos."}
          </motion.p>
          {/* 4 */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-seiza-cuaternario font-normal text-[20px] md:text-[30px] text-balance text-start mb-8"
          >
            <strong>{isEn ? "Deep breathing" : "Respiración profunda"}:</strong>{" "}
            {isEn
              ? " Relaxes the abdomen and organs. Pelvic floor alignment: Relieves menstrual pain and symptoms."
              : "Relaja el abdomen y órganos. Alineación de piso pélvico: Alivia el dolor y síntomas menstruales."}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
