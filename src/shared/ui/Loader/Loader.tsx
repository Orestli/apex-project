import cn from 'classnames';
import React from 'react';
import './Loader.scss';

interface Props {
  className?: string;
}

const Loader: React.FC<Props> = ({ className }) => (
  <div className={cn('lds-ripple', className)}>
    <div />
    <div />
  </div>
);

export default Loader;
