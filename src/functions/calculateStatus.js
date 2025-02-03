/** @format */

const calculateStatus = (arrivesOn) => {
	const currentDate = new Date();
	const arrivalDate = new Date(arrivesOn);
	return currentDate > arrivalDate ? 'Delivered' : 'Out for Delivery';
};
export default calculateStatus;
