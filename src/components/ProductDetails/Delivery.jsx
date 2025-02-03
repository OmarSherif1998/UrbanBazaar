/** @format */

import React from 'react';

function Delivery({ setDeliveryOption, deliveryOption }) {
	const deliveryInfo = {
		Standard: {
			name: 'Standard Delivery',
			arrival: '2-4 business days',
			returnPolicy: '14-day return policy',
			extraCharge: 'No extra charge',
			returnFees: 'No return fees',
			icon: '🚚',
			bgColor: 'bg-blue-50',
			textColor: 'text-blue-700',
			borderColor: 'border-blue-500',
		},
		UrbanPlus: {
			name: 'Urban PLUS Delivery',
			arrival: '1-2 business days',
			returnPolicy: '30-day return policy',
			extraCharge: '$10 extra charge',
			returnFees: 'No return fees',
			icon: '🚀',
			bgColor: 'bg-purple-50',
			textColor: 'text-purple-700',
			borderColor: 'border-purple-500',
		},
	};

	return (
		<div className='w-full flex flex-col  gap-5 mt-6'>
			{Object.entries(deliveryInfo).map(([key, info]) => (
				<div
					key={key}
					className={`cursor-pointer w-full sm:w-1/2 p-6 rounded-xl border shadow-md transition-all ${
						deliveryOption === key
							? `${info.borderColor} border-2 scale-105`
							: 'border-gray-300'
					} ${info.bgColor}`}
					onClick={() => setDeliveryOption(key)}
				>
					<div className='flex items-center mb-4'>
						<span className='lg:text-3xl mr-3'>{info.icon}</span>
						<h2 className={`text-xl sm:text-2xl font-bold ${info.textColor}`}>
							{info.name}
						</h2>
					</div>
					<div className='space-y-2 sm:space-y-3 text-sm md:text-base'>
						<p className='flex items-center'>
							<span className='lg:font-medium mr-2'>📦 Time of Arrival:</span>{' '}
							{info.arrival}
						</p>
						<p className='flex items-center'>
							<span className='font-medium mr-2'>📄 Return Policy:</span>{' '}
							{info.returnPolicy}
						</p>
						<p className='flex items-center'>
							<span className='lg:font-medium mr-2'>💳 Extra Charge:</span>{' '}
							{info.extraCharge}
						</p>
						<p className='flex items-center'>
							<span className='font-medium mr-2'>🔄 Return Fees:</span>{' '}
							{info.returnFees}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default Delivery;
