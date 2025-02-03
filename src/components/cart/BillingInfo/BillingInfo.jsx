/** @format */

import React, { useState } from 'react';
import EditMode from './EditMode';
import DsiplayMode from './DsiplayMode';

function BillingInfo({ billingInfo }) {
	// State to manage editable fields
	const [editMode, setEditMode] = useState(false);
	const [formData, setFormData] = useState({
		address: {
			city: billingInfo.address?.city || '',
			number: billingInfo.address?.number || '',
			street: billingInfo.address?.street || '',
			zipcode: billingInfo.address?.zipcode || '',
		},
		email: billingInfo.email || '',
		phone: billingInfo.phone || '',
		name: {
			firstname: billingInfo.name?.firstname || '',
			lastname: billingInfo.name?.lastname || '',
		},
	});

	// Toggle edit mode
	const toggleEditMode = () => {
		setEditMode(!editMode);
	};

	// Handle input changes
	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name.includes('.')) {
			const [parent, child] = name.split('.');
			setFormData((prev) => ({
				...prev,
				[parent]: {
					...prev[parent],
					[child]: value,
				},
			}));
		} else {
			setFormData((prev) => ({
				...prev,
				[name]: value,
			}));
		}
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Updated Billing Info:', formData);
		setEditMode(false); // Exit edit mode after saving
	};

	return (
		<div className='w-full mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-100'>
			<h2 className='text-2xl font-bold mb-6 text-gray-800'>
				Billing Information
			</h2>

			{editMode ? (
				<EditMode
					formData={formData}
					handleSubmit={handleSubmit}
					handleChange={handleChange}
					toggleEditMode={toggleEditMode}
				/>
			) : (
				<DsiplayMode formData={formData} toggleEditMode={toggleEditMode} />
			)}
		</div>
	);
}

export default BillingInfo;
