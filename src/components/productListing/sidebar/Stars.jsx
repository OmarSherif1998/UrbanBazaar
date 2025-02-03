/** @format */

import React, { useState } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

function Stars({ StarRating, onFilterChange }) {
	const [hovered, setHovered] = useState(null); // To track the hovered star

	const handleMouseEnter = (index) => {
		setHovered(index); // Set hovered star index
	};

	const handleMouseLeave = () => {
		setHovered(null); // Reset hovered star
	};

	const handleClick = (index) => {
		onFilterChange('', '', index);
	};

	return (
		<div className='border-gray-100 border rounded-lg p-5'>
			<h3 className='text-lg font-semibold mb-3 '>Sort by rating</h3>
			<div className='flex'>
				{/* Render 5 stars */}
				{Array.from({ length: 5 }, (_, index) => {
					// Determine whether the current star is filled or empty
					const isFilled =
						hovered !== null ? index <= hovered : index <= StarRating;
					return (
						<div
							key={index}
							onMouseEnter={() => handleMouseEnter(index)} // Hover enter
							onMouseLeave={handleMouseLeave} // Hover leave
							onClick={() => handleClick(index)} // Click
							className='cursor-pointer'
						>
							{isFilled ? (
								<StarIcon className='text-yellow-200 ' fontSize='medium' />
							) : (
								<StarBorderIcon
									className='text-yellow-200 '
									fontSize='medium'
								/>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Stars;
