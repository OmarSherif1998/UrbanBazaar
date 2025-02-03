/** @format */

import React from 'react';
import NotFound from '../utils/NotFound';
import Found from '../components/savedItems/Found';
import { heart } from '../assets/svgs/paths';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/userSlice';
function SavedItems() {
	const user = useSelector(selectUser);
	const savedItems =
		JSON.parse(localStorage.getItem(`savedItems${user.id}`)) || [];

	return (
		<div>
			{savedItems.length < 1 ? (
				<NotFound
					title={'Your Favorites List is Empty'}
					paragraph='You have not saved any items to your favorite items yet. Start exploring and add items you love!'
					navigation='/home'
					svg={heart}
				/>
			) : (
				<Found savedItems={savedItems} />
			)}
		</div>
	);
}

export default SavedItems;
