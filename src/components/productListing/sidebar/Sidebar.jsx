/** @format */

import React from 'react';
import Stars from './Stars';
import Category from './Category';
import Price from './Price';

function Sidebar({
	priceSort,
	selectedCategory,
	StarRating,
	onFilterChange,
	onClose,
	category,
}) {
	const handlePriceSort = (sort) => {
		onFilterChange(sort, selectedCategory, StarRating);
	};

	const handleCategoryChange = (category) => {
		onFilterChange(priceSort, category, StarRating);
	};

	return (
		<div className='h-screen p-6 border-gray-100 border rounded-2xl '>
			<button
				onClick={onClose}
				className='p-2 bg-gray-100 rounded-lg sm:hidden'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-5 w-5 text-gray-800'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M6 18L18 6M6 6l12 12'
					/>
				</svg>
			</button>

			<h2 className='text-xl font-bold mb-6'>Filters</h2>

			<Price priceSort={priceSort} handlePriceSort={handlePriceSort} />

			{/* <div className='border-b  py-2  mb-5'></div> */}

			<div>
				<Stars StarRating={StarRating} onFilterChange={onFilterChange} />
			</div>

			{category === 'All' ? (
				<Category
					selectedCategory={selectedCategory}
					handleCategoryChange={handleCategoryChange}
				/>
			) : null}
		</div>
	);
}

export default Sidebar;
