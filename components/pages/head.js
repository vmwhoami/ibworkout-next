"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProbeBtn from "../probeBtn";

export default function HomeHero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  const fadeIn = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] };
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/mainbg.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          quality={80}
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/70 to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        ref={ref}
        className="relative max-w-screen-lg px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-6"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={fadeIn}
      >
        <motion.h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight" >
          Хотите кардинальных перемен?
        </motion.h1>

        <motion.h2
          className="text-red-100 font-semibold text-xl sm:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Тренируйтесь онлайн с персональным тренером!
        </motion.h2>

        <motion.div
          className="text-4xl text-gray-200 text-base sm:text-lg max-w-prose"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 class="text-2xl sm:text-3xl font-bold text-white-600 tracking-wide text-center drop-shadow-md">
            В прямом эфире, где и когда вам удобно. Начните свой путь к здоровью уже сегодня.
          </h3>
  
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <ProbeBtn className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold text-base sm:text-lg">
            Начать тренировку
          </ProbeBtn>
          <ProbeBtn className="px-8 py-3 border border-red-600 hover:bg-red-600 hover:text-white rounded-full text-red-600 font-semibold text-base sm:text-lg bg-transparent">
            Подробнее
          </ProbeBtn>
        </motion.div>
      </motion.div>
    </section>
  );
}
