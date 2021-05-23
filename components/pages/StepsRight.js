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
          <h4>Запланируйте занятия</h4>
          <p>Выберите удобное время и регулярно занимайтесь с персональным тренером.</p>
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
          <h4>Выберите пакет тренировок</h4>
          <p>
            Определите комфортную нагрузку и
            тренируйтесь один, два или три раза в
            неделю от 825 руб./час.
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
          <h4>Достигайте результата</h4>
          <p>Добивайтесь целей с рекомендациями вашего наставника.</p>
        </div>
      </motion.div>
    </div>
  )
};

export default StepsRight;
