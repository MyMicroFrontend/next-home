'use server';

import { revalidatePath } from 'next/cache';
import { AxiosApi } from './axios';
import { CookieService } from './cookie-storage';
import { Cart, Product } from './types';

export async function fetchProductByIdActionAsync(productId: number): Promise<Product | null> {
	try {
		const axios = new AxiosApi();

		const response = axios.get<Product>(`products/${productId}`);

		return response;
	} catch (error) {
		console.error('fetchProductById Error', error);
		return null;
	}
}

export async function fetchProducts() {
	try {
		const axios = new AxiosApi();

		const response = await axios.get<Product[]>('products');

		return response;
	} catch (error) {
		console.error('fetchProducts Error', error);
		return [];
	}
}

export async function fetchPopularProducts() {
	try {
		const products = await fetchProducts();

		return products.slice(0, 4);
	} catch (error) {
		console.error('fetchPopularProducts Error', error);
		return [];
	}
}

function createCart(productId: number): Cart[] {
	const cart: Cart = { quantity: 1, productId };

	return [cart];
}

function updateCartItem(cart: Cart[], productId: number): Cart[] {
	const findedCartItemIndex = cart.findIndex((_cart) => _cart.productId === productId);

	findedCartItemIndex > -1 ? (cart[findedCartItemIndex].quantity += 1) : cart.push({ quantity: 1, productId });

	return cart;
}

export async function addToCartActionAsync(productId: number) {
	try {
		const cartFromCookie = await CookieService.getAndParse<Cart[]>({ name: 'cart' });

		const cart = cartFromCookie ? updateCartItem(cartFromCookie, productId) : createCart(productId);

		await CookieService.set({ name: 'cart', value: cart });

		revalidatePath('/', 'layout');
	} catch (error) {
		console.error('addToCartActionAsync Error', error);
	}
}
