/** @format */

import React from 'react';

function Img({ image, title }) {
	return (
		<div className='w-full md:w-1/2 flex justify-center items-center h-screen  bg-gray-50'>
			<img
				src={image}
				alt={title}
				className='w-full h-auto max-h-[500px] object-contain rounded-lg '
			/>
		</div>
	);
}

export default Img;
