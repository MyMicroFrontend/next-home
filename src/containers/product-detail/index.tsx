import { Button } from '@/components/shared/button';
import { Container } from '@/components/shared/container';
import { ProductCard } from '@/components/shared/product-card';
import { formatCurency } from '@/utils/number';
import { Product } from '@/utils/types';
import { ShoppingCartIcon, StarIcon } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';
import { AddToCartBtn } from './add-to-cart-btn';
import { Rating } from '@/components/shared/rating';

type Props = {
	product: Product;
	popularProducts: Product[];
};

export const ProductDetailContainer: FC<Props> = ({ product, popularProducts }) => {
	return (
		<Container as="main">
			<div className="py-3 md:py-6 lg:py-8 grid grid-cols-1 md:grid-cols-[24rem_1fr] gap-4 md:gap-6 lg:gap-8">
				<aside>
					<div className="mx-auto w-full sm:size-96 aspect-square bg-violet-50 flex items-center justify-center rounded">
						<Image src={product.image} alt={product.title} width={500} height={500} className="object-contain size-64 sm:size-80 drop-shadow-2xl" />
					</div>
				</aside>

				<div className="h-full flex flex-col">
					<p className="text-sm text-zinc-700 font-medium">{product.category.toUpperCase()}</p>
					<h1 className="text-2xl font-semibold text-balance">{product.title}</h1>

					<Rating rating={product.rating} />

					<p className="text-balance mt-4">{product.description}</p>

					<strong className="text-2xl mt-4 sm:mt-8 mb-4 inline-block">{formatCurency(product.price)}</strong>

					<AddToCartBtn productId={product.id} />
				</div>
			</div>

			<section className="mt-4 sm:mt-8 mb-8">
				<h4 className="text-xl font-semibold">Popular products</h4>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
					{popularProducts.map((_popularProduct) => (
						<ProductCard key={_popularProduct.id} product={_popularProduct} />
					))}
				</div>
			</section>
		</Container>
	);
};
