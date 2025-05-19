"use client";

import { useInView } from "react-hook-inview";
import { motion } from "motion/react";
import Iframe from "react-iframe";

const visible = { x: 0, y: 0, opacity: 1 };
const nonvisible = { x: 0, y: 100, opacity: 0 };
const trans = {
  delay: 1,
  default: { duration: 0.2 },
};

const transForVideo = {
  delay: 2,
  default: { duration: 0.3 },
};

const How = () => {
  const [ref, inView] = useInView();

  return (
    <div className="how">
      <motion.div
        animate={inView ? visible : nonvisible}
        transition={trans}
        className="how__h1"
      >
        <h1 className="text-center">
          Готовы к переменам? Начните тренировку онлайн уже сегодня!
        </h1>
      </motion.div>

      <motion.div
        animate={inView ? visible : nonvisible}
        transition={trans}
        className="how__description"
      >
        <p>
          Тренируйтесь с личным тренером через видеосвязь и добивайтесь результатов быстрее. <br />
          Всё, что вам нужно — компьютер или смартфон с веб‑камерой, стабильный интернет <br />
          и свободное пространство минимум 2 метра от камеры. <br />
          Запишитесь прямо сейчас и получите первую тренировку со скидкой!
        </p>
      </motion.div>

      <motion.div
        animate={inView ? visible : nonvisible}
        transition={transForVideo}
        className="how__vidcont"
        ref={ref}
      >
        <Iframe
          className="how__vid"
          src="https://www.youtube.com/embed/esUFUlA__as"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </motion.div>
    </div>
  );
};

export default How;
