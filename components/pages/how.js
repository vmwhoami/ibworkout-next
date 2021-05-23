import { useInView } from 'react-hook-inview'
import { motion } from "framer-motion"

import Iframe from 'react-iframe';
const How = () => {
  const [ref, inView] = useInView()
  console.log(inView);
  return (
    <div className="how" >
      <motion.div
        animate={inView ? { x: 0, y: 0, opacity: 1 } : { x: 0, y: 100, opacity: 0 }}
        transition={{
          delay: 1,
          default: { duration: .2 },
        }}

        className="how__h1">
        <h1 className="text-center">Как проходит тренировка?</h1>
      </motion.div>
      <div className="how__description">
        <p>
          Вы занимаетесь с персональным тренером по видеосвязи.
        {' '}
          <br />
        Всё, что вам нужно, — это ноутбук или телефон с веб-камерой, интернет
        <br />
        и немного свободного пространства (2 м от камеры).
      </p>
      </div>
      <div className="how__vidcont" ref={ref}>

        <Iframe
          className="how__vid"
          src="https://www.youtube.com/embed/esUFUlA__as"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""

        />


      </div>
    </div>
  )
};

export default How;
