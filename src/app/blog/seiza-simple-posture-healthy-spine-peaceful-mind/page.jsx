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
          Seiza: A Simple Posture for a Healthy Spine and a Peaceful Mind
        </motion.h1>
      </section>

      <article className="bg-[url(/background.webp)] bg-cover bg-center px-6 md:px-12 py-8 font-normal text-black">
        <p className="text-[18px] md:text-[25px] mb-8 leading-relaxed">
          Seiza —the traditional Japanese posture of sitting on the knees— goes
          beyond martial arts or tea ceremonies. Today, it’s rediscovered as a
          powerful therapeutic tool and a spiritual practice that can:
        </p>

        <ul className="list-disc list-inside text-xl mb-8 space-y-2">
          <li>
            Dissolve fear (both of life and death) through conscious stillness.
          </li>
          <li>
            Restore the natural flow of the body, balancing physical and mental
            functions.
          </li>
          <li>
            Create a sacred space in daily life, breaking the cycle of obsessive
            thoughts that pull us away from the present.
          </li>
        </ul>

        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          How to Do the Seiza Posture
        </h2>
        <ul className="list-disc list-inside text-xl mb-12 space-y-2">
          <li>
            Bend your legs and place your left knee on the ground. Support your
            right knee leaving a two-hand-width space from the left.
          </li>
          <li>
            Now place the outside of your feet on the floor opposite the soles
            so that the tips of your big toes touch.
          </li>
          <li>
            Lower your hips until they are between your heels. Align your back
            so that the lower back is forward as if your spine were forming an
            S.
          </li>
          <li>
            Your weight should be centered somewhere between your toes and
            knees, slightly over your feet.
          </li>
          <li>
            Balance your head with the tip of your spine. Your ears should be
            directed toward your shoulders and your nose aligned with your
            navel.
          </li>
          <li>
            Bringing your nose to this position, move your back seeking
            verticality. Place your chin forward and stretch the back of your
            neck.
          </li>
          <li>
            You should feel as if someone is pulling your hair to straighten
            your back. To find the straight position, you can rock in circles
            starting from the hips and slowly reduce the circles until you rest
            in a stable position. This straight and centered position is
            important to avoid muscle cramps or fatigue while sitting.
          </li>
        </ul>

        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          Benefits of Seiza
        </h2>
        <p className="text-xl mb-12 leading-relaxed">
          Some benefits of this posture are that it regulates nerve impulses,
          improves digestion, strengthens knees, reduces cramps and menstrual
          cycle discomfort, promotes proper spinal posture, and increases
          muscular endurance.
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-16 items-start">
          <div className="h-[300px] md:h-[400px] xl:h-[600px] w-full bg-[#D9D9D9] rounded-lg flex items-center justify-center text-center p-8"></div>
          <div className="w-full">
            <h2 className="text-[35px] md:text-[50px] font-bold mb-8">
              Seiza Bench
            </h2>
            <p className="text-xl mb-4 leading-relaxed">
              If you are a beginner and want to practice the Seiza posture
              simply and fluidly, we suggest using our Seiza bench designed to
              provide you comfort and support, helping you maintain an upright
              posture effortlessly, aligning your spine and relaxing your body
              while you meditate.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

export default Page;
