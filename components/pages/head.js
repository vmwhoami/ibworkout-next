"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProbeBtn from "../probeBtn";

export default function HomeHero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] };
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/mainbg.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          quality={80}
          unoptimized />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div
        ref={ref}
        className="flex z-10 max-w-xl px-6 space-y-6" >
        <motion.h1
          className="text-white text-2xl sm:text-3xl md:text-3xl  leading-tight"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={transition}
        >
          Хотите кардинальных перемен?
          <br />
          Тренируйтесь онлайн с персональным тренером!
        </motion.h1>

        <motion.p
          className="text-gray-200 text-lg sm:text-xl"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          В прямом эфире, где и когда вам удобно. Начните свой путь к здоровью уже сегодня.
        </motion.p>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <ProbeBtn className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold">
            Начать тренировку
          </ProbeBtn>

          
        </motion.div>
      </div>
    </section>
  );
}
