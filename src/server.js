import express from 'express';
require('colors');
import dotenv from 'dotenv';
import createError from 'http-errors';

import connectDB from './config/connectDB';
import { notFound, defaultErrorHandler } from './middlewares/error.middleware';
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

app.get('/test-DB', async (req, res, next) => {
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

app.get('/test-errorHandler', (req, res, next) => {
  const err = createError(505, 'Error created for test');
  next(err);
});

// Use error handler middlewares
app.use(notFound);
app.use(defaultErrorHandler);

app.listen(PORT, () => {
  console.log(`Sever is running on port ${PORT}`.yellow.bold);
});
