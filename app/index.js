const express = require('express');
const { Client } = require('pg');

const app = express();
const PORT = process.env.PORT || 8080;

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

app.get('/', (req, res) => {
  res.send('Hello from Node.js Docker container!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
