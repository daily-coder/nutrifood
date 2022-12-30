import { useEffect, useReducer, useState } from "react";

function usePersistedReducer(reducer, initialValue, key) {
  const [store, dispatch] = useReducer(reducer, initialValue);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if (!window.localStorage) {
      return;
    }

    const serializedValue = window.localStorage.getItem(key);

    if (serializedValue !== null) {
      dispatch({
        type: key,
        payload: { value: JSON.parse(serializedValue) },
      });
    }
  }, [key]);

  useEffect(() => {
    // on initial render, value will be default value which can override
    // locally stored data. so, first step is skipped.
    if (!update) {
      setUpdate(true);
      return;
    }

    window.localStorage?.setItem(key, JSON.stringify(store));
  }, [key, store, update]);

  return [store, dispatch];
}

export default usePersistedReducer;
