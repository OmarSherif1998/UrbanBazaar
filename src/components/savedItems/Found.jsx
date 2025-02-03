/** @format */

import React, { useState } from 'react';
import NotFound from '../../utils/NotFound';
import apiCall from '../../api/apiCall';
import { singleProduct } from '../../routes/URLS';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/userSlice';

function Found({ savedItems }) {
	const navigate = useNavigate();
	const user = useSelector(selectUser);
	const [savedItemsState, setSavedItemsState] = useState(
		JSON.parse(localStorage.getItem(`savedItems${user.id}`)) || [],
	);
	const handleNavigate = async (id) => {
		try {
			const product = await apiCall(singleProduct(id));
			console.log(product);
			navigate('/productDetails', { state: { ...product } });
		} catch (error) {
			console.error('Error fetching product:', error);
		}
	};
	const handleRemove = () => {
		const favs = JSON.parse(localStorage.getItem(`savedItems${user.id}`)) || [];
		const updatedItems = favs.filter(
			(item, idx) => item.id !== savedItems[idx].id,
		);

		localStorage.setItem(`savedItems${user.id}`, JSON.stringify(updatedItems));

		// Update state to trigger re-render
		setSavedItemsState(updatedItems);
	};

	if (!savedItems || savedItems.length === 0) {
		return <NotFound />;
	}
	return (
		<div className='p-6'>
			<h2 className='text-2xl font-semibold mb-4'>Saved Items</h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
				{savedItems.map((item) => (
					<div
						key={item.id}
						className='bg-white shadow-lg rounded-xl p-4 border border-gray-200 hover:shadow-xl transition-shadow duration-200'
					>
						<img
							src={item.item_pic}
							alt={item.name}
							className='w-full h-40 object-contain rounded-md'
						/>
						<h3 className='mt-2 text-lg font-medium text-gray-800 truncate'>
							{item.name}
						</h3>
						<section className='flex justify-around mt-5'>
							<button
								onClick={() => handleNavigate(item.id)}
								className='shadow-2xl cursor-pointer border  border-gray-100 bg-blue-500 rounded-lg px-2 text-white py-1'
							>
								View Page
							</button>
							<button
								onClick={handleRemove}
								className='shadow-2xl cursor-pointer border border-gray-100 bg-red-500 rounded-lg px-2 text-white py-1'
							>
								Remove
							</button>
						</section>
					</div>
				))}
			</div>
		</div>
	);
}

export default Found;
