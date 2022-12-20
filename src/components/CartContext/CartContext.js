import { createContext, useMemo, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const value = useMemo(
    () => ({
      cartItems,
      setCartItems,
    }),
    [cartItems, setCartItems]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContext;
