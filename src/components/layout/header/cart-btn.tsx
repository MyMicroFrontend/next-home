import { Button } from '@/components/shared/button';
import { CookieService } from '@/utils/cookie-storage';
import { Cart } from '@/utils/types';

export const CartBtn = async () => {
	const cart = await CookieService.getAndParse<Cart[]>({ name: 'cart' });

	return (
		<a href="/cart">
			<Button variant="secondary" className="text-sm relative">
				{cart?.length ? <span className="size-6 leading-5 border rounded-full mr-2 bg-violet-900 inline-flex items-center justify-center text-white font-semibold absolute -top-1 -right-5 text-xs">{cart.length}</span> : null}

				<span>Cart</span>
			</Button>
		</a>
	);
};
