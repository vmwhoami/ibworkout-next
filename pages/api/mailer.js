import validation from '../../components/pages/contact/validations'

export default (req, res) => {
  if (req.method === 'POST') {
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const errors = validation({ name, email, phone })
    if (Object.values(errors).length > 0) {
      res.status(206).json({ errors: errors })
      return
    }
    return res.status(200).json({ success: "Message sent" })
  }
};
