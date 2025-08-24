import { ToastProps } from '@/utils/types';
import { toastActions } from '.';
import { store } from '..';

export const addToast = (toast: Omit<ToastProps, 'id'>) => store.dispatch(toastActions._addToast(toast));
export const removeToast = (toastId: number) => store.dispatch(toastActions._removeToast(toastId));
export const removeAllToast = () => store.dispatch(toastActions._removeAllToast());
