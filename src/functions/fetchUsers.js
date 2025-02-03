/** @format */

import apiCall from '../api/apiCall';
import { UsersURL } from '../routes/URLS';

const fetchUsers = async () => {
	try {
		const users = await apiCall(UsersURL);
		const newUserMapping = users.reduce((acc, user) => {
			acc[user.username] = user.id; // map username to user ID
			return acc;
		}, {});

		localStorage.setItem('userMapping', JSON.stringify(newUserMapping));
	} catch (error) {
		console.error('Error fetching users:', error);
	}
};

export default fetchUsers;
