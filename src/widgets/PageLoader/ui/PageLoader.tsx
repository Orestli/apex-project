import cn from 'classnames';
import React from 'react';

import Loader from '@/shared/ui/Loader/Loader';

import styles from './PageLoader.module.scss';

interface Props {
  className?: string;
}

const PageLoader: React.FC<Props> = ({ className }) => (
  <div className={cn(styles.PageLoader, className)}>
    <Loader />
  </div>
);

export default PageLoader;
