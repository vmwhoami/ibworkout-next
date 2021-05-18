import validation from '../../components/pages/contact/validations'
import sendEmail from '../../utils/mailing'

const MongoClient = require("mongodb");
const SaveToDb = async (info) => {
  const client = new MongoClient(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db('contacts');
    const contact = database.collection('contacts');
    await contact.insertOne(info);

  } finally {
    await client.close();
  }

}


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
      try {
        SaveToDb({ name, email, phone, comment, select })
      } catch (error) {
        console.log(error);
      }

      sendEmail({ name, email, phone, comment, select })
      res.status(200).json({ success: "Message sent" })
      return
    }
  }
};
