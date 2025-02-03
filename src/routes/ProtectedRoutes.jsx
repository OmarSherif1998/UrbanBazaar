/** @format */

// ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthToken } from '../store/userSlice'; // Assuming this is your selector for token

const ProtectedRoute = ({ authToken, children }) => {
	console.log(authToken);
	if (!authToken) {
		return <Navigate to='/' />;
	}

	return children;
};

export default ProtectedRoute;
