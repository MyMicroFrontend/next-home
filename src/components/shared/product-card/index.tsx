import { Product } from '@/utils/types';
import { StarIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { AddToCartBtn } from './add-to-cart-btn';

export const ProductCard: FC<{ product: Product }> = ({ product }) => {
	return (
		<Link href={`/products/${product.id}`} className="block w-full border border-zinc-100 rounded-lg shadow p-2 lg:p-6 group">
			<div className="flex items-center justify-center rounded-md bg-violet-50 aspect-square relative">
				<Image alt={product.title} src={product.image} width={100} height={100} className="object-contain size-10/12 drop-shadow-2xl group-hover:scale-110 transition-transform" />

				<span className="absolute top-1 right-1 lg:top-4 lg:right-4 text-sm bg-violet-700 text-white font-medium px-2 h-6 rounded inline-flex items-center gap-1">
					<StarIcon className="size-3 fill-white" />
					{product.rating.rate}
				</span>
			</div>

			<div className="flex flex-col mt-4 lg:mt-6 h-28 lg:h-32 mb-4">
				<h2 title={product.title} className="line-clamp-2 font-semibold text-balance text-sm lg:text-base">
					{product.title}
				</h2>

				<p className="mt-auto text-sm lg:text-base text-zinc-600">{product.category.toUpperCase()}</p>

				<p className="mt-3 lg:mt-4 font-semibold">{Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(product.price)}</p>
			</div>

			<AddToCartBtn productId={product.id} />
		</Link>
	);
};
