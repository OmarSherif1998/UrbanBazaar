/** @format */

import React from 'react';

function DesktopMenu({ handleMenuClick }) {
	return (
		<div className='hidden md:flex justify-between gap-5'>
			<button
				onClick={() => handleMenuClick('home')}
				className='text-gray-800 font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer'
			>
				Home
			</button>
			<button
				onClick={() => handleMenuClick('productListing?cat=Men')}
				className='text-gray-800 font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer'
			>
				Men
			</button>
			<button
				onClick={() => handleMenuClick('productListing?cat=Women')}
				className='text-gray-800 font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer'
			>
				Women
			</button>
		</div>
	);
}

export default DesktopMenu;
