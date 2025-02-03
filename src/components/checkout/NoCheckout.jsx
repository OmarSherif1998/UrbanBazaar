/** @format */

import React from 'react';
import { useNavigate } from 'react-router-dom';

function NoCheckout() {
	const navigate = useNavigate();
	return (
		<div className='flex flex-col items-center justify-center h-64'>
			<p className='text-lg text-gray-600 mb-4'>
				There is nothing for you here.
			</p>
			<button
				onClick={() => navigate('/previousOrders')}
				className='px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-900 transition cursor-pointer'
			>
				Check Previous Orders
			</button>
		</div>
	);
}

export default NoCheckout;
