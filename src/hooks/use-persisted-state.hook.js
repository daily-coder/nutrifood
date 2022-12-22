import React from "react";

export default function usePersistedState(defaultValue, key) {
  const [value, setValue] = React.useState(defaultValue);

  React.useEffect(() => {
    if (!window.localStorage) {
      return;
    }

    const serializedValue = window.localStorage.getItem(key);

    if (serializedValue !== null) {
      setValue(JSON.parse(serializedValue));
    }
  }, [key]);

  React.useEffect(() => {
    window.localStorage?.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
