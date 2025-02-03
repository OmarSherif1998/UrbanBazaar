/** @format */

import React from 'react';
import ColorCircle from './ColorCircle';

function Colors({ selectedColor, setSelectedColor }) {
	const colors = [
		{ color: 'red', bg: 'bg-red-700' },
		{ color: 'blue', bg: 'bg-blue-700' },
		{ color: 'green', bg: 'bg-green-700' },
		{ color: 'yellow', bg: 'bg-yellow-700' },
		{ color: 'purple', bg: 'bg-purple-700' },
		{ color: 'orange', bg: 'bg-orange-700' },
	];
	return (
		<div>
			{' '}
			<section className='flex gap-5'>
				<h1 className='text-2xl font-medium text-gray-700'>Colors</h1>
				<ul className='flex gap-2 items-center'>
					{colors.map((col, idx) => (
						<li key={idx}>
							<ColorCircle
								bg={col.bg}
								isSelected={selectedColor === col.color}
								onSelect={() => setSelectedColor(col.color)}
							/>
						</li>
					))}
				</ul>
			</section>
		</div>
	);
}

export default Colors;
