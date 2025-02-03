/** @format */

import formatDate from './formatDate';

const calculateArrivesOn = (deliveryType, orderDate) => {
	const formattedDate = orderDate.split(' - ').reverse().join('-');
	const date = new Date(formattedDate);
	console.log(date);
	let minDays, maxDays;

	if (deliveryType === 'Standard') {
		minDays = 2;
		maxDays = 4;
	} else if (deliveryType === 'UrbanPlus') {
		minDays = 1;
		maxDays = 2;
	}

	const minArrivalDate = new Date(date.setDate(date.getDate() + minDays));
	const maxArrivalDate = new Date(date.setDate(date.getDate() + maxDays));
	return {
		minArrival: formatDate(minArrivalDate),
		maxArrival: formatDate(maxArrivalDate),
	};
};
export default calculateArrivesOn;
