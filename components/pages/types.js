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
      <h3 className="hcenter">Types of training</h3>
      <motion.div
        animate={inView ? "open" : "closed"}
        variants={variants}

        className="types__container">
        <motion.div animate={inView ? "open" : "closed"}
          variants={variants}
          className="types__training">

          <Img adress="/images/functional.jpg" alt="functional" />
          <motion.div className="types__desc">
            <h4>Functional training</h4>
            <p>            
              Develops stamina and improves overall
              body tone - there will be more strength and motivation for other tasks.
          </p>
          </motion.div>
        </motion.div>

        <motion.div

          className="types__training">
          <Img adress="/images/silovie.jpg" alt="silovie" />
          <div className="types__desc">
            <h4>Strength trainingг</h4>
            <p>              
              Develop muscles through training with own
              weight or weights - exercises help create
              beautiful relief and get in shape.
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
