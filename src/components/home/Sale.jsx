/** @format */

import React, { useState, useEffect } from 'react';

function Sale() {
	const [timeLeft, setTimeLeft] = useState(7200); // 2 hours in seconds

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	const formatTime = (seconds) => {
		const hours = Math.floor(seconds / 3600);
		const minutes = Math.floor((seconds % 3600) / 60);
		const secs = seconds % 60;
		return `${hours}h ${minutes}m ${secs}s`;
	};

	return (
		<div className='bg-gradient-to-r from-orange-400 to-orange-500 flex flex-col md:flex-row justify-between items-center py-8 px-6 md:px-12 space-y-6 md:space-y-0'>
			{/* Left Section */}
			<h1 className='text-3xl md:text-4xl font-bold text-white text-center md:text-left'>
				TODAY ONLY
			</h1>

			{/* Middle Section */}
			<section className='flex flex-col items-center space-y-2'>
				<h1 className='text-3xl md:text-4xl font-bold text-white text-center'>
					ENJOY 10% OFF AT CART
				</h1>
				<span className='text-white text-sm md:text-base opacity-90'>
					On selected products
				</span>
				<span className='text-white text-lg font-semibold'>
					Offer ends in: {formatTime(timeLeft)}
				</span>
			</section>

			{/* Right Section (Button) */}
			<button className='bg-white cursor-pointer text-orange-600 font-semibold py-3 px-8 rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl'>
				Shop Now
			</button>
		</div>
	);
}

export default Sale;
