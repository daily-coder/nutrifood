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

function reducer(draft, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_ITEM: {
      if (draft.some((cartItem) => cartItem.id === payload.newCartItem.id)) {
        return draft;
      }

      draft.push({ ...payload.newCartItem, quantity: 1 });
      break;
    }

    case ACTIONS.DELETE_ITEM: {
      return draft.filter((cartItem) => cartItem.id !== payload.id);
    }

    case ACTIONS.INCREMENT_QUANTITY: {
      const targetItem = draft.find((cartItem) => cartItem.id === payload.id);
      targetItem.quantity = Math.max(targetItem.quantity + 1, 1);
      break;
    }

    case ACTIONS.DECREMENT_QUANTITY: {
      const targetItem = draft.find((cartItem) => cartItem.id === payload.id);
      targetItem.quantity = Math.max(targetItem.quantity - 1, 1);
      break;
    }

    case CART_ITEMS_KEY: {
      return payload.value;
    }

    default: {
      return draft;
    }
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
