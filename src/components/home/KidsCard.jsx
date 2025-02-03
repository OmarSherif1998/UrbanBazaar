/** @format */

import kids from '../../assets/imgs/WinterHeros.webp';

function KidsCard() {
	return (
		<div className=' w-[95%] h-[90vh] '>
			<img
				className='w-full h-full bg-cover bg-no-repeat bg-center'
				style={{ backgroundImage: `url(${kids})` }}
			/>
		</div>
	);
}

export default KidsCard;
