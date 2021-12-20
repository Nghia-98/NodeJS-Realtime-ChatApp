import express from 'express';

let app = express();

const port = 8080;

app.get('/', (req, res) => {
  res.send('<h1> Server Nodejs Chat App is running now!!! <h1/>');
});

app.listen(port || 8080, () => {
  console.log('Sever is running on port ', port);
});
