'use client';

import { Clock, Package, Trophy } from '../Svgs';
import { useInView } from 'react-hook-inview'
import { motion } from "motion/react"

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
        className="steps__wrapper"
      >
        <div className="steps__svgwrap">
          <Clock />
        </div>
        <div className="steps__textwrap">
          <h4>Запишитесь на индивидуальную тренировку</h4>
          <p>
            Выбирайте удобное время и занимайтесь регулярно  
            с личным тренером. Это не только комфорт — это дисциплина  
            и прогресс без срывов.
          </p>
        </div>
      </motion.div>

      <motion.div
        animate={inView ? visible : nonvisible}
        transition={trans}
        className="steps__wrapper"
      >
        <div className="steps__svgwrap">
          <Package />
        </div>
        <div className="steps__textwrap">
          <h4>Выберите пакет тренировок</h4>
          <p>
            Сколько занятий вам нужно? На какой срок?  
            Вы сами решаете. Мы подстроимся под ваш ритм  
            и обеспечим результат.
          </p>
        </div>
      </motion.div>

      <motion.div
        animate={inView ? visible : nonvisible}
        transition={trans}
        className="steps__wrapper"
      >
        <div className="steps__svgwrap">
          <Trophy />
        </div>
        <div className="steps__textwrap">
          <h4>Достигайте своих целей</h4>
          <p>
            Вместе с наставником вы не просто тренируетесь —  
            вы двигаетесь вперёд, отслеживаете прогресс  
            и достигаете целей, которые раньше казались недостижимыми.
          </p>
        </div>
      </motion.div>
    </div>
  )
};

export default StepsRight;
