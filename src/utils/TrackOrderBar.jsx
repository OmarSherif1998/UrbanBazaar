/** @format */

import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { LocalShippingOutlined } from '@mui/icons-material';
function TrackOrderBar() {
	return (
		<div className='bg-gray-300 flex justify-between px-3 py-2'>
			<span className='flex gap-1 items-center hover:cursor-pointer '>
				<LocalShippingOutlined sx={{ color: 'gray' }} fontSize='small' />
				<h6 className='text-gray-400  text-xs hover:text-blue-700'>
					Track Order
				</h6>
			</span>
			<span className='text-gray-400 text-xs flex items-center gap-2'>
				<h6 className='text-blue-700'> English</h6>
				<h6>|</h6>
				<h6 className='hover:text-blue-700 hover:cursor-pointer'>عربي</h6>
			</span>
		</div>
	);
}

export default TrackOrderBar;
