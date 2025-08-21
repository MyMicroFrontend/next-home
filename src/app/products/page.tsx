import { ProductsContainer } from '@/containers/products';
import { fetchProducts } from '@/utils/base-actions';

export default async function ProductsPage() {
	const proucts = await fetchProducts();

	return <ProductsContainer products={proucts} />;
}
