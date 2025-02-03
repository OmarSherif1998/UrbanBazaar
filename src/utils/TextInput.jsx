/** @format */

import React from 'react';

function TextInput({ label, inputName, handleChange, value, type }) {
	return (
		<div>
			<label
				htmlFor={inputName}
				className='block text-sm font-medium text-gray-700'
			>
				{label}
			</label>
			<input
				id={inputName}
				name={inputName}
				type={type}
				value={value}
				onChange={handleChange}
				required
				className='w-full px-4 py-2 border border-gray-300 rounded-lg '
				autoComplete='on'
			/>
		</div>
	);
}

export default TextInput;
