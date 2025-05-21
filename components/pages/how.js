"use client";

import { useInView } from "react-hook-inview";
import { motion } from "motion/react";
import Iframe from "react-iframe";

const visible = { x: 0, y: 0, opacity: 1 };
const hidden = { x: 0, y: 100, opacity: 0 };

const textTransition = {
  delay: 0.3,
  default: { duration: 0.6 },
};

const videoTransition = {
  delay: 0.8,
  default: { duration: 0.8 },
};

const How = () => {
  const [ref, inView] = useInView();

  return (
    <section className="px-6 py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <motion.h1
          animate={inView ? visible : hidden}
          transition={textTransition}
          className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
        >
          Пора прокачать тело и дух на свежем воздухе
        </motion.h1>

        <motion.p
          animate={inView ? visible : hidden}
          transition={textTransition}
          className="text-lg md:text-xl text-gray-700"
        >
          Забудьте душные залы. Тренируйтесь под открытым небом с профессионалом,
          который вдохновляет. Наши онлайн-сессии с видео сопровождением подарят вам
          энергию, гибкость и силу — где бы вы ни были.
          <br className="hidden md:inline" />
          <span className="font-semibold text-red-500">
            Первая тренировка — со скидкой!
          </span>
        </motion.p>

        <motion.div
          animate={inView ? visible : hidden}
          transition={videoTransition}
          ref={ref}
          className="aspect-video max-w-4xl mx-auto shadow-2xl rounded-xl overflow-hidden"
        >
          <Iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/esUFUlA__as"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Outdoor Drone Fitness Training"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default How;
