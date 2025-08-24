'use client';

import { AppStore, makeStore } from '@/stores';
import { Cart } from '@/utils/types';
import { useRef } from 'react';
import { Provider } from 'react-redux';

export const dynamic = 'force-dynamic';

export default function StoreProvider({ children, carts }: Readonly<{ children: React.ReactNode; carts: Cart[] }>) {
	const storeRef = useRef<AppStore>(null);

	if (!storeRef.current) storeRef.current = makeStore(carts);

	return (
		<Provider store={storeRef.current} serverState={{ cart: { carts }, toast: { toasts: [] } }}>
			{children}
		</Provider>
	);
}
