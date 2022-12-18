import { createSlice } from "@reduxjs/toolkit";
import { CartsData } from "../Data";
const initialState = {
  id: 0,
  userId: -1,
  date: "2020-03-02T00:00:02.000Z",
  products: [],
  __v: 0,
};
export const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    SetCart: (state, { payload }) => {
      const UserState = CartsData.find((item) => item.userId === payload.id);
      console.log(UserState);
      state.id = UserState.id;
      state.userId = UserState.userId;
      state.date = UserState.date;
      state.products = UserState.products;
      console.log(state);
    },
    AddToCart: (state, { payload }) => {
      const ExistingItem = state.products.find(
        (item) => item.productId === payload.ProductId
      );
      if (ExistingItem) {
        ExistingItem.quantity += payload.counter;
      } else {
        const newProduct = {
          productId: payload.ProductId,
          quantity: payload.counter,
        };
        state.products.push(newProduct);
      }
    },
    RemoveFromCart: (state, { payload }) => {
      const ExistingItem = state.products.find(
        (item) => item.productId === payload.ProductId
      );
      if (ExistingItem.quantity > 1) {
        ExistingItem.quantity -= 1;
      } else if (ExistingItem.quantity === 1) {
        const NewData = state.products.filter(
          (item) => item.productId !== payload.ProductId
        );
        state.products = NewData;
      }
    },
  },
});

export const { AddToCart, RemoveFromCart, SetCart } = CartSlice.actions;
export default CartSlice.reducer;
