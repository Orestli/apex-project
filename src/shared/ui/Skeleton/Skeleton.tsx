import cn from 'classnames';
import React, { memo } from 'react';

import styles from './Skeleton.module.scss';

interface Props {
  border?: string;
  className?: string;
  height: string | number;
  width?: string | number;
}

const Skeleton: React.FC<Props> = ({ width, height, border, className }) => {
  const style: React.CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return <div className={cn(styles.Skeleton, className)} style={style} />;
};

export default memo(Skeleton);
