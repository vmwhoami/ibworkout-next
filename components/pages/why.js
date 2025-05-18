'use client';

import { useInView } from 'react-hook-inview'
import { motion } from "motion/react"


const Why = () => {
  const [ref, inView] = useInView()
  const visible = { x: 0, y: 0, opacity: 1 }
  const nonvisible1 = { x: -200, y: 100, opacity: 0 }
  const nonvisible2 = { x: 0, y: 200, opacity: 0 }
  const nonvisible3 = { x: 200, opacity: 0 }
  const nonvisibleh = { y: -100, opacity: 0 }

  const trans = {
    delay: 2,
    default: { duration: .5 },
  }
  return (
    <div ref={ref} className="why">
      <motion.h2
        animate={inView ? visible : nonvisibleh}
        transition={trans}

        className="why__heading white-color">Why is this confortable?</motion.h2>
      <p className="why__p white-color">Train at your own pace anytime, anywhere</p>

      <motion.div className="why__container">
        <motion.div
          animate={inView ? visible : nonvisible1}
          transition={trans}

          className="why__section">
          <img className="why__img" src="/images/plan.png" alt="plan" />
          <p className="white-color">We draw up an individual workout plan: it takes into account your lifestyle, goals and physical capabilities</p>
        </motion.div>

        <motion.div
          animate={inView ? visible : nonvisible2}
          transition={trans}
          className="why__section">
          <img className="why__img" src="/images/coin.png" alt="coin" />
          <p className="white-color">Regular workout with a personal trainer online is several times cheaper than training with a instructor in a gym</p>
        </motion.div>

        <motion.div
          animate={inView ? visible : nonvisible3}
          transition={trans}
          className="why__section">
          <img className="why__img" src="/images/trainer.png" alt="plan" />
          <p className="white-color">Safe and suitable programming is one of the top benefits of personal training and particularly important if you have any contraindications to exercise, injuries, pre/post natal or post menopausal </p>
        </motion.div>
      </motion.div>
    </div>
  )
};

export default Why;
