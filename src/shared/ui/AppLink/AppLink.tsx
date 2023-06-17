import cn from 'classnames';
import React, { memo } from 'react';
import { type LinkProps, Link } from 'react-router-dom';

import styles from './AppLink.module.scss';

type LinkTheme = 'primary' | 'secondary';

interface Props extends LinkProps {
  children: React.ReactNode;
  className?: string;
  theme?: LinkTheme;
}

const AppLink: React.FC<Props> = ({
  to,
  className,
  theme = 'props',
  children,
  ...props
}) => (
  <Link
    to={to}
    className={cn(styles.AppLink, styles[theme], className)}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    {children}
  </Link>
);

export default memo(AppLink);
