'use client';

import PropTypes from "prop-types";
import { useInView } from "react-hook-inview";
import { motion } from "motion/react"

const Types = () => {
  const [ref, inView] = useInView();
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
    transition: { duration: 3 },
  };
  return (
    <div ref={ref} className="types">
      <h3 className="hcenter">Виды тренировок</h3>
      <motion.div
        animate={inView ? "open" : "closed"}
        variants={variants}
        className="types__container"
      >
        <motion.div
          animate={inView ? "open" : "closed"}
          variants={variants}
          className="types__training"
        >
          <Img adress="/images/functional.jpg" alt="Функциональные тренировки" />
          <motion.div className="types__desc">
            <h4>Функциональные тренировки</h4>
            <p>
              Развивают выносливость и улучшают общее состояние тела —  
              вы почувствуете больше сил и мотивации в повседневной жизни.
            </p>
          </motion.div>
        </motion.div>

        <motion.div className="types__training">
          <Img adress="/images/silovie.jpg" alt="Силовые тренировки" />
          <div className="types__desc">
            <h4>Силовые тренировки</h4>
            <p>
              Развивайте мышцы с помощью упражнений с собственным весом  
              или отягощениями — идеальный способ создать красивый рельеф  
              и привести себя в форму.
            </p>
          </div>
        </motion.div>

        <div className="types__training">
          <Img adress="/images/yoga.jpg" alt="Пилатес и йога" />
          <div className="types__desc">
            <h4>Пилатес и йога</h4>
            <p>
              Укрепляют мышцы кора (пресс, спина, бёдра и ягодицы),  
              улучшают осанку и баланс, развивают гибкость и внимание  
              к телу с обеих сторон.
            </p>
          </div>
        </div>

        <div className="types__training">
          <Img adress="/images/weightloss.jpg" alt="Похудение" />
          <div className="types__desc">
            <h4>Похудение</h4>
            <p>
              Интенсивные силовые и функциональные тренировки помогут  
              эффективно сбросить вес и обрести желаемую форму.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Img = (props) => {
  const { adress, alt } = props;
  return (
    <div className="types__imgcont">
      <img src={adress} alt={alt} />
    </div>
  );
};

export default Types;

Img.propTypes = {
  adress: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
