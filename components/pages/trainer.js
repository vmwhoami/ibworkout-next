"use client";

import { useInView } from "react-hook-inview";
import { motion } from "framer-motion";

const AboutTrainer = () => {
  const [ref, inView] = useInView({ rootMargin: "-100px 0px" });
  const visible = { y: 0, opacity: 1 };
  const hidden  = { y: 100, opacity: 0 };
  const transition = { delay: 0.5, default: { duration: 0.8 } };

  return (
    <section
      ref={ref}
      id="about-us"
      className="mx-6 lg:mx-20 px-6 py-16 lg:py-24"
    >
      <div className="flex flex-col lg:flex-row items-start gap-12">
        {/* TEXT COLUMN */}
        <div className="flex-1">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Обо мне
          </h2>
          <p className="uppercase text-gray-600 tracking-wider mb-6">
            Узнай больше — стань больше вместе с нами
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Инна — мама двух прекрасных дочерей, жена и человек, который провёл
            всю свою взрослую жизнь в Китае. С детства занималась спортивной
            гимнастикой, но из-за серьёзной травмы вынуждена была оставить
            спорт. Пройдя через долгий процесс восстановления, она открыла для
            себя танец как новый путь самовыражения.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Её первое выступление состоялось в Китае, где началась её
            профессиональная карьера. Сначала она работала по контрактам как
            танцовщица и модель, а со временем перешла на фриланс. Также у неё
            есть высшее образование в области тренерской подготовки, и она
            обучала онлайн ещё до начала пандемии коронавируса. Инна свободно
            говорит по-китайски, обожает готовить и обладает богатым опытом как
            в сценической, так и в преподавательской деятельности. Её страсть к
            танцу и жизни вдохновляет других становиться лучшей версией себя.
          </p>
        </div>

        {/* IMAGE COLUMN */}
        <motion.a
          href="https://www.instagram.com/innabogdan/"
          animate={inView ? visible : hidden}
          transition={transition}
          className="flex-shrink-0 w-full max-w-xs lg:max-w-sm rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src="/images/Inngirea.jpg"
            alt="Тренер Инна"
            className="object-cover w-full h-full"
          />
        </motion.a>
      </div>
    </section>
  );
};

export default AboutTrainer;
