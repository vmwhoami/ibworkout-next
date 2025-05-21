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
        className="why__heading white-color"
      >
        Почему это удобно?
      </motion.h2>

      <p className="why__p white-color">
        Тренируйтесь в удобное для вас время, в любом месте и в своём темпе
      </p>

      <motion.div className="why__container">
        <motion.div
          animate={inView ? visible : nonvisible1}
          transition={trans}
          className="why__section"
        >
          <img className="why__img" src="/images/plan.png" alt="План" />
          <p className="white-color">
            Мы составим индивидуальный план тренировок, учитывая ваш образ жизни,
            цели и физические возможности
          </p>
        </motion.div>

        <motion.div
          animate={inView ? visible : nonvisible2}
          transition={trans}
          className="why__section"
        >
          <img className="why__img" src="/images/coin.png" alt="Монета" />
          <p className="white-color">
            Регулярные тренировки с онлайн‑тренером обходятся в несколько раз дешевле,
            чем занятия с инструктором в зале
          </p>
        </motion.div>

        <motion.div
          animate={inView ? visible : nonvisible3}
          transition={trans}
          className="why__section"
        >
          <img className="why__img" src="/images/trainer.png" alt="Тренер" />
          <p className="white-color">
            Безопасная и подходящая программа — один из главных плюсов персональных
            тренировок, особенно если у вас есть противопоказания к нагрузкам,
            травмы, вы в послеродовом периоде или проходите гормональную перестройку
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
};

export default Why;
