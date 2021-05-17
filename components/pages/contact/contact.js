import Form from './form'
import { useSelector } from 'react-redux';
const Contact = () => {
  const submitted = useSelector((state) => state.commonReducer.submitted);
  return (
    <>
      {submitted ? <div className="form" id="form">
        <h3 className="hcenter text-white">Cпасибо мы скоро с вами свяжемся!!!</h3></div> : <Form />}
    </>
  )
}

export default Contact
