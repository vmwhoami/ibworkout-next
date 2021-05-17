import Form from './form'
import { useSelector } from 'react-redux';
const Contact = () => {
  const submitted = useSelector((state) => state.commonReducer.submitted);
  return (
    <>
      {submitted ? <h2>Thanks you</h2> : <Form />}
    </>
  )
}

export default Contact
