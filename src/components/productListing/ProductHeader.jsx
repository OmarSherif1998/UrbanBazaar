/** @format */

function ProductHeader({ category }) {
	const mentitle = "MEN'S SECTION";
	const womentitle = "WOMEN'S SECTION";

	return (
		<div className='w-full flex justify-center items-center p-5 , h-[40vh] '>
			<h1
				className={`text-5xl md:text-6xl lg:text-9xl font-GlacialIndifference ${
					category === 'Men' ? 'text-red-700' : 'text-pink-700'
				}   text-outline`}
			>
				{category === 'Men' ? mentitle : womentitle}
			</h1>
		</div>
	);
}

export default ProductHeader;
