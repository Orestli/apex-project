import { useCallback, useRef } from 'react';

export const useThrottle = <T extends unknown[]>(
  callback: (...args: T) => void,
  delay: number,
) => {
  const throttleRef = useRef(false);

  return useCallback(
    (...args: T) => {
      if (!throttleRef.current) {
        callback(...args);
        throttleRef.current = true;

        setTimeout(() => {
          throttleRef.current = false;
        }, delay);
      }
    },
    [callback, delay],
  );
};
