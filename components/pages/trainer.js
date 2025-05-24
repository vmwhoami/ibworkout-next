"use client";

import { useInView } from "react-hook-inview";
import { motion } from "motion/react";

const AboutTrainer = () => {
  const [ref, inView] = useInView({ rootMargin: "-100px 0px" });
  const visible = { y: 0, opacity: 1 };
  const hidden = { y: 100, opacity: 0 };
  const transition = { delay: 0.5, default: { duration: 0.8 } };

  return (
    <section
      ref={ref}
      id="about-us"
      className="grid mx-20 px-6 py-16 lg:py-24 grid grid-cols-2 lg:grid-cols-2 gap-12 items-center"
    >
      {/* ЛЕВАЯ КОЛОНКА */}
      <div className="m-4">
        <h2 className="text-4xl font-extrabold text-gray-900">О нас</h2>
        <p className="text-lg text-gray-600 uppercase tracking-wider">
          Узнай больше — стань больше вместе с нами
        </p>
        <p className="text-gray-700 leading-relaxed">
          Инна — мама двух прекрасных дочерей, жена, и человек, который провёл
          всю свою взрослую жизнь в Китае. Она работала танцовщицей, моделью, а
          также менеджером по танцам. Свободно говорит по-китайски и обожает
          готовить. Её опыт и страсть к танцу вдохновляют других становиться
          лучшей версией себя.
        </p>
      </div>

      {/* ПРАВАЯ КОЛОНКА */}
      <div className="w-full h-full flex justify-center items-center">
        {/* Красная фигура */}

        {/* Серая фигура */}
        <div className="bg-gray-100  transform -rotate-9 left-0 rounded-xl">
          <motion.a
            href="https://www.instagram.com/innabogdan/"
            animate={inView ? visible : hidden}
            transition={transition}
            className="z-10 block w-64 h-96 overflow-hidden rounded-2xl shadow-2xl"
          >
            <img
              src="/images/Inngirea.jpg"
              alt="Тренер Инна"
              className="object-cover w-full h-full"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default AboutTrainer;
