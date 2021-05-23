import PropTypes from 'prop-types';
import { useInView } from 'react-hook-inview';
import { motion } from 'framer-motion';
const Types = () => {
  const [ref, inView] = useInView()
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
    transition: { duration: 3 }
  }
  return (
    <div ref={ref} className="types">
      <h3 className="hcenter">Типы тренинга</h3>
      <motion.div
        animate={inView ? "open" : "closed"}
        variants={variants}

        className="types__container">
        <motion.div animate={inView ? "open" : "closed"}
          variants={variants}
          className="types__training">

          <Img adress="/images/functional.jpg" alt="functional" />
          <motion.div className="types__desc">
            <h4>Функциональный тренинг</h4>
            <p>
              Развивает выносливость и улучшает общий
              тонус организма — появится больше сил и мотивации для других задач.
          </p>
          </motion.div>
        </motion.div>

        <motion.div

          className="types__training">
          <Img adress="/images/silovie.jpg" alt="silovie" />
          <div className="types__desc">
            <h4>Силовой тренинг</h4>
            <p>
              Развивает мышцы за счет тренировок с собственным
              весом или утяжелителями — упражнения помогают создать
              красивый рельеф и прийти в спортивную форму.
          </p>
          </div>
        </motion.div>

        <div className="types__training">
          <Img adress="/images/yoga.jpg" alt="yoga" />
          <div className="types__desc">
            <h4>Пилатес и йога</h4>
            <p>
              Восстанавливают эластичность мышц, работают с растяжкой —
              этот тренинг помогает расслабиться и повысить гибкость тела.
          </p>
          </div>
        </div>

        <div className="types__training">
          <Img adress="/images/weightloss.jpg" alt="weightloss" />
          <div className="types__desc">
            <h4>Снижение веса</h4>
            <p>
              Сочетает интенсивные силовые и
              функциональные тренировки — они помогут снизить вес и прийти в форму.
          </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
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
