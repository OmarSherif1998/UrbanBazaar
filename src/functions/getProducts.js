/** @format */

import apiCall from '../api/apiCall';

const getProducts = async (category, count) => {
	try {
		let products = [];
		let iterations = Math.ceil(count / 4); // Fake Store API returns 4 items per request

		for (let i = 0; i < iterations; i++) {
			const response = await apiCall(
				`https://fakestoreapi.com/products/category/${category}`,
			);
			products = [...products, ...response]; // Add the products from the response
		}

		// If we have more than the required count, slice it to get the first 'count' products
		return products.slice(0, count);
	} catch (error) {
		console.error('Error fetching products:', error);
	}
};
export default getProducts;
