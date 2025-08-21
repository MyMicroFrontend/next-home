'use client';

import { addToCartActionAsync } from '@/utils/base-actions';
import { PlusCircleIcon } from 'lucide-react';
import { FC } from 'react';
import { Button } from '../button';

export const AddToCartBtn: FC<{ productId: number }> = ({ productId }) => {
	return (
		<Button
			onClick={async (e) => {
				e.preventDefault();
				const response = await addToCartActionAsync(productId);
				console.log(response);
			}}
			className="w-full text-sm lg:text-base">
			<PlusCircleIcon className="fill-white text-violet-700 mr-1 lg:mr-2 !size-5 lg:!size-6" />
			<span>Add to cart</span>
		</Button>
	);
};
