'use client';

import { Button } from '@/components/shared/button';
import { addToast } from '@/stores/app/actions';
import { addToCartActionAsync } from '@/utils/base-actions';
import { ShoppingCartIcon } from 'lucide-react';
import { FC } from 'react';

export const AddToCartBtn: FC<{ productId: number }> = ({ productId }) => {
	return (
		<Button
			onClick={async () => {
				try {
					await addToCartActionAsync(productId);
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
