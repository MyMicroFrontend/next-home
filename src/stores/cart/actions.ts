import { cartExtraReducer } from '.';
import { store } from '..';

export const loadCartAsync = () => store.dispatch(cartExtraReducer._loadCartAsync());
export const addCartItemAsync = (productId: number) => store.dispatch(cartExtraReducer._addCartItem(productId));
