import cn from 'classnames';
import React from 'react';

import { useModal } from '@/shared/lib/hooks/useModal/useModal';

import Overlay from '../Overlay/Overlay';
import Portal from '../Portal/Portal';

import styles from './Modal.module.scss';

const ANIMATION_DELAY = 300;

interface Props {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  lazy?: boolean;
  onClose?(): void;
}

const Modal: React.FC<Props> = ({
  className,
  isOpen,
  onClose,
  lazy,
  children,
}) => {
  const { isClosing, isMounted, close } = useModal({
    isOpen,
    onClose,
    animationDelay: ANIMATION_DELAY,
  });

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={cn(
          styles.Modal,
          isOpen && styles.opened,
          isClosing && styles.isClosing,
          className,
        )}
      >
        <Overlay onClick={close} />
        <div className={styles.content}>{children}</div>
      </div>
    </Portal>
  );
};

export default Modal;
