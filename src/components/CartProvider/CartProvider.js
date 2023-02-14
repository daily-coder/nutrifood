import propTypes from "prop-types";
import { createContext, useContext } from "react";

import { CART_ITEMS_KEY } from "../../constants";

import usePersistedReducer from "./use-persisted-reducer.hook";

/**
 * NOTE:
 * Separating context for the current project doesn't provide any noticeable performance benefits.
 * The purpose is to get an idea of how it can help solve the problem of unnecessary re-rendering.
 */

const CartItemsContext = createContext();
const CartDispatchContext = createContext();

export function useCartItems() {
  const context = useContext(CartItemsContext);
  if (!context) {
    throw new Error("useCartItems should be used within CartProvider");
  }
  return context;
}

export function useCartDispatch() {
  const context = useContext(CartDispatchContext);
  if (!context) {
    throw new Error("useCartDispatch should be used within CartProvider");
  }
  return context;
}

export const ACTIONS = {
  ADD_ITEM: "add-item",
  DELETE_ITEM: "delete-item",
  INCREMENT_QUANTITY: "increment-quantity",
  DECREMENT_QUANTITY: "decrement-quantity",
};

function cartReducer(draft, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_ITEM: {
      if (draft.some((cartItem) => cartItem.id === payload.id)) {
        return draft;
      }

      draft.push({ ...payload, quantity: 1 });
      break;
    }

    case ACTIONS.DELETE_ITEM: {
      return draft.filter((cartItem) => cartItem.id !== payload);
    }

    case ACTIONS.INCREMENT_QUANTITY: {
      const targetItem = draft.find((cartItem) => cartItem.id === payload);
      targetItem.quantity = Math.max(targetItem.quantity + 1, 1);
      break;
    }

    case ACTIONS.DECREMENT_QUANTITY: {
      const targetItem = draft.find((cartItem) => cartItem.id === payload);
      targetItem.quantity = Math.max(targetItem.quantity - 1, 1);
      break;
    }

    case CART_ITEMS_KEY: {
      return payload;
    }

    default: {
      return draft;
    }
  }
}

function CartProvider({ children }) {
  const [cartItems, dispatch] = usePersistedReducer(
    cartReducer,
    [],
    CART_ITEMS_KEY
  );

  return (
    <CartItemsContext.Provider value={cartItems}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartItemsContext.Provider>
  );
}

CartProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default CartProvider;
