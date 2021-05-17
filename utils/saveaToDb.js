import { MongoClient } from "mongodb";
const SaveToDb = async (info) => {

  const client = new MongoClient(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db('contacts');
    const contact = database.collection('contacts');
    const result = await contact.insertOne(info);
  } finally {
    await client.close();
  }

}

export default SaveToDb