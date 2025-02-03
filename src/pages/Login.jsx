/** @format */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormFooter from '../utils/FormFooter';
import Header from '../utils/Header';
import FormNav from '../utils/FormNav';
import TextInput from '../utils/TextInput';
import PasswordInput from '../utils/PasswordInput';
import { useDispatch } from 'react-redux';
import { login } from '../store/userSlice';
import bcrypt from 'bcryptjs';
import apiCall from '../api/apiCall';
import { loginURL } from '../routes/URLS';
import fetchUsers from '../functions/fetchUsers';
import fetchUserData from '../functions/fetchUserData';

function Login() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [error, setError] = useState(null);
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			// Login API call
			const loginResponse = await apiCall(
				loginURL,
				'POST',
				JSON.stringify(formData),
			);

			if (loginResponse.status === 401 || loginResponse.status === 404) {
				setError(loginResponse.data);
				return; // Early exit if there's an error
			}

			// If login successful, store the token in localStorage
			if (loginResponse.token) {
				localStorage.setItem('authToken', loginResponse.token);
			} else {
				throw new Error('No token received from API');
			}

			// Only fetch users if userMapping doesn't exist in localStorage
			if (!localStorage.getItem('userMapping')) {
				await fetchUsers();
			}

			// Fetch user data based on the username
			const user = await fetchUserData(formData.username);
			// Store logged-in user in localStorage
			localStorage.setItem('loggedInUser', JSON.stringify(user));

			// Dispatch login action to Redux
			dispatch(login({ user, authToken: loginResponse.token }));

			// Navigate to the home page
			navigate('/home');
		} catch (error) {
			console.error('Login failed:', error.message || error);
		}
	};

	return (
		<div className='min-h-screen '>
			<FormNav />

			<div className='py-12'>
				<div className='max-w-md mx-auto bg-white p-8  rounded-xl shadow-sm'>
					<Header title={'Welcome Back'} subtitle={'Sign in to Urban Bazaar'} />
					<form className='space-y-6'>
						<TextInput
							label={'Username'}
							inputName={'username'}
							value={formData.email}
							type='text'
							handleChange={handleChange}
							required
						/>
						<PasswordInput
							password={formData.password}
							handleChange={handleChange}
						/>

						<div className='flex items-center justify-between'>
							<div className='flex items-center'>
								<input
									id='remember-me'
									name='remember-me'
									type='checkbox'
									className='h-4 w-4 text-red-600  border-gray-300 rounded  hover:cursor-pointer'
									autoFocus
								/>
								<label
									htmlFor='remember-me'
									className='ml-2 block text-sm text-gray-900'
								>
									Remember me
								</label>
							</div>

							<div className='text-sm'>
								<a className='font-medium text-red-600 hover:text-red-500 hover:cursor-pointer'>
									Forgot password?
								</a>
							</div>
						</div>

						<button
							type='submit'
							className='w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors font-medium'
							onClick={handleSubmit}
						>
							Sign in
						</button>
						{error && <div className='text-red-500 mb-4'>{error}</div>}
					</form>
					<FormFooter />
				</div>
			</div>
		</div>
	);
}

export default Login;
