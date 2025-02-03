/** @format */
import { FooterData } from '../assets/static/FooterData';

function Footer() {
	return (
		<footer className='flex flex-col sm:flex-row justify-around bg-black p-10 items-center'>
			<section className='flex flex-col sm:flex-row gap-10 mb-6 sm:mb-0'>
				{FooterData.map((data, idx) => (
					<div key={idx}>
						<h1 className='text-white font-bold text-3xl mb-2'>{data.title}</h1>
						<ul>
							{data.list.map((listItem, idx) => (
								<li
									key={idx}
									className='text-white hover:underline cursor-pointer mb-1'
								>
									{listItem}
								</li>
							))}
						</ul>
					</div>
				))}
			</section>

			<section className='text-red-700 font-GreatVibes text-5xl sm:text-8xl'>
				Urban Bazaar
			</section>
		</footer>
	);
}

export default Footer;
