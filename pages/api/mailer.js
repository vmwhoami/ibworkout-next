import validation from '../../components/pages/contact/validations'
import SaveToDb from '../../utils/saveaToDb'
import sendEmail from '../../utils/mailing'

module.exports = (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json({ message: "This route does not have a GET request" })
    return
  } else if (req.method === 'POST') {
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const select = req.body.select
    const comment = req.body.comment
    const errors = validation({ name, email, phone })
    if (Object.values(errors).length > 0) {
      res.status(206).json({ errors: errors })
      return
    } else {
      SaveToDb({ name, email, phone, comment, select })
        .then(res => console.log(res.ops))
        .catch(err => console.log(err))
      sendEmail({ name, email, phone, comment, select })
      res.status(200).json({ success: "Message sent" })
      return
    }
  } else {
    res.status(300).json({ message: "Your request is not supported" })
  }
};
