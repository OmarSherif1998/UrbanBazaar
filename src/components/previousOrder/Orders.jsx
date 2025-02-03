/** @format */

import React, { useState } from 'react';
import calculateArrivesOn from '../../functions/calculateArrivalOn';
import calculateStatus from '../../functions/calculateStatus';

function Order({ prevOrders }) {
	const [expandedOrders, setExpandedOrders] = useState([]);

	const toggleOrderDetails = (index) => {
		if (expandedOrders.includes(index)) {
			// If the order is already expanded, collapse it
			setExpandedOrders(expandedOrders.filter((i) => i !== index));
		} else {
			// If the order is not expanded, expand it
			setExpandedOrders([...expandedOrders, index]);
		}
	};

	return (
		<div className='p-6'>
			<div className='bg-gray-900 border border-gray-800 rounded-xl p-6'>
				<h2 className='text-3xl font-bold text-white mb-6'>
					Your Orders: {prevOrders.length}
				</h2>

				{prevOrders.map((order, idx) => {
					// Declare minArrival, maxArrival, and status inside the map
					const { minArrival, maxArrival } = calculateArrivesOn(
						order.delivery,
						order.date,
					);
					const status = calculateStatus(minArrival);

					return (
						<div
							key={idx}
							className='mb-6 p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300'
						>
							{/* Order Summary */}
							<div className='flex justify-between items-start'>
								<section className='space-y-2'>
									<p className='text-lg font-semibold text-gray-300'>
										Order Placed
									</p>
									<p className='text-white'>{order.date}</p>
								</section>

								<section className='space-y-2'>
									<p className='text-lg font-semibold text-gray-300'>
										Delivery Type
									</p>
									<p className='text-white'>{order.delivery}</p>
								</section>

								<section className='space-y-2'>
									<p className='text-lg font-semibold text-gray-300'>
										Payment Type
									</p>
									<p className='text-white'>{order.payment}</p>
								</section>

								<button
									onClick={() => toggleOrderDetails(idx)}
									className='mt-3 px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all'
								>
									{expandedOrders.includes(idx)
										? 'Hide Details'
										: 'View Details'}
								</button>
							</div>

							{expandedOrders.includes(idx) && (
								<div className='mt-6 space-y-4'>
									<h4 className='text-xl font-semibold text-white'>
										Cart Details:
									</h4>
									<ul className='space-y-3'>
										{Object.values(order.cart).map((item, index) => (
											<li
												key={index}
												className='flex justify-between items-center py-2 px-4 bg-gray-700 rounded-md shadow-md'
											>
												<span className='text-gray-300'>{item.Name}</span>
												<span className='text-white'>${item.Price}</span>
											</li>
										))}
									</ul>
									<section className='flex flex-col'>
										<section className='mt-2 space-y-2'>
											<p className='text-lg font-semibold text-gray-300'>
												Status
											</p>
											<p
												className={`text-white ${
													status === 'Delivered'
														? 'text-green-500'
														: 'text-yellow-400'
												}`}
											>
												{status}
											</p>
										</section>

										{status === 'Delivered ' ? (
											<section className='mt-2 space-y-2'>
												<p className='text-lg font-semibold text-gray-300'>
													Delivered on
												</p>
												<p className='text-white'>{minArrival}</p>
											</section>
										) : (
											<section className='mt-4 space-y-2'>
												<p className='text-lg font-semibold text-gray-300'>
													Arrives on
												</p>
												<p className='text-white'>
													{minArrival} - {maxArrival}
												</p>
											</section>
										)}
									</section>

									<p className='text-xl font-semibold text-white'>
										Total:{' '}
										<span className='text-2xl text-yellow-400'>
											${order.total}
										</span>
									</p>
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Order;
