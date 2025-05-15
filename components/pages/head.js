'use client';
import ProbeBtn from '../probeBtn';
import { useInView } from 'react-hook-inview'
import { motion } from "framer-motion"
const Head = () => {
  const ease = [0.34, 1.56, 0.64, 1];
  const [ref, inView] = useInView()
  const visible = { opacity: 1, y: 0 }
  const nonvisible = { opacity: 0, y: 200 }
  const transitition = { ease: ease, duration: .5 }

  return (
    <div ref={ref} className="head">
      <div className="head__bg" />
      <motion.div
        className="head__container">
        <motion.h1

          transition={transitition}
          animate={inView ? visible : nonvisible}

          className="head__h1">Online training with a personal trainer.</motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ delay: .5, duration: .5 }}
          animate={{ opacity: 1 }}
        >In real time.</motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ delay: 1, duration: .5 }}
          animate={{ opacity: 1 }}

        >When it's convenient.</motion.p>
        <motion.p

          initial={{ opacity: 0 }}
          transition={{ delay: 1.5, duration: .5 }}
          animate={{ opacity: 1 }}
        >Where it is convenient.</motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, ease: ease, duration: .5 }}
        >
          < ProbeBtn styling="head__btn" />
        </motion.div>
      </motion.div>
    </div>
  )
};

export default Head;
