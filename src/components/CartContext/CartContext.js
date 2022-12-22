import { CART_ITEMS_KEY } from "../../constants";
import { createContext } from "react";
import usePersistedState from "../../hooks/use-persisted-state.hook";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = usePersistedState([], CART_ITEMS_KEY);

  function addToCart(newCartItem) {
    setCartItems((prevCartItems) => {
      if (prevCartItems.some((cartItem) => cartItem.id === newCartItem.id)) {
        return prevCartItems;
      }

      return [...prevCartItems, newCartItem];
    });
  }

  function deleteFromCart(id) {
    setCartItems((prevCartItems) => {
      const newCartItems = prevCartItems.filter(
        (cartItem) => cartItem.id !== id
      );

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
