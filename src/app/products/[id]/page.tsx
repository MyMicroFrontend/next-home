import { ProductDetailContainer } from '@/containers/product-detail';
import { fetchPopularProducts, fetchProductByIdActionAsync, fetchProducts } from '@/utils/base-actions';
import { Product } from '@/utils/types';
import { notFound } from 'next/navigation';

export const revalidate = 60;

export async function generateStaticParams() {
	const posts: Product[] = await fetchProducts();

	return posts.map((post) => ({
		id: String(post.id)
	}));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;

	const product = await fetchProductByIdActionAsync(Number(id));

	if (!product) return notFound();

	const popularProducts = await fetchPopularProducts();

	return <ProductDetailContainer product={product} popularProducts={popularProducts} />;
}
