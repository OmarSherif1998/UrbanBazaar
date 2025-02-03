/** @format */

import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import WinterPic from '../../assets/imgs/WinterPic.webp';
import HomePic from '../../assets/imgs/HomePic.webp';
import SalePic from '../../assets/imgs/SalePic.webp';
import Bestsellers from '../../assets/imgs/Bestsellers.webp';

const slides = [
	{
		image: WinterPic,
	},

	{
		image: HomePic,
	},
	{
		image: SalePic,
	},
	{
		image: Bestsellers,
	},
];

function ExploreCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
		);
	};

	return (
		<div
			className='relative w-full h-[80vh] flex items-center bg-no-repea bg-center bg-cover border border-gray-300 transition-all duration-300 cursor-pointer'
			style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
		>
			<section className='flex flex-col  text-center py-16 px-10 ml-20  rounded-lg'>
				<h1 className='text-5xl font-extrabold text-white uppercase tracking-wider'>
					{slides[currentIndex].headline}
				</h1>
				<span className='text-gray-400 text-3xl italic mt-4'>
					{slides[currentIndex].subtext}
				</span>
			</section>

			<button
				onClick={prevSlide}
				className='absolute left-5 bg-black/50 text-white p-2 rounded-full hover:cursor-pointer hover:bg-gray-300 hover:text-black'
			>
				<ArrowBackIosIcon />
			</button>
			<button
				onClick={nextSlide}
				className='absolute right-5 bg-black/50 text-white p-2 rounded-full hover:cursor-pointer hover:bg-gray-300 hover:text-black'
			>
				<ArrowForwardIosIcon />
			</button>
		</div>
	);
}

export default ExploreCarousel;
