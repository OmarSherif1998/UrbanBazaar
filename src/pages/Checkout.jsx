/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/userSlice';
import NoCheckout from '../components/checkout/NoCheckout';
import Receipt from '../components/checkout/Receipt';

function Checkout() {
	const user = useSelector(selectUser);
	const order = JSON.parse(localStorage.getItem(`checkout${user.id}`)) || [];
	return (
		<div className='py-5'>
			{!order || (Array.isArray(order) && order.length === 0) ? (
				<NoCheckout />
			) : (
				<Receipt order={order} />
			)}
		</div>
	);
}

export default Checkout;
