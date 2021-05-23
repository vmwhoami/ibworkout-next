import StepsLeft from './stepsleft';
import StepsRight from './StepsRight';
import { useInView } from 'react-hook-inview'
import { motion } from "framer-motion"
import Image from 'next/image'

const Steps = () => {
  const [ref, inView] = useInView()
  const visible = { y: 0, opacity: 1 }
  const nonvisible = { y: 200, opacity: 0 }
  const trans = {
    delay: 1,
    default: { duration: .5 },
  }
  return (
    <div ref={ref} className="steps">
      <StepsLeft />
      <motion.div
        animate={inView ? visible : nonvisible}
        transition={trans}
        className="steps__imgcon">
        <Image className="steps__img"
          src="/images/iphone12black.png "
          alt="iphone12"
          width={500}
          height={900}

        />
      </motion.div>
      <StepsRight />
    </div>

  )
};

export default Steps;
