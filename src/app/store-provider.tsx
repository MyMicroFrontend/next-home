'use client';

import { AppStore, store } from '@/stores';
import { loadCartAsync } from '@/stores/cart/actions';
import { useRef } from 'react';
import { Provider } from 'react-redux';

export const dynamic = 'force-dynamic';

export default function StoreProvider({ children }: Readonly<{ children: React.ReactNode }>) {
	const storeRef = useRef<AppStore>(undefined);

	if (!storeRef.current) {
		storeRef.current = store;
	}

	return <Provider store={storeRef.current}>{children}</Provider>;
}
