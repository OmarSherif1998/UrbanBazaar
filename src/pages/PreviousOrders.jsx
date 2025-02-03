/** @format */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/userSlice';
import { useEffect } from 'react';
import NotFound from '../utils/NotFound';
import Orders from '../components/previousOrder/Orders';
function PreviousOrders() {
	const user = useSelector(selectUser);
	const [prevOrders, setPrevOrders] = useState([]);
	useEffect(() => {
		const orders =
			JSON.parse(localStorage.getItem(`previousOrders${user.id}`)) || [];
		setPrevOrders(orders);
	}, []);

	return (
		<div>
			{prevOrders.length === 0 ? (
				<NotFound
					title='No Previous Orders Yet'
					navigation='/home'
					paragraph='Your previous orders will appear here once you have made a purchase. Start shopping now to fill your order history!'
					type='prevOrders'
				/>
			) : (
				<Orders prevOrders={prevOrders} />
			)}
		</div>
	);
}

export default PreviousOrders;
