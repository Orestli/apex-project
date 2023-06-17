import cn from 'classnames';
import React, { memo } from 'react';

import cls from './Overlay.module.scss';

interface Props {
  className?: string;
  onClick?(): void;
}

const Overlay: React.FC<Props> = ({ onClick, className }) => {
  return <div onClick={onClick} className={cn(cls.Overlay, className)} />;
};

export default memo(Overlay);
