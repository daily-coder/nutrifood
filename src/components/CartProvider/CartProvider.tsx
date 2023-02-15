import propTypes from "prop-types";
import { createContext, Dispatch, ReactNode, useContext } from "react";

import { CART_ITEMS_KEY } from "../../constants";
import { Item } from "../../types";

import usePersistedReducer from "./use-persisted-reducer.hook";

interface CartItem extends Item {
  width: number;
  height: number;
  quantity: number;
}

type Action =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "DELETE_ITEM"; payload: number }
  | { type: "INCREMENT_QUANTITY"; payload: number }
  | { type: "DECREMENT_QUANTITY"; payload: number }
  | { type: typeof CART_ITEMS_KEY; payload: CartItem[] }; // set state using localStorage

/**
 * NOTE:
 * Separating context for the current project doesn't provide any noticeable performance benefits.
 * The purpose is to get an idea of how it can help solve the problem of unnecessary re-rendering.
 */

const CartItemsContext = createContext<CartItem[] | null>(null);
const CartDispatchContext = createContext<Dispatch<Action> | null>(null);

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

function cartReducer(draft: CartItem[], { type, payload }: Action) {
  switch (type) {
    case "ADD_ITEM": {
      if (draft.some((cartItem) => cartItem.id === payload.id)) {
        return draft;
      }

      draft.push({ ...payload });
      break;
    }

    case "DELETE_ITEM": {
      return draft.filter((cartItem) => cartItem.id !== payload);
    }

    case "INCREMENT_QUANTITY": {
      const targetItem = draft.find((cartItem) => cartItem.id === payload);
      if (!targetItem) {
        throw new Error(`no cartItem with id ${payload}`);
      }
      targetItem.quantity = Math.max(targetItem.quantity + 1, 1);
      break;
    }

    case "DECREMENT_QUANTITY": {
      const targetItem = draft.find((cartItem) => cartItem.id === payload);
      if (!targetItem) {
        throw new Error(`no cartItem with id ${payload}`);
      }
      targetItem.quantity = Math.max(targetItem.quantity - 1, 1);
      break;
    }

    case "CART_ITEMS": {
      return payload;
    }

    default: {
      return draft;
    }
  }
}

function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, dispatch] = usePersistedReducer<CartItem[], Action>(
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
