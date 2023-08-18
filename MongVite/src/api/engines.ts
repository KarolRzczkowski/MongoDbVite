import express, { Request, Response } from 'express';
import { MongoClient, Db } from 'mongodb';

const router = express.Router();

// Definicja ścieżki do endpointu
router.get('/engines', async (req: Request, res: Response) => {
  try {
    const dbURI = 'mongodb://localhost:27017';
    const client = new MongoClient(dbURI);
    
    await client.connect();
    const database: Db = client.db('cars');
    const enginesCollection = database.collection('engines');
    
    const enginesData = await enginesCollection.find().toArray();
    
    res.json(enginesData);
  } catch (error) {
    console.error('Error fetching engines:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    client.close();
  }
});

export default router;
