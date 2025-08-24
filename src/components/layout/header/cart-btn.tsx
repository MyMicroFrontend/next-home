'use client';

import { Button } from '@/components/shared/button';
import { loadCartAsync } from '@/stores/cart/actions';
import { useCarts } from '@/stores/cart/hooks';
import { useEffect } from 'react';

export const CartBtn = () => {
	const carts = useCarts();

	useEffect(() => {
		loadCartAsync();
	}, []);

	return (
		<a href="/cart">
			<Button variant="secondary" className="text-sm relative">
				{carts?.length ? <span className="size-6 leading-5 border rounded-full mr-2 bg-violet-900 inline-flex items-center justify-center text-white font-semibold absolute -top-1 -right-5 text-xs">{carts.length}</span> : null}

				<span>Cart</span>
			</Button>
		</a>
	);
};
