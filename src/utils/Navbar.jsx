/** @format */

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Logo from './Logo';
import { useSelector } from 'react-redux';
import { selectCart } from '../store/cartSlice';
import MobileMenu from '../components/navbar/MobileMenu';
import DesktopMenu from '../components/navbar/DesktopMenu';
import AccountMenu from '../components/navbar/AccountMenu';

function Navbar() {
	const navigate = useNavigate();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
	const cart = useSelector(selectCart);

	const handleCartClick = () => {
		navigate('/cart');
	};
	const handleHeartClick = () => {
		navigate('/savedItems');
	};
	const handleMenuClick = (path) => {
		navigate(`/${path}`);
	};

	return (
		<nav className='flex items-center  justify-between p-5 mb-10 border-b border-gray-100'>
			<DesktopMenu handleMenuClick={handleMenuClick} />
			<div className=' flex justify-center md:justify-start'>
				<Logo className='h-8' />
			</div>

			<div className='flex items-center gap-4 '>
				<div className='relative cursor-pointer mb-1' onClick={handleCartClick}>
					<ShoppingBagOutlinedIcon className='text-gray-700 hover:text-gray-900' />
					{cart.length > 0 && (
						<span className='absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1  rounded-full'>
							{cart.length}
						</span>
					)}
				</div>
				<FavoriteBorderOutlinedIcon
					onClick={handleHeartClick}
					className='text-gray-700 cursor-pointer hover:text-gray-900 hidden md:block'
				/>
				<section>
					<PersonOutlineOutlinedIcon
						onClick={() => setIsAccountMenuOpen((prev) => !prev)}
						className='text-gray-700 cursor-pointer hover:text-gray-900 hidden md:block'
					/>
					<AccountMenu
						isAccountMenuOpen={isAccountMenuOpen}
						setIsAccountMenuOpen={setIsAccountMenuOpen}
					/>
				</section>
			</div>
			<MobileMenu
				setIsMenuOpen={setIsMenuOpen}
				isMenuOpen={isMenuOpen}
				handleMenuClick={handleMenuClick}
			/>
		</nav>
	);
}

export default Navbar;
