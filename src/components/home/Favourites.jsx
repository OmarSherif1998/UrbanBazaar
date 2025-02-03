/** @format */

function Favourites({ image }) {
	return (
		<div>
			<img
				src={image}
				alt='img'
				className='w-full cursor-pointer border-s rounded-lg'
			/>
		</div>
	);
}

export default Favourites;
