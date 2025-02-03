/** @format */

import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/userSlice.js';
import { useNavigate } from 'react-router-dom';
function AccountMenu({ isAccountMenuOpen, setIsAccountMenuOpen }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleNavigation = () => {
		navigate('/previousOrders');
		setIsAccountMenuOpen((prev) => !prev);
	};
	const Logout = () => {
		dispatch(logout());
		navigate('/');
	};

	return (
		<>
			{isAccountMenuOpen && (
				<div className='absolute md:right-5 sm:right-50  border border-gray-200  w-[20%] bg-white border-b-10 cursor-pointer z-50  '>
					<button
						onClick={handleNavigation}
						className='block w-full text-left px-4 py-2 text-gray-800 font-semibold hover:bg-gray-100 cursor-pointer'
					>
						Previous Orders
					</button>
					<button
						onClick={Logout}
						className='block w-full text-left px-4 py-2 text-gray-800 font-semibold hover:bg-gray-100 cursor-pointer'
					>
						Logout
					</button>
				</div>
			)}
		</>
	);
}

export default AccountMenu;
