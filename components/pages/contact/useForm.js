import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitData } from '../../../redux/common/commonActions'
const useForm = (validation) => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    select: '',
    comment: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    if (!e.target) {
      setValues({
        ...values,
        phone: e,
      });
    } else {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));

    dispatch(submitData(values));
  };

  return {
    handleChange, handleSubmit, values, errors,
  };
};

export default useForm;
