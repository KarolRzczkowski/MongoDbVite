

const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const port = 5173;


app.use(cors());
app.use(express.json());


const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

let db;


client.connect().then(() => {
  db = client.db('your_database_name'); 
});


app.get('/api/engines', async (req, res) => {
  try {
    const engines = await db.collection('engines').find({}).toArray();
    res.json(engines);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
