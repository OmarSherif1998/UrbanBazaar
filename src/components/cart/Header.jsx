/** @format */

import React from 'react';

function Header({ sortedBy }) {
	return (
		<section className='py-5 flex w-full flex-col gap-5'>
			<div className='flex justify-between  px-5 w-[100%] border-b pb-2'>
				<p className='text-4xl'>Shopping Cart </p>
				<button>Sort By: {sortedBy}</button>
			</div>
		</section>
	);
}

export default Header;
