import { AxiosApi } from '@/utils/axios';
import { Product } from '@/utils/types';

export async function fetchPopularProducts() {
	try {
		const axios = new AxiosApi();

		const response = await axios.get<Product[]>('products');

		return response.slice(0, 4);
	} catch (error) {
		console.error('Error', error);
		return [];
	}
}
