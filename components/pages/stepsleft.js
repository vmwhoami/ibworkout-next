'use client';

import { Barbel, Question, Present } from '../Svgs';
import { useInView } from 'react-hook-inview'
import { motion } from "motion/react"
const StepsLeft = () => {
  const [ref, inView] = useInView()
  const visible = { x: 0, opacity: 1 }
  const nonvisible = { x: -200, opacity: 0 }
  const trans = {
    delay: 1,
    default: { duration: .5 },
  }

  return (
    <div ref={ref} className="steps__left">
      <motion.div
        animate={inView ? visible : nonvisible}
        transition={trans}
        className="steps__wrapper reverse">
        <div className="steps__textwrap">
          <h4>Choose the type of training</h4>
          <p>
             Each of them solves different tasks:
             helps reduce weight, keeps the body in shape,
             strengthens the muscular corset or works with stretching.
        </p>
        </div>
        <div className="steps__svgwrap">
          <Barbel />
        </div>
      </motion.div>

      <motion.div
        animate={inView ? visible : nonvisible}
        transition={trans}

        className="steps__wrapper reverse">
        <div className="steps__textwrap">
          <h4>Leave a request</h4>
          <p>
          Fill out a short form and we will choose
             your optimal program.
        </p>
        </div>
        <div className="steps__svgwrap">
          <Question />
        </div>
      </motion.div>

      <motion.div
        animate={inView ? visible : nonvisible}
        transition={trans}


        className="steps__wrapper reverse">
        <div className="steps__textwrap">
          <h4>To join a free trial workout</h4>
          <p>
             Get started with your chosen trainer for free:
             you will be able to understand whether the program and the format of the classes are right for you.
        </p>
        </div>

        <div className="steps__svgwrap">
          <Present />
        </div>
      </motion.div>

    </div>
  )
};

export default StepsLeft;
