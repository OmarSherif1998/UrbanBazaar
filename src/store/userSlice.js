/** @format */

import { createSlice } from '@reduxjs/toolkit';

const token = localStorage.getItem('authToken') || null;
const userData = JSON.parse(localStorage.getItem('loggedInUser')) || null;
const initialState = {
	user: userData,
	authToken: token,
	error: null,
};
const userSlice = createSlice({
	name: 'user',
	initialState,

	reducers: {
		login: (state, action) => {
			state.user = action.payload.user;
			state.authToken = action.payload.authToken;
			state.error = null;
		},
		setError: (state, action) => {
			state.error = action.payload;
			state.loading = false; // Handle loading when error occurs
		},
		logout: (state) => {
			state.user = null;
			state.authToken = null;
			state.error = null;

			localStorage.removeItem('authToken');
			localStorage.removeItem('LoggedInUser');
		},
	},
});

export const selectUser = (state) => state.user.user;
export const selectAuthToken = (state) => state.user.authToken;

export default userSlice.reducer;
export const { login, setError, logout } = userSlice.actions;
