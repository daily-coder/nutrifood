import { createContext, useEffect, useState } from "react";
import { CART_ITEMS_KEY } from "../../constants";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem(CART_ITEMS_KEY));
    setCartItems(cartItems || []);
  }, []);

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

  function deleteFromCart(id) {
    setCartItems((prevCartItems) => {
      const newCartItems = prevCartItems.filter(
        (cartItem) => cartItem.id !== id
      );

      localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(newCartItems));

      return newCartItems;
    });
  }

  const value = {
    cartItems,
    setCartItems,
    addToCart,
    deleteFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContext;
