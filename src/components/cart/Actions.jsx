/** @format */

import React from 'react';
import { useDispatch } from 'react-redux';

import {
	DecreaseCartItem,
	IncreaseCartItem,
	removeFromCart,
} from '../../store/cartSlice';

function Actions({ _id, Quantity, user }) {
	const dispatch = useDispatch();
	const handleItem = (type) => {
		if (type === 'inc') {
			dispatch(IncreaseCartItem({ productId: _id, userId: user.id }));
		} else if (type === 'rem') {
			dispatch(removeFromCart({ productId: _id, userId: user.id }));
		} else {
			dispatch(DecreaseCartItem({ productId: _id, userId: user.id }));
		}
	};
	return (
		<div className='flex items-center gap-5   mt-4 sm:mt-0'>
			{/* Quantity Controls */}
			<div className='flex items-center border border-gray-200 rounded-lg'>
				<button
					className='w-8 h-8 flex items-center justify-center font-bold bg-gray-200 hover:bg-gray-300 rounded-l-lg cursor-pointer transition-all duration-200'
					onClick={() => handleItem('dec')}
				>
					-
				</button>
				<span className='w-8 h-8 flex items-center justify-center'>
					{Quantity}
				</span>
				<button
					className='w-8 h-8 flex items-center justify-center font-bold bg-gray-200 hover:bg-gray-300 rounded-r-lg cursor-pointer transition-all duration-200'
					onClick={() => handleItem('inc')}
				>
					+
				</button>
			</div>

			<button
				className='bg-red-500 px-4 py-2 text-white rounded-2xl transition-all duration-200 hover:bg-red-600 cursor-pointer'
				onClick={() => handleItem('rem')}
			>
				Remove
			</button>
		</div>
	);
}

export default Actions;
