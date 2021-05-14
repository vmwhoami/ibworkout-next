import React from 'react'
import Select from './select'
const form = () => {
  return (
    <>
      <h3 className="hcenter text-white">Записаться на консультацию c тренером</h3>
      <form name="contact" className="form__form">
        <input
          type="text"
          placeholder="Ваше имя и фамилия"
          name="name"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
        />
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Телефон"
        />

        <Select />

        <div className="btncontainer">
          <button
            type="submit"
            className="formbtn">
            Отправить
          </button>
        </div>
      </form>
    </>
  )
}

export default form
