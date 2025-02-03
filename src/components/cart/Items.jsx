/** @format */

import React from 'react';
import Header from './Header';
import Actions from './Actions';

function Items({ products, user }) {
	return (
		<div className='p-6 bg-white shadow-lg rounded-xl border border-gray-100'>
			{/* Header */}

			<Header />

			{/* Cart Title and Price Headers */}

			{/* Cart Items or Empty Cart Message */}
			{products.length === 0 ? (
				<p className='text-gray-600'>Your cart is empty.</p>
			) : (
				<div className='space-y-6 w-full'>
					{products.map((product, idx) => (
						<div
							key={idx}
							className='flex flex-col sm:flex-row justify-between p-4 bg-white shadow-sm hover:shadow-md transition-all duration-200 rounded-lg'
						>
							{/* Product Image */}
							<img
								src={product.Pic}
								alt={product.Name}
								className='w-24 h-24 sm:w-36 sm:h-36 object-contain rounded-lg mx-auto sm:mx-0'
							/>

							{/* Product Details */}
							<div className='flex flex-col sm:flex-row justify-between w-full mt-4 sm:mt-0 sm:ml-6'>
								{/* Left Section */}
								<section className='flex flex-col gap-3 sm:gap-5 justify-around pr-4 flex-1'>
									<h2 className='text-lg font-semibold text-center sm:text-left'>
										{product.Name}
									</h2>
									<h2 className='font-semibold text-gray-700 text-center sm:text-left'>
										Size: {product.Size}
									</h2>
									<Actions
										Quantity={product.Quantity}
										_id={product._id}
										user={user}
									/>
								</section>

								{/* Right Section */}
								<section className='flex justify-between items-center sm:pl-4 sm:w-[40%] mt-4 sm:mt-0'>
									<p className='text-gray-800 font-semibold'>
										${product.Price.toFixed(2)}
									</p>
									<p className='text-gray-800 font-semibold'>
										{product.Quantity}
									</p>
									<p className='text-gray-800 font-semibold'>
										${(product.Price.toFixed(2) * product.Quantity).toFixed(2)}
									</p>
								</section>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default Items;
