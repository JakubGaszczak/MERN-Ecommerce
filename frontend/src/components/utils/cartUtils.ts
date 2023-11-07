import { CartItem } from "../../types/product"

interface StateI {
    cartItems: CartItem[],
    totalQty: number,
    itemsPrice?: string
}

export const addDecimals = (num: number) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

export const updateCart = (state: StateI) => {

    const itemsPrice = state.cartItems.reduce((acc, item: CartItem) => acc + (item.price  * 100 * item.qty!) / 100, 0)
    state.itemsPrice = addDecimals(itemsPrice)

    localStorage.setItem("cart", JSON.stringify(state))

    return state
}

