import React from 'react';
import PhoneInput from 'react-phone-input-2';
import useForm from './useForm';
import validations from './validations';
import 'react-phone-input-2/lib/style.css';

const Form = () => {
  const {
    handleChange, handleSubmit, values, errors,
  } = useForm(validations);

  const options = [
    "Choose the purpose of your training",
    'Keep the whole body in good shape',
    'Pumping the muscles of the press, legs and buttocks',
    'Increased strength / mass gain',
    'Weight loss',
    'Healthy back',
    'Yoga / Pilates for health',
    'Improve flexibility and strength',
  ];

  const genKey = () => Math.random().toString(36).slice(2, 10);

  return (
    <div className="form" >
      <h3 className="hcenter text-white">Book a session with our coach</h3>
      <form name="contact" className="form__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name and surname"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          type="email"
          name="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          placeholder="E-mail"
        />
        {errors.email && <p>{errors.email}</p>}
        <PhoneInput
          country="md"
          containerClass="phone"
          inputClass="phone_input"
          inputStyle={{ paddingTop: 25, paddingBottom: 25 }}
          name="phone"
          id="phone"
          placeholder="Enter phone number"
          value={values.phone}
          onChange={handleChange}
        />
        {errors.phone && <p>{errors.phone}</p>}

        <div className="select">
          <select className="select__select" name="select" id="select" value={values.select} onChange={handleChange}>
            {options.map((option) => (
              <option key={genKey()} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="textarea">
          <textarea
            name="comment"
            id="comment"
            value={values.comment}
            onChange={handleChange}
            className="textarea__text"
            placeholder="Please enter your city or time zone. How can I contact you (phone, whatsapp, etc.) and what time? "
            rows="4"
            spellCheck="false"
          />
        </div>
        <div className="btncontainer">
          <button
            type="submit"
            className="formbtn"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
