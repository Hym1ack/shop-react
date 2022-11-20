import { useEffect, useState } from "react";

function useDebounce(value, timeDelay) {
  const [debValue, setDebValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebValue(value);
    }, timeDelay);

    return () => clearTimeout(handler);
  }, [timeDelay, value]);

  return debValue;
}

export { useDebounce };
