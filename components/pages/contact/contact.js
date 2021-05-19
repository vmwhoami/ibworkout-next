import Form from './form'
import { motion, AnimatePresence } from "framer-motion"
import { useSelector } from 'react-redux';
const Contact = () => {
  const submitted = useSelector((state) => state.commonReducer.submitted);
  return (
    <>

      {submitted ? <AnimatePresence><motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="form" id="form">
        <h3 className="hcenter text-white">Cпасибо мы скоро с вами свяжемся!!!</h3></motion.div></AnimatePresence> : <AnimatePresence>
        <motion.div
          id="form"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Form />
        </motion.div>
      </AnimatePresence>}
    </>
  )
}

export default Contact
