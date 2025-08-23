import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { toastReducer } from './app';

export const store = configureStore({
	reducer: { toast: toastReducer },
	middleware: (_option) => _option({ serializableCheck: false })
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
