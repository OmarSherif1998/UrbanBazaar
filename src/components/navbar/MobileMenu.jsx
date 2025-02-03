/** @format */

import MenuIcon from '@mui/icons-material/Menu';

function MobileMenu({ setIsMenuOpen, isMenuOpen, handleMenuClick }) {
	return (
		<div className='md:hidden '>
			<div>
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className='text-gray-800 focus:outline-none cursor-pointer'
				>
					<MenuIcon className='text-2xl' />
				</button>
			</div>
			{/* Mobile Menu (Hidden by default, shown on small screens) */}
			{isMenuOpen && (
				<div className='md:hidden absolute top-25 border border-gray-200 left-0 w-full bg-white border-b-10 cursor-pointer'>
					<button
						onClick={() => handleMenuClick('home')}
						className='block w-full text-left px-4 py-2 text-gray-800 font-semibold hover:bg-gray-100 cursor-pointer'
					>
						Home
					</button>
					<button
						onClick={() => handleMenuClick('productListing?cat=Men')}
						className='block w-full text-left px-4 py-2 text-gray-800 font-semibold hover:bg-gray-100 cursor-pointer'
					>
						Men
					</button>
					<button
						onClick={() => handleMenuClick('productListing?cat=Women')}
						className='block w-full text-left px-4 py-2 text-gray-800 font-semibold hover:bg-gray-100 cursor-pointer'
					>
						Women
					</button>
				</div>
			)}
		</div>
	);
}

export default MobileMenu;
