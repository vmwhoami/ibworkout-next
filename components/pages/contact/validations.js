const validation = (values) => {
  const errors = {};
  const { name, email, message, phone } = values;
  /* eslint-disable-next-line */
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!name.trim()) {
    errors.name = 'Имя обязательно!';
  }
  if (!email) {
    errors.email = 'Необходимо указать адрес электронной почты!';
  } else if (!re.test(email)) {
    errors.email = 'Электронная почта, которую вы указали, недействительна!';
  }

  if (!phone) {
    errors.phone = 'Номер телефона обязателен!';
  }

  // if (!message || message.length < 6) {
  //   errors.message = 'A full message is required!';
  // }

  return errors;
};

export default validation;