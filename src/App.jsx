/** @format */
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthToken, login } from './store/userSlice';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import TrackOrderBar from './utils/TrackOrderBar';
import Footer from './utils/Footer';
import ProductListing from './pages/ProductListing';
import Navbar from './utils/Navbar';
import ProductDetails from './pages/ProductDetails';
import fetchUsers from './functions/fetchUsers';
import SocialBar from './utils/SocialBar';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import PreviousOrders from './pages/PreviousOrders';
import CreateProduct from './pages/CreateProduct';
import SavedItems from './pages/SavedItems';
function App() {
	const dispatch = useDispatch();
	const authToken = useSelector(selectAuthToken);
	const location = useLocation();
	const path = location.pathname;
	useEffect(() => {
		const storedToken = localStorage.getItem('authToken');
		const userMapping = JSON.parse(localStorage.getItem('userMapping'));

		if (!userMapping) {
			fetchUsers();
		}

		if (storedToken && !authToken) {
			dispatch(login({ authToken: storedToken }));
		}
	}, [authToken, dispatch]);
	return (
		<div className='flex flex-col min-h-screen'>
			<div className='flex-grow'>
				{authToken ? (
					<div>
						{path === '/productDetails' ? null : <TrackOrderBar />}
						<Navbar />

						<Routes>
							<Route path='*' element={<Home />} />
							<Route path='/home' element={<Home />} />
							<Route path='/productListing' element={<ProductListing />} />
							<Route path='/productDetails' element={<ProductDetails />} />
							<Route path='/cart' element={<Cart />} />
							<Route path='/checkout' element={<Checkout />} />
							<Route path='/previousOrders' element={<PreviousOrders />} />
							<Route path='/createProduct' element={<CreateProduct />} />
							<Route path='/savedItems' element={<SavedItems />} />
						</Routes>
					</div>
				) : (
					<Routes>
						<Route path='*' element={<Login />} />
						<Route path='/signup' element={<Signup />} />
						<Route path='/' element={<Login />} />
					</Routes>
				)}
			</div>
			<SocialBar />
			<Footer />
		</div>
	);
}

export default App;
