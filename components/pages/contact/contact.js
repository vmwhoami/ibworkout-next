'use client';

import { AnimatePresence, motion } from "motion/react"
import Form from './form';
import { useSelector } from 'react-redux';

const Contact = () => {
  const submitted = useSelector(state => state.commonReducer.submitted);
  return (
    <>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="thanks"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="form"
            id="form"
          >
            <h3 className="hcenter text-white">
              Thank you, we will contact you soon!!!
            </h3>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            id="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Form />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;
