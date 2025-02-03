/** @format */

import appStore from '../assets/imgs/appStore.png';
import googlePlay from '../assets/imgs/googlePlay.png';

function SocialBar() {
	return (
		<div className='flex w-full gap-4 items-center justify-center bg-gray-50 p-4 rounded-lg shadow-md my-10'>
			<h1 className='font-bold text-lg text-gray-800'>Download The App</h1>
			<a
				href='https://apps.apple.com'
				target='_blank'
				rel='noopener noreferrer'
				className='transition-transform transform hover:scale-105'
			>
				<img
					className='w-28 h-28 object-contain'
					src={appStore}
					alt='Download on the App Store'
				/>
			</a>
			<a
				href='https://play.google.com'
				target='_blank'
				rel='noopener noreferrer'
				className='transition-transform transform hover:scale-105'
			>
				<img
					className='w-28 h-28 object-contain'
					src={googlePlay}
					alt='Get it on Google Play'
				/>
			</a>
		</div>
	);
}

export default SocialBar;
