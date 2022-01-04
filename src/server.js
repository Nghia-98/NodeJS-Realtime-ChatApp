import express from 'express';
require('colors');
import dotenv from 'dotenv';

import connectDB from './config/connectDB';
import ContactModel from './models/contact.model';

let app = express();

app.use(express.json());

dotenv.config();

// Connect to Database
connectDB();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('<h1> Server Nodejs Chat App is running now!!! <h1/>');
});

app.get('/test-DB', async (req, res) => {
  try {
    let item = { userId: 'abc', contactId: 'cba' };

    const newContact = new ContactModel(item);
    await newContact.save();
    console.log(':::: New Contact', newContact);

    res.status(201).json(newContact);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Sever is running on port ${PORT}`.yellow.bold);
});
