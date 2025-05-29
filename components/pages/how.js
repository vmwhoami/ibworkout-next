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
  <figure className="flex h-screen flex-col md:flex-row bg-gray-100 rounded-xl p-8 md:p-0">

      <motion.div
        animate={inView ? visible : hidden}
        transition={textTransition}
        className="text-lg md:text-xl text-gray-700"
      >
        <motion.h2
          animate={inView ? visible : hidden}
          transition={textTransition}
          className="p-20 text-2xl md:text-5xl md:p-10 font-bold text-gray-900 leading-tight"
        >
          Пора прокачать тело и дух на свежем воздухе
        </motion.h2>
        <p className="p-20 md:p-10 text-2xl">
          {" "}
          Забудьте душные залы. Тренируйтесь под открытым небом с
          профессионалом, который вдохновляет. Наши онлайн-сессии с видео
          сопровождением подарят вам энергию, гибкость и силу — где бы вы ни
          были.
        </p>

        <span className="p-10 text-2xl font-semibold text-red-500">
          Первая тренировка — со скидкой!
        </span>
      </motion.div>
      <div className="flex-row  md:flex-col w-full h-full pt-6 md:p-8 text-center md:text-left space-y-4">
        <motion.div
          animate={inView ? visible : hidden}
          transition={videoTransition}
          ref={ref}
          className="md:rounded-none w-full h-full"
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
    </figure>
  );
};

export default How;
