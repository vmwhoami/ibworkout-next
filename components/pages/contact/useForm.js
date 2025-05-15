'use client';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { submitData } from '../../../redux/common/commonActions';

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

  // Add useEffect to handle validation updates
  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      // Optional: Add any side effects after successful validation
    }
  }, [errors]);

  const handleChange = (e) => {
    if (!e.target) {
      setValues(prev => ({ ...prev, phone: e }));
    } else {
      const { name, value } = e.target;
      setValues(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validation(values);
    await setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      dispatch(submitData(values));
    }
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;