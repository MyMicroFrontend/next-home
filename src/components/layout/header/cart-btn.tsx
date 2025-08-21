import { Button } from '@/components/shared/button';
import { CookieService } from '@/utils/cookie-storage';
import { Cart } from '@/utils/types';
import Link from 'next/link';

export const CartBtn = async () => {
	const cart = await CookieService.getAndParse<Cart[]>({ name: 'cart' });

	return (
		<Link href="/cart">
			<Button variant="secondary" className="text-sm relative">
				{cart ? <div className="size-6 leading-5 border rounded-full mr-2 bg-violet-900 inline-flex items-center justify-center text-white font-semibold absolute -top-1 -right-5 text-xs">{cart.reduce((a, b) => a + b.count, 0)}</div> : null}

				<span>Cart</span>
			</Button>
		</Link>
	);
};
