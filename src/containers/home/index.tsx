import { Container } from '@/components/shared/container';
import { Product } from '@/utils/types';
import Image from 'next/image';
import React, { FC } from 'react';

export const HomeContainer: FC<{ products: Product[] }> = ({ products }) => {
	return (
		<Container as="main">
			<section className="mt-4">
				<strong>Popular products</strong>
				<div className="grid grid-cols-4 gap-4">
					{products.map((_product) => (
						<div key={_product.id} className="w-full bg-zinc-50 rounded-lg shadow-md p-6">
							<div className="bg-violet-200 h-60 flex items-center justify-center rounded-md">
								<Image alt={_product.title} src={_product.image} quality={100} width={150} height={150} className="object-cover" />
							</div>

							<div className="flex mt-6 h-32">
								<div className="mr-6 flex flex-col">
									<h2 title={_product.title} className="line-clamp-2 font-semibold">
										{_product.title}
									</h2>

									<p className="mt-auto text-zinc-600">{_product.category.toUpperCase()}</p>

									<p className="mt-4 font-semibold">{Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(_product.price)}</p>
								</div>

								<div className="ml-auto">
									<button className="bg-violet-700 size-8 rounded-full text-white leading-8 cursor-pointer">+</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</Container>
	);
};
