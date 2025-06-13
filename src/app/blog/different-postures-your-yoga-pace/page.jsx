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
          Yoga Poses: Your Practice, Your Rhythm
        </motion.h1>
      </section>

      <article className="bg-[url(/background.webp)] bg-cover bg-center px-6 md:px-12 py-8 font-normal ">
        <p className="text-black text-[18px] md:text-[25px] mb-8 leading-relaxed">
          Yoga doesn’t demand perfection. You can start today, at home, during a
          break, with nothing more than willingness. Morning calm or work
          stress—it adapts to you, not the other way around.
        </p>
        <p className="text-black text-[18px] md:text-[25px] mb-8 leading-relaxed">
          Its physical, emotional, and mental benefits are a gift to those who
          practice it consistently and listen to their bodies. Yoga is not a
          competition or a pose—it’s an internal dialogue seeking balance.
        </p>
        <p className="text-black text-[18px] md:text-[25px] mb-12 leading-relaxed italic">
          The only real rule in yoga? Start. With humility and patience. The
          rest will come with time and practice.
        </p>

        {/* Boat Pose */}
        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          Boat Pose (Naukasana)
        </h2>
        <div className="md:flex gap-8">
          <img src="/blog3.1.webp" alt="" className="size-96 mb-4" />
          <div>
            <p className="text-xl mb-8 leading-relaxed">
              An excellent pose for spine flexibility and core strength. At
              first, it may feel challenging, but the goal is progress, not
              perfection. Try these modifications if you're new:
            </p>

            <ul className="list-disc list-inside text-xl mb-12 space-y-2">
              <li>Keep legs a few inches off the floor.</li>
              <li>Slightly bend your knees to reduce tension.</li>
              <li>Place hands under glutes for lower back support.</li>
            </ul>
          </div>
        </div>
        {/* Seated Forward Bend */}
        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          Seated Forward Bend
        </h2>
        <div className="md:flex gap-8">
          <img src="/blog3.2.webp" alt="" className="size-96 mb-4" />

          <p className="text-xl mb-12 leading-relaxed">
            This pose involves leaning forward to rest the chest on your legs.
            It can be difficult at first, but improves flexibility over time.
            Keep your back straight and reach only as far as comfortable.
          </p>
        </div>

        {/* Child’s Pose */}
        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          Child’s Pose (Balasana)
        </h2>
        <div className="md:flex gap-8">
          <img src="/blog3.3.webp" alt="" className="size-96 mb-4" />

          <p className="text-xl mb-12 leading-relaxed">
            A place of calm within your practice. Sit on your heels, bring your
            torso forward, and rest your forehead on the floor. Stretch your
            arms forward or rest them beside your body. Breathe deeply and let
            go.
          </p>
        </div>
        {/* Downward Dog */}
        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          Downward Dog (Adho Mukha Svanasana)
        </h2>
        <div className="md:flex gap-8">
          <img src="/blog3.4.webp" alt="" className="size-96 mb-4" />

          <p className="text-xl mb-12 leading-relaxed">
            Great for stretching muscles, lengthening the spine, and energizing
            the body. Hands and feet grounded, hips lifted. If hamstrings are
            tight, bend the knees slightly.
          </p>
        </div>
        {/* Mountain Pose */}
        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          Mountain Pose (Tadasana)
        </h2>
        <div className="md:flex gap-8">
          <img src="/blog3.5.webp" alt="" className="size-96 mb-4" />

          <p className="text-xl mb-12 leading-relaxed">
            One of the most basic but essential poses. Activates muscle groups
            and promotes focus and grounding.
          </p>
        </div>
        {/* Meditation Pose */}
        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          Meditation Pose (Sukhasana or Padmasana)
        </h2>
        <div className="md:flex gap-8">
          <img src="/blog3.6.webp" alt="" className="size-96 mb-4" />
          <p className="text-xl mb-12 leading-relaxed">
            Ideal to begin or close your practice. Sit on a cushion or folded
            blanket. Knees relaxed, hands in mudra or resting on thighs.
            Elongate the spine, relax the shoulders.
          </p>
        </div>
        {/* Plank Pose */}
        <h2 className="text-[35px] md:text-[50px] font-bold mb-6">
          Plank (Phalakasana)
        </h2>
        <div className="md:flex gap-8">
          <img src="/blog3.7.webp" alt="" className="size-96 mb-4" />

          <p className="text-xl mb-12 leading-relaxed">
            Simple in appearance, but powerful. Strengthens the core and the
            whole body. Align shoulders with wrists, engage your core, and keep
            the breath steady.
          </p>
        </div>
        {/* Seiza Bench */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-16 items-start">
          <img src="/blog3.8.webp" alt="" className=" mb-4" />

          <div className="w-full">
            <h2 className="text-[35px] md:text-[50px] font-bold mb-8">
              Support Your Practice with Our Seiza Bench
            </h2>
            <p className="text-xl mb-4 leading-relaxed">
              Made from 100% natural poplar, this ergonomic bench provides firm
              and lightweight support. It helps you keep an aligned posture,
              allowing longer and more comfortable sessions.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}

export default page;
