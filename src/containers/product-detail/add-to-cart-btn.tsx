'use client';

import { Button } from '@/components/shared/button';
import { addCartItemAsync } from '@/stores/cart/actions';
import { addToast } from '@/stores/toast/actions';
import { ShoppingCartIcon } from 'lucide-react';
import { FC } from 'react';

export const AddToCartBtn: FC<{ productId: number }> = ({ productId }) => {
	return (
		<Button
			onClick={async () => {
				try {
					await addCartItemAsync(productId);
					addToast({ message: 'Product added to cart', variant: 'success' });
				} catch (error) {
					addToast({ message: 'Product can not added to cart', variant: 'error' });
				}
			}}
			size="large"
			className="mt-auto max-w-sm w-full">
			<ShoppingCartIcon className="mr-2" />
			Add to cart
		</Button>
	);
};
