/** @format */

import React from 'react';

function Price({ price }) {
	return (
		<p className='flex items-center gap-3 text-5xl font-bold text-gray-800'>
			$ {price}{' '}
			<span className='text-xs font-normal text-gray-300'>VAT excluded</span>
		</p>
	);
}

export default Price;
