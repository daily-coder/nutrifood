import { useEffect, useState } from "react";
import { ImmerReducer, useImmerReducer } from "use-immer";

function usePersistedReducer<S, A extends { type: string; payload: unknown }>(
  reducer: ImmerReducer<S, A>,
  initialValue: S,
  key: string
) {
  const [store, dispatch] = useImmerReducer(reducer, initialValue);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if (!window.localStorage) {
      return;
    }

    const serializedValue = window.localStorage.getItem(key);

    if (serializedValue !== null) {
      dispatch({
        type: key,
        payload: JSON.parse(serializedValue),
      } as A);
    }
  }, [key, dispatch]);

  useEffect(() => {
    // on initial render, value will be default value which can override
    // locally stored data. so, first step is skipped.
    if (!update) {
      setUpdate(true);
      return;
    }

    window.localStorage?.setItem(key, JSON.stringify(store));
  }, [key, store, update]);

  return [store, dispatch] as const;
}

export default usePersistedReducer;
