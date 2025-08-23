import { ToastProps } from '@/utils/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialStateType = {
	toasts: ToastProps[];
};

const initialState: InitialStateType = {
	toasts: []
};

const toastSlice = createSlice({
	name: 'toast',
	initialState,
	reducers: {
		_addToast: (state, action: PayloadAction<Omit<ToastProps, 'id'>>) => {
			const toast = action.payload;

			const newToast: ToastProps = { ...toast, id: Date.now() };

			state.toasts.push(newToast);
		},
		_removeToast: (state, action: PayloadAction<number>) => {
			state.toasts = state.toasts.filter((_toast) => _toast.id !== action.payload);
		},
		_removeAllToast: (state) => {
			state.toasts = [];
		}
	}
});

export const toastActions = toastSlice.actions;
export const toastReducer = toastSlice.reducer;
