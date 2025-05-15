import PropTypes from "prop-types";
import { useInView } from "react-hook-inview";
import { motion } from "framer-motion";
const Types = () => {
  const [ref, inView] = useInView();
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
    transition: { duration: 3 },
  };
  return (
    <div ref={ref} className="types">
      <h3 className="hcenter">Types of training</h3>
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
          <Img adress="/images/functional.jpg" alt="functional" />
          <motion.div className="types__desc">
            <h4>Functional training</h4>
            <p>
              Develops stamina and improves overall body tone - there will be
              more strength and motivation for other tasks.
            </p>
          </motion.div>
        </motion.div>

        <motion.div className="types__training">
          <Img adress="/images/silovie.jpg" alt="silovie" />
          <div className="types__desc">
            <h4>Strength training</h4>
            <p>
              Develop muscles through training with own weight or weights -
              exercises help create beautiful relief and get in shape.
            </p>
          </div>
        </motion.div>

        <div className="types__training">
          <Img adress="/images/yoga.jpg" alt="yoga" />
          <div className="types__desc">
            <h4>Pilates and yoga</h4>
            <p>
              Increases muscle strength and tone, particularly of your abdominal
              muscles, lower back, hips and buttocks (the 'core muscles' of your
              body). Balanced muscular strength on both sides of your body
            </p>
          </div>
        </div>

        <div className="types__training">
          <Img adress="/images/weightloss.jpg" alt="weightloss" />
          <div className="types__desc">
            <h4>Weight loss</h4>
            <p>
              Combines intense strength and functional training - will help you
              lose weight and get in shape.
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
