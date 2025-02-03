/** @format */

import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
function FavItems({ _id }) {
	const fav = JSON.parse(localStorage.getItem(`savedItems${_id}`)) || [];
	const navigate = useNavigate();
	return (
		<div>
			<button
				onClick={() => navigate('/savedItems')}
				className='flex text-lg items-center border font-semibold gap-3 bg-white w-fit px-5 py-2 cursor-pointer'
			>
				<FavoriteIcon sx={{ color: 'red' }} /> Saved items{' '}
				{fav.length > 0 ? <p>({fav.length})</p> : <p> (0) </p>}
			</button>
		</div>
	);
}

export default FavItems;
