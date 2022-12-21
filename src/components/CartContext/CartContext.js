import { createContext, useState } from "react";
import { CART_ITEMS_KEY } from "../../constants";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(newCartItem) {
    setCartItems((prevCartItems) => {
      if (prevCartItems.some((cartItem) => cartItem.id === newCartItem.id)) {
        return prevCartItems;
      }

      localStorage.setItem(
        CART_ITEMS_KEY,
        JSON.stringify([...prevCartItems, newCartItem])
      );

      return [...prevCartItems, newCartItem];
    });
  }

  const value = {
    cartItems,
    setCartItems,
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContext;
