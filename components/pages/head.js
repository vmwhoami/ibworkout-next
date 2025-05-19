"use client";

import ProbeBtn from "../probeBtn";
import { useInView } from "react-hook-inview";
import { motion } from "motion/react";

const Head = () => {
  const ease = [0.34, 1.56, 0.64, 1];
  const [ref, inView] = useInView();
  const visible = { opacity: 1, y: 0 };
  const nonvisible = { opacity: 0, y: 200 };
  const transition = { ease: ease, duration: 0.5 };

  return (
    <div ref={ref} className="head">
      <div className="head__bg" />

      <motion.div className="head__container">
        <motion.h1
          transition={transition}
          animate={inView ? visible : nonvisible}
          className="head__h1"
        >
          Хотите кардинальных перемен? Тренируйтесь онлайн с персональным
          тренером!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          animate={{ opacity: 1 }}
        >
          В прямом эфире.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          animate={{ opacity: 1 }}
        >
          Когда удобно вам.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          animate={{ opacity: 1 }}
        >
          Где вам удобно.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, ease: ease, duration: 0.5 }}
        >
          <ProbeBtn styling="head__btn" text="Начать тренировку" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Head;
