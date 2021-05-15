import React from 'react'
import Select from './select'
import useForm from './useForm';
import validations from './validations';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const Form = () => {

  const {
    handleChange, handleSubmit, values, errors,
  } = useForm(validations);

  return (
    <div className="form" id="form">
      <h3 className="hcenter text-white">Записаться на консультацию c тренером</h3>
      <form name="contact" className="form__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ваше имя и фамилия"
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
          country={'md'}
          containerClass={"phone"}
          inputClass={"phone_input"}
          inputStyle={{ paddingTop: 25, paddingBottom: 25 }}
          name="phone"
          id="phone"
          placeholder={"Введите номер телефона"}
          value={values.phone}
          onChange={handleChange}
        />
        {errors.phone && <p>{errors.phone}</p>}
        <Select value={values.comment}
          handleChange={handleChange} />

        <div className="textarea">
          <textarea
            name="comment"
            id="comment"
            value={values.comment}
            onChange={handleChange}
            className="textarea__text"
            placeholder="Укажите, пожалуйста, ваш город или часовой пояс. Как с вами связаться (телефон, whatsapp и т.д.) и в какое время? Промокод (если есть) и прочие комментарии."
            rows="4"
            spellCheck="false"
          />
        </div>
        <div className="btncontainer">
          <button
            type="submit"
            className="formbtn">
            Отправить
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
