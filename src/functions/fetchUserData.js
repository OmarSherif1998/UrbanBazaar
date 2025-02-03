/** @format */

import apiCall from '../api/apiCall.js';
import getUserDataFromMapping from './getUserDataFromMapping.js';
const fetchUserData = async (username) => {
	const userId = getUserDataFromMapping(username);

	if (userId) {
		try {
			const user = await apiCall(`https://fakestoreapi.com/users/${userId}`);
			return user;
		} catch (error) {
			console.error('Error fetching user data:', error);
		}
	} else {
		console.error('User ID not found');
	}
};
export default fetchUserData;
