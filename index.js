import express from 'express';
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// example get method products
const products = [
  { id: 1, name: 'Product A', price: 100 },
  { id: 2, name: 'Product B', price: 150 },
  { id: 3, name: 'Product C', price: 200 },
];

app.get('/products', (req, res) => {
  res.status(200).json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});