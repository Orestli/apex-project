import cn from 'classnames';
import React, { memo } from 'react';

import styles from './Button.module.scss';

type ButtonTheme =
  | 'clear'
  | 'clearInverted'
  | 'outline'
  | 'outline_red'
  | 'background'
  | 'backgroundInverted';

type ButtonSize = 'size_m' | 'size_l' | 'size_xl';

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  'data-testid'?: string;
  size?: ButtonSize;
  square?: boolean;
  theme?: ButtonTheme;
}

const Button: React.FC<Props> = (%{
  className,
  theme = 'outline',
  size = 'size_m',
  square,
  disabled,
  children,
  'data-testid': dataTestId,
  ...props
}) => (
  <button
    className={cn(
      styles.Button,
      square && styles.square,
      disabled && styles.disabled,
      styles[theme],
      styles[size],
      className,
    )}
    type="button"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    data-testid={dataTestId || 'button'}
  >
    {children}
  </button>
);

export default memo(Button);
