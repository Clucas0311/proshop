// UseEffect makes a request to the backend
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = () => {
	// in the brackets first - what we want to call the useState
	// Second argument it what will call to change the state
	// inside the useState is what we want to set as a default for state which is an empty array
	const [products, setProducts] = useState([]);
	// this will run the minute the function loads
	useEffect(() => {
		const fetchProducts = async () => {
			// grab the data
			const { data } = await axios.get('/api/products');
			// once we fetch that data we set it to the products
			// we want to change the from the empty array in UseState -- change state with setProducts
			setProducts(data);
		};
		fetchProducts();
	}, []);
	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{products.map((product) => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};
export default HomeScreen;
