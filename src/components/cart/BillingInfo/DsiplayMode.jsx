/** @format */

import React from 'react';

function DsiplayMode({ formData, toggleEditMode }) {
	return (
		<div className='space-y-4'>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
				<div>
					<p className='text-sm text-gray-600'>First Name</p>
					<p className='font-medium text-gray-900'>
						{formData.name.firstname || 'N/A'}
					</p>
				</div>
				<div>
					<p className='text-sm text-gray-600'>Last Name</p>
					<p className='font-medium text-gray-900'>
						{formData.name.lastname || 'N/A'}
					</p>
				</div>
			</div>

			<div>
				<p className='text-sm text-gray-600'>Email</p>
				<p className='font-medium text-gray-900'>{formData.email || 'N/A'}</p>
			</div>

			<div>
				<p className='text-sm text-gray-600'>Phone</p>
				<p className='font-medium text-gray-900'>{formData.phone || 'N/A'}</p>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
				<div>
					<p className='text-sm text-gray-600'>Street</p>
					<p className='font-medium text-gray-900'>
						{formData.address.street || 'N/A'}
					</p>
				</div>
				<div>
					<p className='text-sm text-gray-600'>City</p>
					<p className='font-medium text-gray-900'>
						{formData.address.city || 'N/A'}
					</p>
				</div>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
				<div>
					<p className='text-sm text-gray-600'>Zipcode</p>
					<p className='font-medium text-gray-900'>
						{formData.address.zipcode || 'N/A'}
					</p>
				</div>
				<div>
					<p className='text-sm text-gray-600'>Number</p>
					<p className='font-medium text-gray-900'>
						{formData.address.number || 'N/A'}
					</p>
				</div>
			</div>

			<button
				onClick={toggleEditMode}
				className='mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'
			>
				Edit Billing Info
			</button>
		</div>
	);
}

export default DsiplayMode;
