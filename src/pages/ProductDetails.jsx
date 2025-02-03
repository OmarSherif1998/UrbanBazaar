/** @format */

import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { addToCart } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import WishList from '../components/ProductDetails/WishList';
import Colors from '../components/ProductDetails/Colors';
import Quantity from '../components/ProductDetails/Quantity';
import Rating from '../components/ProductDetails/Rating';
import Info from '../components/ProductDetails/Info';
import Price from '../components/ProductDetails/Price';
import Img from '../components/ProductDetails/Img';
import SizePicker from '../components/ProductDetails/SizePicker';

function ProductDetails() {
	const sizes = ['S', 'M', 'L', 'XL'];

	const location = useLocation();
	const navigate = useNavigate();
	const product = location.state;
	console.log(product);
	const user = JSON.parse(localStorage.getItem('loggedInUser'));

	const [selectedColor, setSelectedColor] = useState('Black');
	const [quantity, setQuantity] = useState(1);
	const [selectedSize, setSelectedSize] = useState('S');
	const dispatch = useDispatch();

	const increaseQuantity = () => setQuantity((prev) => prev + 1);
	const decreaseQuantity = () =>
		setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

	const handleSizeChange = (size) => {
		setSelectedSize(size);
	};
	const handleNavigate = () => {
		navigate(-1);
	};
	const handleCart = () => {
		console.log(selectedColor);
		const order = {
			_id: crypto.randomUUID(),
			Name: product.title,
			Pic: product.image,
			Price: product.price,
			Color: selectedColor,
			Size: selectedSize,
			Quantity: quantity,
		};

		const cartKey = `userCart${user.id}`;

		const cart = JSON.parse(localStorage.getItem(cartKey)) || [];

		const existingItemIndex = cart.findIndex(
			(item) =>
				item._id === order._id &&
				item.Color === order.Color &&
				item.Size === order.Size,
		);

		if (existingItemIndex !== -1) {
			cart[existingItemIndex].Quantity += 1;
		} else {
			cart.push(order);
		}

		localStorage.setItem(cartKey, JSON.stringify(cart));
		dispatch(addToCart(order));
	};
	if (!product)
		return <p className='text-center text-lg'>Product not found.</p>;
	return (
		<div className='max-w-9xl p-5 '>
			<button
				onClick={handleNavigate}
				className='w-fit mb-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition'
			>
				Back to Products
			</button>
			<div className='flex flex-col md:flex-row border border-gray-200 bg-white  rounded-lg p-6 w-full'>
				<Img title={product.title} image={product.image} />
				<div className='w-full md:w-1/2 flex flex-col gap-4 h-screen p-5 '>
					<Info title={product.title} description={product.description} />
					<Price price={product.price} />
					<Rating rate={product.rating.rate} count={product.rating.count} />
					<WishList
						_id={user.id}
						item_id={product.id}
						item_pic={product.image}
						title={product.title}
					/>
					<Colors
						selectedColor={selectedColor}
						setSelectedColor={setSelectedColor}
					/>
					<Quantity
						decreaseQuantity={decreaseQuantity}
						quantity={quantity}
						increaseQuantity={increaseQuantity}
					/>
					<SizePicker sizes={sizes} onSizeChange={handleSizeChange} />

					<button
						onClick={handleCart}
						className='mt-4 px-6 py-3 bg-gray-950 text-white font-semibold rounded-lg cursor-pointer hover:bg-gray-600 transition'
					>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductDetails;
