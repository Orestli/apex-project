import cn from 'classnames';
import React, { useCallback } from 'react';

import Card from '../Card/Card';

import styles from './Tabs.module.scss';

export interface TabItem<T> {
  content: React.ReactNode;
  value: T;
}

interface Props<T> {
  className?: string;
  tabs: TabItem<T>[];
  value: T;
  onTabClick(tab: TabItem<T>): void;
}

const Tabs = <T extends string>({
  value,
  tabs,
  onTabClick,
  className,
}: Props<T>) => {
  const handleClick = useCallback(
    (tab: TabItem<T>) => () => onTabClick(tab),
    [onTabClick],
  );

  return (
    <div className={cn(styles.Tabs, className)}>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          className={styles.tab}
          theme={tab.value === value ? 'normal' : 'outlined'}
          onClick={handleClick(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};

export default Tabs;
