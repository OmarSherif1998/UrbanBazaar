/** @format */

function Services({ Title, Subtitle, path }) {
	return (
		<div className='flex flex-col h-52 w-80 items-center bg-whote p-5 border rounded-lg bg-white'>
			<svg
				width='60'
				height='60'
				viewBox='0 0 60 50'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path d={path} fill='crimson'></path> {/* Complementary orange */}
			</svg>

			<h1 className='text-lg font-bold flex flex-col text-center text-red-700'>
				{Title}
				<span className='text-sm font-normal text-red-800'> {Subtitle}</span>
			</h1>
		</div>
	);
}

export default Services;
