import { useEffect, useState } from "react";

export default function usePersistedState(defaultValue, key) {
  const [value, setValue] = useState(defaultValue);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if (!window.localStorage) {
      return;
    }

    const serializedValue = window.localStorage.getItem(key);

    if (serializedValue !== null) {
      setValue(JSON.parse(serializedValue));
    }
  }, [key]);

  useEffect(() => {
    // on initial render, value will be default value which can override
    // locally stored data. so, first step is skipped.
    if (!update) {
      setUpdate(true);
      return;
    }
    window.localStorage?.setItem(key, JSON.stringify(value));
  }, [key, value, update]);

  return [value, setValue];
}
