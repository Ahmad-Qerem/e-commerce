import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  ItemsList: [],
  TotalQuantity: 0,
  ShowCart: false,
};
export const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    AddToCart: (state, { payload }) => {
      const ExistingItem = ItemsList.find((item) => item.id === payload.id);
      if (ExistingItem) {
        ExistingItem.Quantity++;
      }
    },
    RemoveFromCart: (state, { payload }) => {},
    SetShowCart: (state, { payload }) => {
      state.ShowCart = true;
    },
  },
});
