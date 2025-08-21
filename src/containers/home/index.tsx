import { Container } from '@/components/shared/container';
import { ProductCard } from '@/components/shared/product-card';
import { Product } from '@/utils/types';
import Image from 'next/image';
import React, { FC } from 'react';

export const HomeContainer: FC<{ products: Product[] }> = ({ products }) => {
	return (
		<Container as="main">
			<section className="mt-4">
				<strong>Popular products</strong>
				<div className="grid grid-cols-4 gap-8">
					{products.map((_product) => (
						<ProductCard key={_product.id} product={_product} />
					))}
				</div>
			</section>
		</Container>
	);
};
