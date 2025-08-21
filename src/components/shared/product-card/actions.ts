'use server';

import { CookieService } from '@/utils/cookie-storage';
import { Cart } from '@/utils/types';
import { revalidatePath } from 'next/cache';

function createCart(productId: number): Cart[] {
	const cart: Cart = { count: 1, productId };

	return [cart];
}

function updateCartItem(cart: Cart[], productId: number): Cart[] {
	const findedCartItemIndex = cart.findIndex((_cart) => _cart.productId === productId);

	findedCartItemIndex > -1 ? (cart[findedCartItemIndex].count += 1) : cart.push({ count: 1, productId });

	return cart;
}

export async function addToCartActionAsync(productId: number) {
	try {
		const cartFromCookie = await CookieService.getAndParse<Cart[]>({ name: 'cart' });

		const cart = cartFromCookie ? updateCartItem(cartFromCookie, productId) : createCart(productId);

		await CookieService.set({ name: 'cart', value: cart });

		revalidatePath('/', 'layout');
	} catch (error) {
		console.error('Add to cart error', error);
	}
}
