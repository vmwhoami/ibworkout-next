import { useInView } from 'react-hook-inview'
import { motion } from "framer-motion"

import Iframe from 'react-iframe';

const visible = { x: 0, y: 0, opacity: 1 }
const nonvisible = { x: 0, y: 100, opacity: 0 }
const trans = {
  delay: 1,
  default: { duration: .2 },
}

const transForVideo = {
  delay: 2,
  default: { duration: .3 },
}
const How = () => {
  const [ref, inView] = useInView()

  return (
    <div className="how" >
      <motion.div
        animate={inView ? visible : nonvisible}
        transition={trans}
        className="how__h1">
        <h1 className="text-center">Как проходит тренировка?</h1>
      </motion.div>
      <motion.div

        animate={inView ? visible : nonvisible}
        transition={trans}
        className="how__description">
        <p>
          Вы занимаетесь с персональным тренером по видеосвязи.
        {' '}
          <br />
        Всё, что вам нужно, — это ноутбук или телефон с веб-камерой, интернет
        <br />
        и немного свободного пространства (2 м от камеры).
      </p>
      </motion.div>
      <motion.div
        animate={inView ? visible : nonvisible}
        transition={transForVideo}
        className="how__vidcont" ref={ref}>
        <Iframe
          className="how__vid"
          src="https://www.youtube.com/embed/esUFUlA__as"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""

        />

      </motion.div>
    </div>
  )
};

export default How;
