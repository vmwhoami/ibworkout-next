"use client";

import { useInView } from "react-hook-inview";
import { motion } from "motion/react";

const Trainer = () => {
  const [ref, inView] = useInView();
  const visible = { y: 0, opacity: 1 };
  const nonvisible = { y: 200, opacity: 0 };
  const trans = {
    delay: 1,
    default: { duration: 1 },
  };
  return (
    <div ref={ref} className="trainer" id="trainer">
      <h3
        className="
                    text-3xl         /* large, bold text size */ 
                    font-extrabold   /* extra emphasis */ 
                    bg-gradient-to-r /* gradient background */ 
                    from-purple-400 via-pink-500 to-red-500 /* three‑color stop */ 
                    bg-clip-text     /* crop gradient to text only */ 
                    text-transparent /* hide the fill, show the gradient */ 
                    animate-text     /* subtle shifting animation */ 
                    mb-6             /* spacing below */ 
                  "
      >
        Trainer
      </h3>
      <motion.a
        animate={inView ? visible : nonvisible}
        transition={trans}
        className="trainer__container"
        href="https://www.instagram.com/innabogdan/"
      >
        <div className="trainer__imgcontainer">
          <img src="/images/Inngirea.jpg" alt="Inna" />
        </div>
        <div className="trainer__description">
          <h1>Inna</h1>
          <h3>Strength, functional, stretching</h3>
          <p>
            Gym instructor, personal trainer, stretching, Inna has a higher
            education in physical education and 20 years of experience in dance
            sports and fitness.
          </p>
        </div>
      </motion.a>
    </div>
  );
};
export default Trainer;
