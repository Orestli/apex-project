import { useCallback, useMemo, useState } from 'react';

interface UseHoverHandlers {
  onMouseEnter(): void;
  onMouseLeave(): void;
}

type UserHover = [boolean, UseHoverHandlers];

export const useHover = (): UserHover => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = useCallback(() => setIsHover(true), []);
  const onMouseLeave = useCallback(() => setIsHover(false), []);

  return useMemo(
    () => [isHover, { onMouseEnter, onMouseLeave }],
    [isHover, onMouseEnter, onMouseLeave],
  );
};
