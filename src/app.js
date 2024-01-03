const express = require('express');
const app = express();
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file

// GET route to return the value stored in the NUMBER variable from .env
app.get('/api/get-env', (req, res) => {
  const secretNumber = process.env.NUMBER;

  if (secretNumber) {
    res.status(200).json({ number: secretNumber });
  } else {
    res.status(404).json({ err: 'Not Found' });
  }
});

module.exports = app;
