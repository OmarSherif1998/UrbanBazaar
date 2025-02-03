/** @format */

import { createSlice } from '@reduxjs/toolkit';

const user = JSON.parse(localStorage.getItem('loggedInUser'));
const initialState = {
	cart: JSON.parse(localStorage.getItem(`userCart${user?.id}`)) || [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const { _id, Color, Size } = action.payload;
			const existingItem = state.cart.find(
				(item) =>
					item._id === _id && item.Color === Color && item.Size === Size,
			);

			if (existingItem) {
				existingItem.Quantity += 1;
			} else {
				state.cart.push({ ...action.payload });
			}

			localStorage.setItem(`userCart${user.id}`, JSON.stringify(state.cart));
		},
		IncreaseCartItem: (state, action) => {
			const { productId, userId } = action.payload;

			const itemToUpdate = state.cart.find((item) => item._id === productId);

			if (itemToUpdate) {
				itemToUpdate.Quantity += 1;

				localStorage.setItem(`userCart${userId}`, JSON.stringify(state.cart));
			}
		},

		DecreaseCartItem: (state, action) => {
			const { productId, userId } = action.payload;

			const itemToUpdate = state.cart.find((item) => item._id === productId);

			if (itemToUpdate) {
				if (itemToUpdate.Quantity > 1) {
					itemToUpdate.Quantity -= 1;
				}

				localStorage.setItem(`userCart${userId}`, JSON.stringify(state.cart));
			}
		},
		removeFromCart: (state, action) => {
			const { productId, userId } = action.payload;

			state.cart = state.cart.filter((item) => item._id !== productId);
			localStorage.setItem(`userCart${userId}`, JSON.stringify(state.cart));
		},

		clearCart: (state, action) => {
			const { userId } = action.payload;
			state.cart = [];
			localStorage.removeItem(`userCart${userId}`);
		},
	},
});
export const selectCart = (state) => state.cart.cart;
export const {
	addToCart,
	IncreaseCartItem,
	DecreaseCartItem,
	removeFromCart,
	clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
