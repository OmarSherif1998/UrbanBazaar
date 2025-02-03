/** @format */

import { Link } from 'react-router-dom';
function Logo() {
	return (
		<h1 className='text-5xl font-GreatVibes font-bold text-red-700'>
			<Link to='/home'>
				<h1>Urban Bazaar</h1>
			</Link>
		</h1>
	);
}

export default Logo;
