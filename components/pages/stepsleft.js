import { Barbel, Question, Present } from '../Svgs';
import { useInView } from 'react-hook-inview'
import { motion } from "framer-motion"
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
          <h4>Выберите тип тренинга</h4>
          <p>
            Каждый из них решает разные задачи:
            помогает снизить вес, поддерживает тело в форме,
            укрепляет мышечный корсет или работает с растяжкой.
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
          <h4>Оставьте заявку</h4>
          <p>
            Заполните короткую анкету, и мы составим для
            вас оптимальную программу.
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
          <h4>Пройдите пробную тренировку</h4>
          <p>
            Начните заниматься с выбранным тренером бесплатно:
            так вы поймете, подходят ли вам программа и формат занятий.
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
