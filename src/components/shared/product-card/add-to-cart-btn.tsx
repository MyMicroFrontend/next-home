'use client';

import { addCartItemAsync } from '@/stores/cart/actions';
import { addToast } from '@/stores/toast/actions';
import { PlusCircleIcon } from 'lucide-react';
import { FC } from 'react';
import { Button } from '../button';

export const AddToCartBtn: FC<{ productId: number }> = ({ productId }) => {
	return (
		<Button
			onClick={async (e) => {
				e.preventDefault();
				try {
					await addCartItemAsync(productId);
					addToast({ message: 'Product added to cart', variant: 'success' });
				} catch (error) {
					addToast({ message: 'Product can not added to cart', variant: 'error' });
				}
			}}
			className="w-full text-sm lg:text-base">
			<PlusCircleIcon className="fill-white text-violet-700 mr-1 lg:mr-2 !size-5 lg:!size-6" />
			<span>Add to cart</span>
		</Button>
	);
};
