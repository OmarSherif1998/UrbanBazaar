/** @format */

function Cards({ image }) {
	return (
		<div className='shadow-sm cursor-pointer transform hover:scale-105  '>
			<img src={image} alt='' className='rounded-md w-3xl' />
		</div>
	);
}

export default Cards;
