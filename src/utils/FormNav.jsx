/** @format */
import { Link, useLocation } from 'react-router-dom';

function FormNav() {
	const location = useLocation();
	const path = location.pathname;
	return (
		<div>
			<nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5'>
				<div className='flex justify-between h-16 items-center'>
					<Link
						to='/'
						className={`text-4xl font-GreatVibes ${
							path === '/signup' ? 'text-white' : 'text-red-600'
						} font-semibold`}
					>
						Urban Bazaar
					</Link>

					{path === '/' ? (
						<Link
							to='/signup'
							className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-600 hover:bg-red-50 transition-colors'
						>
							Sign Up
						</Link>
					) : null}
				</div>
			</nav>
		</div>
	);
}

export default FormNav;
