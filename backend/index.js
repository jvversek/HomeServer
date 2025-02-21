// backend/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Product = require('./models/product');
const productRoutes = require('./routes/products');

const app = express();

// CORS beállítások
app.use(cors({
  origin: 'http://192.168.50.71:3000',  // Frontend URL-je
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 8080;

// Adatbázis szinkronizálás és szerver indítás
Product.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Backend running on http://192.168.50.71:${PORT}`);
  });
});
