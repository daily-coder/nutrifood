import { CART_ITEMS_KEY } from "../../constants";
import { createContext } from "react";
import usePersistedReducer from "../../hooks/use-persisted-reducer.hooks";

const CartContext = createContext();

export const ACTIONS = {
  ADD_ITEM: "add-item",
  DELETE_ITEM: "delete-item",
  INCREMENT_QUANTITY: "increment-quantity",
  DECREMENT_QUANTITY: "decrement-quantity",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_ITEM:
      if (state.some((cartItem) => cartItem.id === payload.newCartItem.id)) {
        return state;
      }

      return [...state, { ...payload.newCartItem, quantity: 1 }];

    case ACTIONS.DELETE_ITEM:
      return state.filter((cartItem) => cartItem.id !== payload.id);

    case ACTIONS.INCREMENT_QUANTITY:
      return state.map((cartItem) => {
        if (cartItem.id === payload.id) {
          const quantity = Math.max(cartItem.quantity + 1, 1);

          return {
            ...cartItem,
            quantity,
          };
        }
        return cartItem;
      });

    case ACTIONS.DECREMENT_QUANTITY:
      return state.map((cartItem) => {
        if (cartItem.id === payload.id) {
          const quantity = Math.max(cartItem.quantity - 1, 1);

          return {
            ...cartItem,
            quantity,
          };
        }
        return cartItem;
      });

    case CART_ITEMS_KEY:
      return payload.value;

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cartItems, dispatch] = usePersistedReducer(
    reducer,
    [],
    CART_ITEMS_KEY
  );

  const value = {
    cartItems,
    dispatch,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContext;
