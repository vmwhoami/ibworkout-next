import validation from '../../components/pages/contact/validations'
import SaveToDb from '../../utils/saveaToDb'
import sendEmail from '../../utils/mailing'

module.exports = (req, res) => {
  if (req.method === 'POST') {
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
      sendEmail({ name, email, phone, comment, select })
      return res.status(200).json({ success: "Message sent" })
    }
  }
};
