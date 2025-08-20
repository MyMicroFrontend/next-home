import { HomeContainer } from '@/containers/home';
import { fetchPopularProducts } from './actions';

export default async function MainPage() {
	const products = await fetchPopularProducts();

	return <HomeContainer products={products} />;
}
