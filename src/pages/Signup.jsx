/** @format */

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';
import FormNav from '../utils/FormNav';
import Header from '../utils/Header';
import TextInput from '../utils/TextInput';
import PasswordInput from '../utils/PasswordInput';
import FormFooter from '../utils/FormFooter';
import bcrypt from 'bcryptjs';

function Signup() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [error, setError] = useState(null);
	const [formData, setFormData] = useState({
		firstname: '',
		lastname: '',
		email: '',
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
		const hashedPassword = bcrypt.hashSync(formData.password, 10);
		const userData = {
			firstname: formData.firstname,
			lastname: formData.lastname,
			email: formData.email,
			password: hashedPassword,
			authToken: true,
		};

		const users = JSON.parse(localStorage.getItem('users')) || [];
		const userExists = users.find((user) => user.email === userData.email);
		if (userExists) {
			setError('User already exists');
			return;
		}
		users.push(userData);
		dispatch(login({ user: userData, authToken: true }));
		localStorage.setItem('users', JSON.stringify(users));
		navigate('/home');
	};

	return (
		<div className='min-h-screen bg-gray-950  '>
			<FormNav />

			<div className='max-w-md mx-auto p-5 bg-white rounded-lg shadow-md'>
				<Header title={'Sign up'} subtitle={'Style that speaks for itself'} />

				<form onSubmit={handleSubmit} className='space-y-4 '>
					<TextInput
						label={'First Name'}
						inputName={'firstname'}
						type={'text'}
						handleChange={handleChange}
						value={formData.username}
					/>
					<TextInput
						label={'Last Name'}
						inputName={'lastname'}
						type={'text'}
						handleChange={handleChange}
						value={formData.username}
					/>
					<TextInput
						label={'Email'}
						inputName={'email'}
						type={'email'}
						handleChange={handleChange}
						value={formData.email}
					/>
					<PasswordInput
						password={formData.password}
						handleChange={handleChange}
					/>

					<button
						type='submit'
						className='w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors font-medium'
					>
						Sign Up
					</button>

					{error && <div className='text-red-500 mb-4'>{error}</div>}
				</form>

				<FormFooter />
			</div>
		</div>
	);
}

export default Signup;
