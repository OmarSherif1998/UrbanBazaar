/** @format */

import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
function Rating({ rate, count }) {
	return (
		<div className='flex items-center gap-2'>
			<span className='flex items-center  gap-1 text-yellow-500 text-lg'>
				{rate < 5 ? (
					<StarHalfOutlinedIcon sx={{ color: '#f3d00b' }} />
				) : (
					<StarOutlinedIcon sx={{ color: '#f3d00b' }} />
				)}{' '}
				{rate}
			</span>
			<span className='text-gray-500'>({count} reviews)</span>
		</div>
	);
}

export default Rating;
