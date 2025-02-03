/** @format */

const getUserDataFromMapping = (username) => {
	const userMapping = JSON.parse(localStorage.getItem('userMapping'));

	if (userMapping && userMapping[username]) {
		return userMapping[username]; // Return the user ID
	} else {
		console.error('User not found in mapping');
		return null;
	}
};

export default getUserDataFromMapping;
