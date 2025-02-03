/** @format */

import trendy from '../../assets/imgs/trendy.jpg';
import casual from '../../assets/imgs/casual.jpg';
import basic from '../../assets/imgs/basic.jpg';
import streetwear from '../../assets/imgs/streetwear.jpg';

function GetThatLook() {
	return (
		<div className='flex flex-col w-full bg-black p-6 md:p-10 gap-6'>
			<section className='flex flex-col md:flex-row justify-between items-start md:items-end gap-4'>
				<h1 className='flex flex-col md:flex-row items-start md:items-end gap-4 font-semibold text-white text-3xl md:text-5xl'>
					GET THAT LOOK
					<span className='text-white text-sm md:text-base w-full md:w-[50%]'>
						Get inspiration from our gallery and share your looks on social
						media with @UrbanBazaar and #Urbanstyle.
					</span>
				</h1>

				<button className='px-5 md:px-7 py-2 bg-black text-white rounded-full border-2 border-white cursor-pointer'>
					See all styles
				</button>
			</section>

			<section className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5'>
				<img
					className='w-full transform hover:scale-105 cursor-pointer'
					src={casual}
					alt=''
				/>
				<img
					className='w-full transform hover:scale-105 cursor-pointer'
					src={trendy}
					alt=''
				/>
				<img
					className='w-full transform hover:scale-105 cursor-pointer'
					src={basic}
					alt=''
				/>
				<img
					className='w-full transform hover:scale-105 cursor-pointer'
					src={streetwear}
					alt=''
				/>
			</section>
		</div>
	);
}

export default GetThatLook;
