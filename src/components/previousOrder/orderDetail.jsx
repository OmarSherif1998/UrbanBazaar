import React from 'react'

function orderDetail() {
  return (
			{prevOrders.map((order, idx) => (
					<div
						key={idx}
						className='mb-6 p-5 border border-gray-200 rounded-lg shadow-lg'
					>
						<div className='flex justify-between items-center mb-3'>
							<h3 className='text-xl font-semibold'>{order.delivery}</h3>
							<span className='text-sm text-gray-500'>{order.date}</span>
						</div>
						<div className='flex justify-between mb-3'>
							<p className='text-md'>Payment Method: {order.payment}</p>
						</div>

						{/* Render Cart Items */}
						<div className='mb-6'>
							<h4 className='font-semibold text-xl text-gray-800 mb-3'>
								Cart Details
							</h4>
							<ul className='space-y-4'>
								{Object.values(order.cart).map((item, index) => (
									<li
										key={index}
										className='flex justify-between items-center w-[25%]  hover:bg-gray-200 transition-colors duration-200'
									>
										<span className='text-gray-700 font-medium'>
											{item.Name}
										</span>
										<span className='text-gray-500'>{item.Quantity}</span>
										<span className='text-gray-800 font-semibold'>
											${item.Price}
										</span>
									</li>
								))}
							</ul>
						</div>

						<div>
							<h4 className='font-semibold text-lg'>Billing Information:</h4>
							<p>{order.billingInfo.city}</p>
							<p>{order.billingInfo.street}</p>
							<p>{order.billingInfo.zipcode}</p>
						</div>
					</div>
				))}
	);
}

export default orderDetail