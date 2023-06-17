import cn from 'classnames';
import React, { useMemo } from 'react';

import AvatarIcon from '@/shared/assets/icons/avatar.svg';

import AppImage from '../AppImage/AppImage';
import Icon from '../Icon/Icon';
import Skeleton from '../Skeleton/Skeleton';

import styles from './Avatar.module.scss';

interface Props {
  alt?: string;
  className?: string;
  size?: number;
  src?: string;
}

const Avatar: React.FC<Props> = ({ src, size = 100, alt, className }) => {
  const sizeStyle = useMemo<React.CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  );

  const fallback = <Skeleton width={size} height={size} border="50%" />;
  const errorFallback = <Icon width={size} height={size} Svg={AvatarIcon} />;

  return (
    <AppImage
      src={src}
      alt={alt}
      className={cn(styles.Avatar, className)}
      style={sizeStyle}
      fallback={fallback}
      errorFallback={errorFallback}
    />
  );
};

export default Avatar;
