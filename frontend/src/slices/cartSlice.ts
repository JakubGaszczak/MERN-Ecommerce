import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../types/product";
import { updateCart } from "../components/utils/cartUtils";

const cartFromLocalStorage = localStorage.getItem("cart");
const initialState: { cartItems: CartItem[]; totalQty: number, itemsPrice: string } =
  cartFromLocalStorage
    ? JSON.parse(cartFromLocalStorage)
    : { cartItems: [], totalQty: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { name, image, price, _id } = action.payload;
      const existingProduct = state.cartItems.find((item) => item?._id === _id);

      if (existingProduct) {
        existingProduct.qty!++;
      } else {
        const newItem = {
          name,
          image,
          price,
          _id,
          qty: 1,
        };

        state.cartItems.push(newItem);
      }

      state.totalQty++;
      updateCart(state)
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      const { _id } = action.payload;
      const productIndex = state.cartItems.findIndex(
        (item) => item._id === _id
      );

      if (productIndex !== -1) {
        const product = state.cartItems[productIndex];

        if (product.qty! > 1) {
          product.qty!--;
        } else {
          state.cartItems.splice(productIndex, 1);
        }
        state.totalQty--;
      }

      localStorage.setItem("cart", JSON.stringify(state))
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQty = 0;
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
