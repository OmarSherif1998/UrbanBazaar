/** @format */

import React, { useState, useEffect } from 'react';

import { Categories, addProduct } from '../routes/URLS';
import apiCall from '../api/apiCall';

function CreateProduct() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [category, setCategory] = useState('');
	const [categories, setCategories] = useState([]);
	const [imageUrl, setImageUrl] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);

	const getCategories = async () => {
		try {
			const response = await apiCall(Categories);
			setCategories(response);
		} catch (error) {
			console.log(error);
		}
	};
	const createProduct = async () => {
		try {
			const newProduct = {
				title,
				description,
				price: parseFloat(price),
				image: imageUrl,
				category,
			};
			const response = await apiCall(
				addProduct,
				'POST',
				JSON.stringify(newProduct),
			);
			console.log(response);
			setSuccess(true);
			setTitle('');
			setDescription('');
			setPrice('');
			setCategory('');
			setImageUrl('');
		} catch (err) {
			setError('Failed to create product. Try again.');
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		getCategories();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (
			!title ||
			!description ||
			!price ||
			!category ||
			!imageUrl ||
			price <= 0
		) {
			setError('All fields are required, and price must be a positive number.');
			return;
		}
		createProduct();
		setLoading(true);
		setError(null);
		setSuccess(false);
	};

	return (
		<div className='max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg'>
			<h2 className='text-2xl font-semibold mb-4'>Create a New Product</h2>
			{error && <p className='text-red-500 mb-3'>{error}</p>}
			{success && (
				<p className='text-green-500 mb-3'>Product created successfully!</p>
			)}
			<form onSubmit={handleSubmit} className='space-y-4'>
				<input
					type='text'
					placeholder='Title'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					className='w-full p-2 border rounded'
					required
				/>
				<textarea
					placeholder='Description'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					className='w-full p-2 border rounded'
					required
				></textarea>
				<input
					type='number'
					placeholder='Price'
					value={price}
					onChange={(e) => setPrice(e.target.value)}
					className='w-full p-2 border rounded'
					required
				/>
				<select
					value={category}
					onChange={(e) => setCategory(e.target.value)}
					className='w-full p-2 border rounded'
					required
				>
					<option value=''>Select Category</option>
					{categories.map((cat) => (
						<option key={cat} value={cat}>
							{cat}
						</option>
					))}
				</select>
				<input
					type='text'
					placeholder='Image URL'
					value={imageUrl}
					onChange={(e) => setImageUrl(e.target.value)}
					className='w-full p-2 border rounded'
					required
				/>
				<button
					type='submit'
					disabled={loading}
					className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400'
				>
					{loading ? 'Submitting...' : 'Create Product'}
				</button>
			</form>
		</div>
	);
}

export default CreateProduct;
