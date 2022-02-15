import { useInView } from 'react-hook-inview'
import { motion } from "framer-motion"


const Trainer = () => {
  const [ref, inView] = useInView()
  const visible = { y: 0, opacity: 1 }
  const nonvisible = { y: 200, opacity: 0 }
  const trans = {
    delay: 1,
    default: { duration: 1 },
  }
  return (
    <div ref={ref} className="trainer" id="trainer">
      <h3 className="hcenter text-white">Trainer</h3>
      <motion.a
        animate={inView ? visible : nonvisible}
        transition={trans}

        className="trainer__container" href="https://www.instagram.com/innabogdan/">
        <div className="trainer__imgcontainer">
          <img
            src="/images/Inngirea.jpg"
            alt="Inna"
          />
        </div>
        <div className="trainer__description">
          <h1>Inna</h1>
          <h3>Strength, functional, stretching</h3>
          <p>Gym instructor, personal trainer, stretching, Inna has a higher education in physical education and
            20 years of experience in dance sports and fitness.
        </p>
        </div>
      </motion.a>
    </div>
  )
};
export default Trainer;
