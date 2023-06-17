import cn from 'classnames';
import React, { memo } from 'react';

import styles from './Icon.module.scss';

interface Props extends React.SVGProps<SVGElement> {
  Svg: React.FC<React.SVGProps<SVGElement>>;
  className?: string;
  inverted?: boolean;
}

const Icon: React.FC<Props> = ({ Svg, inverted, className, ...props }) => (
  <Svg
    className={cn(inverted ? styles.inverted : styles.Icon, className)}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);

export default memo(Icon);
