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
    <figure className="px-6 py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <motion.h1
          animate={inView ? visible : hidden}
          transition={textTransition}
          className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
        >
          Пора прокачать тело и дух на свежем воздухе
        </motion.h1>

        <motion.div
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
        </motion.div>

        <motion.div
          animate={inView ? visible : hidden}
          transition={videoTransition}
          ref={ref}
          className="md:rounded-none rounded-full m-auto"
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


      <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
  <img class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-semibold">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-cyan-600">
        Sarah Dayan
      </div>
      <div class="text-gray-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>

    </figure>
  );
};

export default How;
