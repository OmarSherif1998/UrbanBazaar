/** @format */

import { Link } from 'react-router-dom';

const CategoryHighlight = ({
	image,
	title,
	subtext,
	category,
	position = 'right',
}) => {
	return (
		<div
			className={`relative flex flex-col-reverse ${
				position === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'
			} items-center justify-between bg-gray-900 text-white  overflow-hidden h-[800px]`}
		>
			<div className='w-full md:w-1/2 flex flex-col justify-center items-start p-6 text-left'>
				<h2 className='text-4xl font-bold uppercase'>{title}</h2>
				<p className='text-gray-400 text-lg mt-2'>{subtext}</p>
				<Link
					to={`/category/${category}`}
					className='mt-4 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-full transition'
				>
					Shop Now
				</Link>
			</div>

			<div
				className='w-[45%]  h-[800px]  bg-cover bg-center '
				style={{ backgroundImage: `url(${image})` }}
			/>
		</div>
	);
};

export default CategoryHighlight;
