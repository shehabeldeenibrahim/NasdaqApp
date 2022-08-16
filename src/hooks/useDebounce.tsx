import { useEffect, useState } from "react";
/**
 * Custom hook to set `value`
 * after `delay` ms
 * @param {string} value value to be set
 * @param {number} delay delay in ms
 */
function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
