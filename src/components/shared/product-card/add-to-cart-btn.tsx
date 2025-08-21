'use client';

import { Product } from '@/utils/types';
import { PlusCircleIcon } from 'lucide-react';
import { FC } from 'react';
import { Button } from '../button';
import { addToCartActionAsync } from './actions';

export const AddToCartBtn: FC<{ productId: number }> = ({ productId }) => {
	return (
		<Button
			onClick={async () => {
				const response = await addToCartActionAsync(productId);
				console.log(response);
			}}
			className="w-full">
			<PlusCircleIcon className="fill-white text-violet-700 mr-2 !size-6" />
			<span>Add to cart</span>
		</Button>
	);
};
