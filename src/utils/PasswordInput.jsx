/** @format */

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
function PasswordInput({ password, handleChange }) {
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};
	return (
		<div>
			<label
				htmlFor='password'
				className='block text-sm font-medium text-gray-700'
			>
				Password
			</label>
			<div className='relative'>
				<input
					id='password'
					name='password'
					type={showPassword ? 'text' : 'password'}
					value={password}
					onChange={handleChange}
					required
					className='w-full px-4 py-2 border border-gray-300 rounded-lg'
				/>
				<button
					type='button'
					onClick={togglePasswordVisibility}
					className='absolute inset-y-0 right-3 flex items-center text-gray-600 hover:cursor-pointer'
				>
					{showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
				</button>
			</div>
		</div>
	);
}

export default PasswordInput;
