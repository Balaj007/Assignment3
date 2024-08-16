const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 8500;
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/test';

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((error) => {
    console.error('Failed to connect to db:', error);
  });

app.get('/', (req, res) => {
  res.send('API is working successfully');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});