/** @format */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import ListAltIcon from '@mui/icons-material/ListAlt';
function NotFound({ title, paragraph, navigation, svg, type }) {
	const navigate = useNavigate();
	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6'>
			{type === 'prevOrders' ? (
				<div className='text-9xl text-gray-700'>
					<ListAltIcon fontSize='inherit' />
				</div>
			) : (
				svg
			)}
			<div className='max-w-md text-center'>
				<h1 className='text-2xl font-semibold text-gray-800 mb-4'>{title}</h1>
				<p className='text-gray-600 mb-6'>{paragraph}</p>

				<button
					onClick={() => navigate(navigation)}
					className='bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 cursor-pointer'
				>
					Explore Products
				</button>
			</div>
		</div>
	);
}

export default NotFound;
