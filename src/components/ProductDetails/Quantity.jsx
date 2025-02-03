/** @format */

import React from 'react';

function Quantity({ decreaseQuantity, quantity, increaseQuantity }) {
	return (
		<section className='flex items-center gap-4'>
			<h1 className='text-2xl font-medium text-gray-700'>Quantity</h1>
			<div className='flex items-center rounded-lg border border-gray-200 shadow-sm'>
				<button
					className='h-10 w-10 bg-gray-50 text-xl rounded-lg text-gray-600 hover:bg-red-500 hover:text-white active:scale-95 transition-all duration-150 disabled:opacity-50'
					onClick={decreaseQuantity}
					aria-label='Decrease quantity'
				>
					−
				</button>
				<input
					type='number'
					className='h-10 w-16 bg-gray-50 text-center text-lg font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500'
					value={quantity}
					readOnly
					aria-label='Product quantity'
				/>
				<button
					className='h-10 w-10 bg-gray-50 text-xl rounded-lg text-gray-600 hover:bg-green-500 hover:text-white active:scale-95 transition-all duration-150'
					onClick={increaseQuantity}
					aria-label='Increase quantity'
				>
					+
				</button>
			</div>
		</section>
	);
}

export default Quantity;
