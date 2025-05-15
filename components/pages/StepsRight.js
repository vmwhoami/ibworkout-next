'use client';

import { Clock, Package, Trophy } from '../Svgs';
import { useInView } from 'react-hook-inview'
import { motion } from "framer-motion"
const StepsRight = () => {
  const [ref, inView] = useInView()
  const visible = { x: 0, opacity: 1 }
  const nonvisible = { x: 200, opacity: 0 }
  const trans = {
    delay: 1,
    default: { duration: .5 },
  }


  return (
    <div ref={ref} className="steps__right">
      <motion.div
        animate={inView ? visible : nonvisible}
        transition={trans}

        className="steps__wrapper">
        <div className="steps__svgwrap">
          <Clock />

        </div>
        <div className="steps__textwrap">
          <h4>Schedule a private training</h4>
          <p>Choose a convenient time and work out regularly with a personal trainer.</p>
        </div>
      </motion.div>

      <motion.div
        animate={inView ? visible : nonvisible}
        transition={trans}
        className="steps__wrapper">
        <div className="steps__svgwrap">
          <Package />
        </div>
        <div className="steps__textwrap">
          <h4>Choose a training package</h4>
          <p>
            Determine the number of classes and the duration of the training.
            Choose the program that suits you best.
           </p>
        </div>
      </motion.div>

      <motion.div

        animate={inView ? visible : nonvisible}
        transition={trans}

        className="steps__wrapper">
        <div className="steps__svgwrap">
          <Trophy />
        </div>
        <div className="steps__textwrap">
          <h4>Achieve the desired results</h4>
          <p>Reach your goals with the guidance of your mentor.</p>
        </div>
      </motion.div>
    </div>
  )
};

export default StepsRight;
