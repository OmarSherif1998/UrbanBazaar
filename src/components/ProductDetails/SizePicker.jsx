/** @format */

import React, { useState } from 'react';

const SizePicker = ({ sizes, onSizeChange }) => {
	const [selectedSize, setSelectedSize] = useState(null);

	const handleSizeClick = (size) => {
		setSelectedSize(size);
		onSizeChange(size); //
	};

	return (
		<div className='flex gap-2'>
			{sizes.map((size) => (
				<button
					key={size}
					onClick={() => handleSizeClick(size)}
					className={`px-4 py-2 border cursor-pointer rounded-lg transition-all duration-200 ${
						selectedSize === size
							? 'bg-gray-800 text-white border-gray-800' // Selected style
							: 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100' // Default style
					}`}
				>
					{size}
				</button>
			))}
		</div>
	);
};

export default SizePicker;
