/** @format */

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MenProducts, WomenProducts } from '../routes/URLS';
import ProductCard from '../components/productListing/ProductCard';
import ProductHeader from '../components/productListing/ProductHeader';
import getProducts from '../functions/getProducts.js';
import Loading from '../components/productListing/Loading.jsx';
import Sidebar from '../components/productListing/sidebar/Sidebar.jsx';

function ProductListing() {
	const location = useLocation();
	const section = new URLSearchParams(location.search);
	const category = section.get('cat');
	const productURL = category === 'Men' ? MenProducts : WomenProducts;

	const [productsData, setProductsData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [loadingMore, setLoadingMore] = useState(false);

	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [priceSort, setPriceSort] = useState(''); // 'asc' or 'desc'
	const [selectedCategory, setSelectedCategory] = useState('');
	const [rating, setRating] = useState(null);

	useEffect(() => {
		setProductsData([]);
		fetchProducts();
	}, []);

	const fetchProducts = async (isLoadMore = false) => {
		if (isLoadMore) {
			setLoadingMore(true);
		} else {
			setLoading(true);
		}

		const newProducts = await getProducts(productURL, 10);
		setProductsData((prev) => [...prev, ...newProducts]);

		if (isLoadMore) {
			setLoadingMore(false);
		} else {
			setLoading(false);
		}
	};

	const filterAndSortProducts = () => {
		let filtered = [...productsData];
		if (selectedCategory) {
			filtered = filtered.filter(
				(product) => product.category === selectedCategory,
			);
		}

		if (priceSort === 'asc') {
			filtered.sort((a, b) => a.price - b.price);
		} else if (priceSort === 'desc') {
			filtered.sort((a, b) => b.price - a.price);
		}
		if (rating !== null) {
			filtered = filtered.filter((item) => {
				return Math.floor(item.rating.rate) >= rating + 1;
			});
		}
		return filtered;
	};

	const handleFilterChange = (newPriceSort, newCategory, stars) => {
		setPriceSort(newPriceSort);
		setSelectedCategory(newCategory);
		setRating(stars);
	};
	useEffect(() => {
		setProductsData([]);
		fetchProducts();
	}, [category]);

	if (loading) {
		return <Loading />;
	}

	const filteredProducts = filterAndSortProducts();

	return (
		<div className='flex flex-col justify-center px-4'>
			{/* Product Header */}
			<ProductHeader category={category} />

			{/* Hamburger Menu Button (Mobile Only) */}
			<button
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}
				className='fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg sm:hidden'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-6 w-6 text-gray-800'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M4 6h16M4 12h16M4 18h16'
					/>
				</svg>
			</button>

			{/* Main Content */}
			<section className='flex w-full px-5 gap-5'>
				{/* Sidebar */}
				<section
					className={`fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-100 rounded-r-2xl shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
						isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
					} sm:translate-x-0 sm:relative sm:w-[20%]`}
				>
					<Sidebar
						priceSort={priceSort}
						selectedCategory={selectedCategory}
						StarRating={rating}
						onFilterChange={handleFilterChange}
						onClose={() => setIsSidebarOpen(false)}
						category={category}
					/>
				</section>

				{/* Product Grid */}
				<section className='flex-1'>
					<div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full p-5 justify-items-center shadow-2xl rounded-3xl border border-gray-100'>
						{filteredProducts.length < 1 ? (
							<div className='flex justify-center items-center w-full min-h-[100px]'>
								<h1 className='text-2xl font-semibold text-gray-600'>
									No products match this criteria.
								</h1>
							</div>
						) : (
							filteredProducts.map((product, idx) => (
								<ProductCard key={idx} product={product} />
							))
						)}
					</div>
					{loadingMore ? (
						<Loading />
					) : (
						<div className='flex justify-center my-5'>
							<button
								disabled={loadingMore}
								className='bg-black text-white px-4 py-2 rounded-lg disabled:opacity-50'
								onClick={() => fetchProducts(true)}
							>
								Load More
							</button>
						</div>
					)}
				</section>
			</section>

			{/* Overlay (Mobile Only) */}
			{isSidebarOpen && (
				<div
					onClick={() => setIsSidebarOpen(false)}
					className='fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden'
				></div>
			)}
		</div>
	);
}

export default ProductListing;
