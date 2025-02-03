/** @format */

function Header({ title, subtitle }) {
	return (
		<section className='text-center mb-5'>
			<p className='text-3xl font-GreatVibes text-red-800'>{title}</p>
			<p className=' text-gray-600 font-sans'>{subtitle}</p>
		</section>
	);
}

export default Header;
