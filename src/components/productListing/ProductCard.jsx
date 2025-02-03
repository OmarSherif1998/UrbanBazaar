/** @format */

import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate('/productDetails', { state: product });
	};

	return (
		<div
			onClick={handleNavigate}
			className='bg-white w-80 text-black border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:cursor-pointer'
		>
			<div
				className='h-80 bg-contain bg-no-repeat bg-center rounded-xl mb-6'
				style={{ backgroundImage: `url(${product.image})` }}
			></div>

			<div className='mt-4 border-t border-gray-100 pt-4'>
				<h2 className='text-xl font-bold truncate mb-2'>{product.title}</h2>
				<p className='text-gray-600 text-sm line-clamp-2 mb-4'>
					{product.description}
				</p>

				<div className='flex justify-between items-center'>
					<span className='text-black font-bold text-2xl'>
						${product.price}
					</span>

					<span className='bg-black text-white px-3 py-1 text-sm rounded-full flex items-center gap-1'>
						{product.rating.rate} ⭐ ({product.rating.count})
					</span>
				</div>

				<button
					onClick={handleNavigate}
					className='w-full bg-red-700 text-white font-semibold py-3 rounded-xl mt-6 hover:bg-red-600 cursor-pointer transition-colors duration-300'
				>
					View Details
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
