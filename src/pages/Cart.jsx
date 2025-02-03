/** @format */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../store/userSlice';
import { clearCart, selectCart } from '../store/cartSlice';
import Items from '../components/cart/Items';
import Summary from '../components/cart/Summary';
import FavItems from '../components/cart/FavItems';
import Delivery from '../components/ProductDetails/Delivery';
import BillingInfo from '../components/cart/BillingInfo/BillingInfo';
import PaymentOption from '../components/cart/PaymentOption';

function Cart() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [sortedBy, SetSortedBy] = useState('Price');
	const [selectedPayment, setSelectedPayment] = useState('credit');
	const [deliveryOption, setDeliveryOption] = useState('Standard');
	const cart = useSelector(selectCart);
	const [step, setStep] = useState(1); // Step 1 = Items, Step 2 = Delivery, Step 3 = Billing, Step 4 = Checkout
	const date = new Date();
	const formattedDate =
		date.getDate() + ' - ' + (date.getMonth() + 1) + ' - ' + date.getFullYear();
	const [totalSum, setTotalSum] = useState(0);
	const handleProceed = () => {
		if (step + 1 < 5) {
			setStep(step + 1);
		} else if (step + 1 === 5) {
			const orderInfo = {
				delivery: deliveryOption,
				date: formattedDate,
				payment: selectedPayment,
				cart: { ...cart },
				billingInfo: { ...user.address },
				total: totalSum,
			};

			dispatch(clearCart({ userId: user.id }));
			let orders;
			try {
				orders =
					JSON.parse(localStorage.getItem(`previousOrders${user.id}`)) || [];
			} catch (error) {
				console.error('Error parsing previous orders:', error);
				orders = []; // Fallback to an empty array
			}

			orders.push(orderInfo);
			localStorage.setItem(`previousOrders${user.id}`, JSON.stringify(orders));
			localStorage.setItem(`checkout${user.id}`, JSON.stringify(orderInfo));
			navigate('/checkout');
		}
	};

	const handleBack = () => {
		if (step > 1) setStep(step - 1);
		if (step === 1) navigate(-1);
	};

	return (
		<div className='flex flex-col lg:flex-row justify-center items-center p-5 w-full border border-gray-100 mt-5 gap-5'>
			<section className='w-full lg:w-[60%] flex flex-col gap-5 px-5'>
				<div className='w-full flex items-start'>
					<button
						className='px-7 py-2 bg-gray-800 text-white rounded-lg shadow-lg border border-gray-300 hover:bg-gray-700 hover:scale-105 transform transition-all duration-300'
						onClick={handleBack}
					>
						Back
					</button>
				</div>

				{step === 1 && (
					<>
						<FavItems _id={user.id} />
						<Items products={cart} user={user} />
					</>
				)}
				{step === 2 && (
					<Delivery
						setDeliveryOption={setDeliveryOption}
						deliveryOption={deliveryOption}
					/>
				)}
				{step === 3 && <BillingInfo billingInfo={user} />}
				{step === 4 && (
					<PaymentOption
						selectedPayment={selectedPayment}
						setSelectedPayment={setSelectedPayment}
					/>
				)}
			</section>

			<section className='w-full lg:w-[40%] lg:mt-0 mt-10'>
				<Summary
					products={cart}
					step={step}
					handleProceed={handleProceed}
					deliveryOption={deliveryOption}
					setTotalSum={setTotalSum}
				/>
			</section>
		</div>
	);
}

export default Cart;
