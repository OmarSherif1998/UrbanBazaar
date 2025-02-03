/** @format */

import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const WishlistButton = ({ _id, item_id, title, item_pic }) => {
	const [isWishList, setIsWishList] = useState(false);

	// Helper functions
	const getSavedItems = () => {
		return JSON.parse(localStorage.getItem(`savedItems${_id}`)) || [];
	};

	const isItemInWishlist = (itemId) => {
		const savedItems = getSavedItems();
		return savedItems.some((item) => item.id === itemId);
	};

	// Check if the item is already in the wishlist on component mount
	useEffect(() => {
		setIsWishList(isItemInWishlist(item_id));
	}, [item_id]);

	// Handle adding/removing items from the wishlist
	const handleWishList = () => {
		setIsWishList((prev) => !prev);

		const savedItems = getSavedItems();

		if (isItemInWishlist(item_id)) {
			const updatedItems = savedItems.filter((item) => item.id !== item_id);
			localStorage.setItem(`savedItems${_id}`, JSON.stringify(updatedItems));
		} else {
			// Add item to wishlist
			const updatedItems = [
				...savedItems,
				{ id: item_id, name: title, item_pic }, // Store as object for scalability
			];
			localStorage.setItem(`savedItems${_id}`, JSON.stringify(updatedItems));
		}
	};

	return (
		<button
			onClick={handleWishList}
			className='border border-gray-100 shadow-2xl w-fit px-5 py-2 rounded-2xl flex justify-between items-center gap-5 cursor-pointer'
		>
			{' '}
			{isWishList ? (
				<FavoriteIcon sx={{ color: 'red' }} />
			) : (
				<FavoriteBorderIcon />
			)}
			{isWishList ? 'Remove from Wishlist' : 'Add to Wishlist'}
		</button>
	);
};

export default WishlistButton;
