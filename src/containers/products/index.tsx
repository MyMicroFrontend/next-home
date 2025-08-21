import { Container } from '@/components/shared/container';
import { ProductCard } from '@/components/shared/product-card';
import { Product } from '@/utils/types';
import { FC } from 'react';

export const ProductsContainer: FC<{ products: Product[] }> = ({ products }) => {
	return (
		<Container as="main" className="py-3 md:py-6 lg:py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
			{products.map((_product) => (
				<ProductCard key={_product.id} product={_product} />
			))}
		</Container>
	);
};
