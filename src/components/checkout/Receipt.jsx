/** @format */

import React from 'react';

function Receipt({ order }) {
	const cart = order.cart;
	const cartArray = Object.values(cart);

	return (
		<div className='max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-100'>
			<h2 className='text-xl font-semibold text-gray-800 mb-4 text-center'>
				Order Receipt
			</h2>
			<div className='border-b pb-4 mb-4'>
				<p className='text-gray-600'>
					<strong>Date:</strong> {order.date}
				</p>
				<p className='text-gray-600'>
					<strong>Delivery:</strong> {order.delivery}
				</p>
				<p className='text-gray-600'>
					<strong>Payment:</strong> {order.payment}
				</p>
			</div>
			<div>
				<h3 className='text-lg font-medium text-gray-800 mb-2'>Billing Info</h3>
				<p className='text-gray-600'>
					{order.billingInfo.street}, {order.billingInfo.city},{' '}
					{order.billingInfo.zipcode}
				</p>
			</div>
			<div className='mt-4'>
				<h3 className='text-lg font-medium text-gray-800 mb-2'>Items</h3>
				{cartArray.map((item, idx) => (
					<div
						key={idx}
						className='flex justify-between items-center border-b py-2'
					>
						<div>
							<p className='text-gray-700 font-medium'>{item.Name}</p>
							<p className='text-sm text-gray-500'>
								Color: {item.Color}, Size: {item.Size}
							</p>
						</div>
						<div>
							<p className='text-gray-700 font-semibold'>
								${item.Price.toFixed(2)}
							</p>
							<p className='text-sm text-gray-500'>Qty: {item.Quantity}</p>
						</div>
					</div>
				))}
			</div>
			<div className='mt-6 text-right'>
				<h3 className='text-lg font-semibold text-gray-800'>
					Total: $
					{cartArray
						.reduce((total, item) => total + item.Price * item.Quantity, 0)
						.toFixed(2)}
				</h3>
			</div>
		</div>
	);
}

export default Receipt;
