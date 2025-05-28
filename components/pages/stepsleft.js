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
        className="steps__wrapper reverse"
      >
        <div className="steps__textwrap">
          <h4 className="font-bold text-2xl font-sans text-gray-800 mb-4 
              pb-2 border-b-2 border-blue-400 hover:text-blue-600 
              transition-colors duration-300 tracking-tight">Выберите тип тренировки</h4>
          <p>
            У нас нет шаблонов — только персональный подход.  
            Хотите похудеть, подтянуть тело, укрепить мышцы или поработать над гибкостью?  
            Мы подберём формат под вашу цель и уровень подготовки.
          </p>
        </div>
        <div className="steps__svgwrap">
          <Barbel />
        </div>
      </motion.div>

      <motion.div
        animate={inView ? visible : nonvisible}
        transition={trans}
        className="steps__wrapper reverse"
      >
        <div className="steps__textwrap">
          <h4 className="font-bold text-2xl font-sans text-gray-800 mb-4 
              pb-2 border-b-2 border-blue-400 hover:text-blue-600 
              transition-colors duration-300 tracking-tight">Оставьте заявку</h4>
          <p>
            Заполните короткую анкету, и мы подберём для вас  
            оптимальную программу тренировок.  
            Никаких лишних слов — только то, что действительно работает.
          </p>
        </div>
        <div className="steps__svgwrap">
          <Question />
        </div>
      </motion.div>

      <motion.div
        animate={inView ? visible : nonvisible}
        transition={trans}
        className="steps__wrapper reverse"
      >
        <div className="steps__textwrap">
          <h4 className="font-bold text-2xl font-sans text-gray-800 mb-4 
              pb-2 border-b-2 border-blue-400 hover:text-blue-600 
              transition-colors duration-300 tracking-tight">Присоединитесь к бесплатной пробной тренировке</h4>
          <p>
            Попробуйте бесплатно: познакомьтесь с тренером,  
            почувствуйте подход и оцените результат.  
            Уже после первой сессии вы поймёте —  
            **мы — это то, что вы искали**.
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
