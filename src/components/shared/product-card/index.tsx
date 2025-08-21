import { Product } from '@/utils/types';
import Image from 'next/image';
import { FC } from 'react';
import { AddToCartBtn } from './add-to-cart-btn';

export const ProductCard: FC<{ product: Product }> = ({ product }) => {
	return (
		<div className="w-full border border-zinc-100 rounded-lg shadow-md p-6">
			<div className="flex items-center justify-center rounded-md bg-violet-50 aspect-square">
				<Image alt={product.title} src={product.image} width={150} height={150} className="object-cover" />
			</div>

			<div className="flex flex-col mt-6 h-32 mb-4">
				<h2 title={product.title} className="line-clamp-2 font-semibold text-balance">
					{product.title}
				</h2>

				<p className="mt-auto text-zinc-600">{product.category.toUpperCase()}</p>

				<p className="mt-4 font-semibold">{Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(product.price)}</p>
			</div>

			<AddToCartBtn productId={product.id} />
		</div>
	);
};
