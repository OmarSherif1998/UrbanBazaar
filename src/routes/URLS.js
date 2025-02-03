/** @format */

const MenProducts = "men's clothing?";

const WomenProducts = "women's clothing?";

const loginURL = 'https://fakestoreapi.com/auth/login';
const UsersURL = 'https://fakestoreapi.com/users';
const Categories = 'https://fakestoreapi.com/products/categories';
const addProduct = 'https://fakestoreapi.com/products';
const singleProduct = (id) => {
	return `https://fakestoreapi.com/products/${id}`;
};
export {
	MenProducts,
	WomenProducts,
	loginURL,
	UsersURL,
	Categories,
	addProduct,
	singleProduct,
};
