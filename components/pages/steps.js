import StepsLeft from './stepsleft';
import StepsRight from './StepsRight';
import { useInView } from 'react-hook-inview'
import { motion } from "framer-motion"
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
        <img className="steps__img" src="/images/iphone12black.png " alt="iphone12" />
      </motion.div>
      <StepsRight />
    </div>

  )
};

export default Steps;
