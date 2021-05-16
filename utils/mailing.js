const nodemailer = require('nodemailer');
const sendgrid = require('nodemailer-sendgrid-transport');

const sendEmail = async (options) => {
  const {
    name, email, phone, select, comment
  } = options;
  const opt = {
    auth: {
      api_key: process.env.SENDGRID,
    },
  };
  const transport = nodemailer.createTransport(sendgrid(opt));
  await transport.sendMail({
    to: 'vmwhoami@gmail.com',
    from: 'thenewyoungcoder@gmail.com',
    subject: 'New message from ibworkout',
    html: `<h2>You have got an email from ${name}</h2>
    <h4>This person's email is: ${email}</h4>
    <h3>Phone Number:  ${phone}</h3>
    <p>${select}</p>
    <p><strong>With the message being:  </strong>${comment}</p>
    `,
  });
};

export default sendEmail