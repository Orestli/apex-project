import cn from 'classnames';
import React, { useRef, memo } from 'react';
import { useSelector } from 'react-redux';

import type { StateSchema } from '@/app/providers/StoreProvider';
import { getScrollByPath, scrollActions } from '@/features/scroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import type { TestProps } from '@/shared/types/tests';

import styles from './Page.module.scss';

export const PAGE_ID = 'PAGE_ID';

interface Props extends TestProps {
  children: React.ReactNode;
  className?: string;
  onScrollEnd?(): void;
}

const Page: React.FC<Props> = ({
  onScrollEnd,
  children,
  className,
  'data-testid': dataTestId,
}) => {
  const wrapperRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const dispatch = useAppDispatch();
  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollByPath(state, window.location.pathname),
  );

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle(
    (event: React.UIEvent<HTMLDivElement>) =>
      dispatch(
        scrollActions.setScrollPosition({
          position: event.currentTarget.scrollTop,
          path: window.location.pathname,
        }),
      ),
    500,
  );

  return (
    <main
      ref={wrapperRef}
      id={PAGE_ID}
      className={cn(styles.Page, className)}
      onScroll={onScroll}
      data-testid={dataTestId || 'page'}
    >
      {children}
      {onScrollEnd && <div className={styles.trigger} ref={triggerRef} />}
    </main>
  );
};

export default memo(Page);
