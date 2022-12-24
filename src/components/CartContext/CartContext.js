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

      return [...prevCartItems, { ...newCartItem, quantity: 1 }];
    });
  }

  function deleteFromCart(id) {
    setCartItems((prevCartItems) => {
      return prevCartItems.filter((cartItem) => cartItem.id !== id);
    });
  }

  function changeQuantity(id, action) {
    setCartItems((prevCartItems) => {
      return prevCartItems.map((cartItem) => {
        if (cartItem.id === id) {
          const quantity = Math.max(
            action === "increase"
              ? cartItem.quantity + 1
              : cartItem.quantity - 1,
            1
          );

          return {
            ...cartItem,
            quantity,
          };
        }
        return cartItem;
      });
    });
  }

  const value = {
    cartItems,
    setCartItems,
    addToCart,
    deleteFromCart,
    changeQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContext;
