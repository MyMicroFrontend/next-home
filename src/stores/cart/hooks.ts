import { useAppSelector } from '..';

export const useCarts = () => useAppSelector((_state) => _state.cart.carts);
