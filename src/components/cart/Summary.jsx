/** @format */

import React from 'react';

function Summary({
	products,
	step,
	handleProceed,
	deliveryOption,
	setTotalSum,
}) {
	const butttonText = [
		{ step: 1, name: 'Delivery Options' },
		{ step: 2, name: 'Billing Info' },
		{ step: 3, name: 'Payment Options' },
		{ step: 4, name: 'Checkout' },
		// { step: 5, name: 'test' },
	];
	const subTotalPrice = products.reduce(
		(total, product) => total + product.Price * product.Quantity,
		0,
	);
	setTotalSum(subTotalPrice);
	const ShippingType = products.some(
		(product) => deliveryOption === 'UrbanPlus',
	)
		? 'UrbanPlus'
		: 'Standard';
	const Shipping = ShippingType === 'UrbanPlus' ? 20 : 5;
	const Tax = subTotalPrice * 0.14;

	return (
		<div>
			{products.length > 0 && (
				<div className='w-full mt-6 p-6 bg-white shadow-lg rounded-xl border border-gray-100'>
					<h2 className='text-2xl font-bold mb-6 text-gray-800'>
						Order Summary
					</h2>

					{/* Summary Details */}
					<div className='space-y-4'>
						{/* Sub-total */}
						<div className='flex justify-between text-lg text-gray-700'>
							<p>Sub-total</p>
							<p className='font-semibold'>{subTotalPrice.toFixed(2)} $</p>
						</div>

						{/* Shipping */}
						<div className='flex justify-between text-lg text-gray-700'>
							<p>{ShippingType} Shipping</p>
							<p className='font-semibold'>{Shipping} $</p>
						</div>

						{/* VAT */}
						<div className='flex justify-between text-lg text-gray-700'>
							<p>VAT</p>
							<p className='font-semibold'>{Tax.toFixed(2)} $</p>
						</div>
					</div>

					<div className='border-t border-gray-200 my-6'></div>

					<div className='flex justify-between text-xl font-bold text-gray-900'>
						<p>Total</p>
						<p>{(subTotalPrice + Shipping + Tax).toFixed(2)} $</p>
					</div>

					<button
						onClick={handleProceed}
						className='w-full cursor-pointer mt-6 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-md hover:shadow-lg'
					>
						{butttonText[step - 1].name}
					</button>
				</div>
			)}
		</div>
	);
}

export default Summary;
