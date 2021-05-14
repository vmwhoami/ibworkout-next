import React from 'react'

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

        <div className="select">
          <select className="select__select" name=" цель  тренировок">
            <option value="">Выберите цель ваших тренировок</option>
            <option value="Держать все тело в тонусе">
              Держать все тело в тонусе
          </option>
            <option value="Прокачка мышц пресса, ног и ягодиц">
              Прокачка мышц пресса, ног и ягодиц
          </option>
            <option value="Увеличение силы / набор массы">
              Увеличение силы / набор массы
          </option>
            <option value="Снижение веса">
              Снижение веса
          </option>
            <option value="Здоровая спина ">
              Здоровая спина
          </option>
            <option value="Научиться регулярно медитировать">
              Научиться регулярно медитировать
          </option>
            <option value="Йога / Пилатес для здоровья">
              Йога / Пилатес для здоровья
          </option>
            <option value="Улучшить гибкость и растяжку">
              Улучшить гибкость и растяжку
          </option>
            <option value="Другое">
              Другое
          </option>
          </select>
        </div>
        <div className="textarea">
          <textarea
            name="comment"
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
    </>
  )
}

export default form
