/** @format */

import React from 'react';

function EditMode({ formData, handleSubmit, handleChange, toggleEditMode }) {
	return (
		<form onSubmit={handleSubmit} className='space-y-4'>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
				<div>
					<label className='block text-sm font-medium text-gray-700'>
						First Name
					</label>
					<input
						type='text'
						name='name.firstname'
						value={formData.name.firstname}
						onChange={handleChange}
						className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
				</div>
				<div>
					<label className='block text-sm font-medium text-gray-700'>
						Last Name
					</label>
					<input
						type='text'
						name='name.lastname'
						value={formData.name.lastname}
						onChange={handleChange}
						className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
				</div>
			</div>

			<div>
				<label className='block text-sm font-medium text-gray-700'>Email</label>
				<input
					type='email'
					name='email'
					value={formData.email}
					onChange={handleChange}
					className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
				/>
			</div>

			<div>
				<label className='block text-sm font-medium text-gray-700'>Phone</label>
				<input
					type='text'
					name='phone'
					value={formData.phone}
					onChange={handleChange}
					className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
				/>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
				<div>
					<label className='block text-sm font-medium text-gray-700'>
						Street
					</label>
					<input
						type='text'
						name='address.street'
						value={formData.address.street}
						onChange={handleChange}
						className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
				</div>
				<div>
					<label className='block text-sm font-medium text-gray-700'>
						City
					</label>
					<input
						type='text'
						name='address.city'
						value={formData.address.city}
						onChange={handleChange}
						className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
				</div>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
				<div>
					<label className='block text-sm font-medium text-gray-700'>
						Zipcode
					</label>
					<input
						type='text'
						name='address.zipcode'
						value={formData.address.zipcode}
						onChange={handleChange}
						className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
				</div>
				<div>
					<label className='block text-sm font-medium text-gray-700'>
						Number
					</label>
					<input
						type='text'
						name='address.number'
						value={formData.address.number}
						onChange={handleChange}
						className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
				</div>
			</div>

			<div className='flex justify-end space-x-4'>
				<button
					type='button'
					onClick={toggleEditMode}
					className='px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600'
				>
					Cancel
				</button>
				<button
					type='submit'
					className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'
				>
					Save Changes
				</button>
			</div>
		</form>
	);
}

export default EditMode;
