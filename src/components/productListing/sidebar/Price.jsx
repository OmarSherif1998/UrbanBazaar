/** @format */

import React from 'react';

function Price({ priceSort, handlePriceSort }) {
	return (
		<div className='mb-6 border border-gray-100  rounded-lg p-5'>
			<h3 className='text-lg font-semibold mb-3'>Sort by Price</h3>
			<button
				onClick={() => handlePriceSort('asc')}
				className={`w-full text-left p-2 rounded-lg font-semibold text-gray-700 ${
					priceSort === 'asc'
						? 'bg-gray-100'
						: 'hover:bg-gray-50 hover:cursor-pointer'
				}`}
			>
				- Low to High
			</button>
			<button
				onClick={() => handlePriceSort('desc')}
				className={`w-full text-left p-2 rounded-lg font-semibold text-gray-700 ${
					priceSort === 'desc'
						? 'bg-gray-100'
						: 'hover:bg-gray-50 hover:cursor-pointer'
				}`}
			>
				- High to Low
			</button>
		</div>
	);
}

export default Price;
