import { useAppSelector } from '..';

export const useToasts = () => useAppSelector((_state) => _state.toast.toasts);
