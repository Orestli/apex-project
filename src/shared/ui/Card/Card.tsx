import cn from 'classnames';
import React, { memo } from 'react';

import styles from './Card.module.scss';

type CardTheme = 'normal' | 'outlined';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  theme?: CardTheme;
}

const Card: React.FC<Props> = ({
  theme = 'normal',
  children,
  fullWidth,
  className,
  ...props
}) => (
  <div
    className={cn(
      styles.Card,
      fullWidth && styles.fullWidth,
      styles[theme],
      className,
    )}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    {children}
  </div>
);

export default memo(Card);
