import { Cart } from '@/utils/types';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { cartReducer } from './cart';
import { toastReducer } from './toast';

let store: ReturnType<typeof makeStore>;

export const makeStore = (carts: Cart[]) => {
	const createdStore = configureStore({
		reducer: {
			toast: toastReducer,
			cart: cartReducer
		},
		middleware: (_option) => _option({ serializableCheck: false }),
		preloadedState: { cart: { carts } }
	});

	store = createdStore;

	return createdStore;
};

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store };
