/** @format */

import React from 'react';

function Category({ selectedCategory, handleCategoryChange }) {
	return (
		<div>
			<h3 className='text-lg font-semibold mb-3'>Category</h3>
			<select
				value={selectedCategory}
				onChange={(e) => handleCategoryChange(e.target.value)}
				className='w-full p-2 border border-gray-200 rounded-lg'
			>
				<option value=''>All Categories</option>
				<option value='electronics'>Electronics</option>
				<option value='clothing'>Clothing</option>
				<option value='books'>Books</option>
			</select>
		</div>
	);
}

export default Category;
