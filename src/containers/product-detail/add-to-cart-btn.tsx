'use client';

import { Button } from '@/components/shared/button';
import { addToCartActionAsync } from '@/utils/base-actions';
import { ShoppingCartIcon } from 'lucide-react';
import { FC } from 'react';

export const AddToCartBtn: FC<{ productId: number }> = ({ productId }) => {
	return (
		<Button onClick={async () => await addToCartActionAsync(productId)} size="large" className="mt-auto max-w-sm w-full">
			<ShoppingCartIcon className="mr-2" />
			Add to cart
		</Button>
	);
};
