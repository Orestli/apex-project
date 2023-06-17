import { useCallback, useEffect, useRef, useState } from 'react';

interface Props {
  animationDelay?: number;
  isOpen?: boolean;
  onClose?(): void;
}

export const useModal = ({ isOpen, animationDelay, onClose }: Props) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [isMounted, setIsMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const close = useCallback(() => {
    setIsClosing(true);

    timerRef.current = setTimeout(() => {
      onClose?.();
      setIsClosing(false);
    }, animationDelay);
  }, [animationDelay, onClose]);

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
      }
    },
    [close],
  );

  useEffect(
    () => () => {
      if (isOpen) {
        window.addEventListener('keydown', onKeyDown);
      }

      if (timerRef.current) {
        window.removeEventListener('keydown', onKeyDown);

        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      }
    },
    [isOpen, onKeyDown],
  );

  return {
    isClosing,
    isMounted,
    close,
  };
};
