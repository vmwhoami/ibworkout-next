import { useInView } from 'react-hook-inview'
import { motion } from "framer-motion"
import Image from 'next/image'

const Trainer = () => {
  const [ref, inView] = useInView()
  const visible = { y: 0, opacity: 1 }
  const nonvisible = { y: 200, opacity: 0 }
  const trans = {
    delay: 1,
    default: { duration: .5 },
  }
  return (
    <div ref={ref} className="trainer" id="trainer">
      <h3 className="hcenter text-white">Tренер</h3>
      <motion.a
        animate={inView ? visible : nonvisible}
        transition={trans}

        className="trainer__container" href="https://www.instagram.com/innabogdan/">
        <div className="trainer__imgcontainer">
          <Image
            src="/images/Inngirea.jpg"
            alt="Inna"
            width={1000}
            height={650}
          />
        </div>
        <div className="trainer__description">
          <h1>Inna</h1>
          <h3>Силовые, функциональные, стретчинг</h3>
          <p>
            Инструктор тренажерного зала, персональный тренер, стретчинг,
            «Первая школа фитнеса», г. Москва. У Анны высшее образование по физической культуре и
            13-летний опыт в спорте и фитнесе.
        </p>
        </div>
      </motion.a>
    </div>
  )
};
export default Trainer;
