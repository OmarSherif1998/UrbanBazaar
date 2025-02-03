/** @format */

import Sale from '../components/home/Sale';
import ExploreCarousel from '../components/home/ExploreCarousel';
import Services from '../components/home/Services';
import Favourites from '../components/home/Favourites.jsx';
import KidsCard from '../components/home/KidsCard.jsx';
import Cards from '../components/home/Cards.jsx';
import Timeless from '../assets/imgs/Timeless.webp';
import Comfort from '../assets/imgs/Comfort.webp';
import { serviceData } from '../assets/static/ServiceData.js';
import { FavCards } from '../assets/static/FavCards.js';
import GetThatLook from '../components/home/GetThatLook.jsx';

function Home() {
	return (
		<div className='flex flex-col gap-10  min-h-screen px-5'>
			<Sale />

			<section className='flex flex-col sm:flex-row gap-5 px-5'>
				<ExploreCarousel />
			</section>

			<section className='relative flex justify-center'>
				<KidsCard />
				<button className='absolute z-30 bottom-10 right-20 bg-orange-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-800 cursor-pointer transition-colors transform hover:scale-105'>
					Browse Kid Section
				</button>
			</section>

			<div className='flex justify-center p-6'>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 bg-gray-50 p-6 rounded-xl shadow-lg'>
					{FavCards.map((data, idx) => (
						<Favourites
							image={data.image}
							key={idx}
							className='transform transition-all duration-300 hover:scale-105 hover:shadow-xl'
						/>
					))}
				</div>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 items-center justify-items-center gap-6 p-6 rounded-lg'>
				<Cards image={Timeless} />
				<Cards image={Comfort} />
				<Cards image={Comfort} />
				<Cards image={Timeless} />
			</div>

			<GetThatLook />

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full px-4 justify-around gap-5'>
				{serviceData.map((data, idx) => (
					<Services
						Title={data.Title}
						Subtitle={data.Subtitle}
						path={data.path}
						key={idx}
					/>
				))}
			</div>
		</div>
	);
}

export default Home;
