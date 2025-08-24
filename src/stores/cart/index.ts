import { addToCartActionAsync, fetchCart } from '@/utils/base-actions';
import { Cart } from '@/utils/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
	carts: Cart[];
};

const initialState: InitialStateType = { carts: [] };

const _loadCartAsync = createAsyncThunk('cart/load', async () => await fetchCart());

const _addCartItem = createAsyncThunk('cart/add-cart-item', async (productId: number) => await addToCartActionAsync(productId));

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(_loadCartAsync.fulfilled, function (state, action) {
			const cart = action.payload || initialState.carts;

			state.carts = cart;
		});
		builder.addCase(_addCartItem.fulfilled, function (state, action) {
			const cart = action.payload;

			state.carts = cart;
		});
	}
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
export const cartExtraReducer = { _loadCartAsync, _addCartItem };
