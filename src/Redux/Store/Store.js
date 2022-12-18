import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../Slice/CartSlice";
export default configureStore({
  reducer: { cart: CartReducer },
});
