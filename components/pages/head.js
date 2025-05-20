"use client";

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
// import mainJpg from '../public/gym-bg.jpg';
import ProbeBtn from '../probeBtn';

export default function Home() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] };
  const ease = [0.43, 0.13, 0.23, 0.96];
  const visible = { opacity: 1, y: 0 };
  const nonvisible = { opacity: 0, y: 50 };

  return (
    <section className="flex w-90">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image src="/images/mainbg.jpg" 
               alt="Hero Background"
               fill
               className="object-cover"
               quality={80}
               unoptimized/>
        <div className="absolute inset-0 bg-black opacity-75" />
      </div>

      {/* Animated Head Content */}
      <div ref={ref} className="z-10 max-w-2xl mx-auto px-6 py-12">
        <motion.div
          className="flex flex-col items-center"
          initial={nonvisible}
          animate={inView ? visible : nonvisible}
          transition={transition}
        >
          <motion.h1 className="text-white text-2xl md:text-6xl font-bold leading-tight mb-6">
            Хотите кардинальных перемен? Тренируйтесь онлайн с персональным тренером!
          </motion.h1>
          <motion.div
            initial={{ odivacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-white"
          >
            В прямом эфире.
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-white"
          >
            Когда удобно вам.
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="text-white"
          >
            Где вам удобно.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 2, ease, duration: 0.5 }}>
            <ProbeBtn styling="px-6 py-3" text="Начать тренировку" />
          </motion.div>
        </motion.div>
      </div>

      {/* Play Button and Slider Controls */}
      <div className="absolute bottom-10 left-6 flex items-center space-x-8 z-10">
        <button className="relative w-16 h-16 rounded-full bg-gray-800 bg-opacity-50 flex items-center justify-center hover:bg-opacity-75 transition">
          <span className="sr-only">Play Video</span>
          <div className="w-0 h-0 border-l-6 border-l-white border-t-4 border-b-4 border-t-transparent border-b-transparent ml-1" />
        </button>
       
    
      </div>
    </section>
  );
}
