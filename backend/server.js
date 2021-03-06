import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import products from './data/products.js';

dotenv.config();
const app = express();

connectDB();

app.get('/', (req, res, next) => {
	res.send('API IS RUNNING');
});

// get all the projects
app.get('/api/products', (req, res) => {
	res.json(products);
});

// get a single product
app.get('/api/products/:id', (req, res) => {
	const product = products.find((p) => p._id === req.params.id);
	res.json(product);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
