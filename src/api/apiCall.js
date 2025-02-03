/** @format */

// api.js

import axios from 'axios';

const apiCall = async (url, method = 'GET', data = null, headers = {}) => {
	try {
		const config = {
			method,
			url,
			headers: {
				'Content-Type': 'application/json',
				...headers,
			},
			data, // Only include data if method is POST/PUT
		};

		const response = await axios(config);
		return response.data;
	} catch (error) {
		// Axios provides error response in error.response
		if (error.response) {
			// Log the specific error response and message

			console.error('API call error response:', error.response.data);
			console.error('Error status:', error.response.status);
			return error.response;
		} else if (error.request) {
			// Handle when the request was made but no response was received
			console.error('No response received:', error.request);
		} else {
			// Handle any other errors (like setup issues)
			console.error('Error in API setup:', error.message);
		}

		throw error; // Rethrow the error to be handled by the calling function
	}
};

export default apiCall;
