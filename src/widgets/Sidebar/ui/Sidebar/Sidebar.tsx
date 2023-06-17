import cn from 'classnames';
import React, { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import Button from '@/shared/ui/Button/Button';
import VStack from '@/shared/ui/Stack/VStack/VStack';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import SidebarItem from '../SidebarItem/SidebarItem';

import styles from './Sidebar.module.scss';

interface Props {
  'data-testid'?: string;
}

const Sidebar: React.FC<Props> = ({ 'data-testid': dataTestId }) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => setCollapsed((prev) => !prev);

  const mappedItems = useMemo(
    () =>
      sidebarItemsList.map((item) => (
        <SidebarItem key={item.path} item={item} collapsed={collapsed} />
      )),
    [collapsed, sidebarItemsList],
  );

  return (
    <aside
      className={cn(styles.Sidebar, collapsed && styles.collapsed)}
      data-testid={dataTestId || 'sidebar'}
    >
      <Button
        theme="backgroundInverted"
        className={styles.collapsedBtn}
        onClick={onToggle}
        size="size_l"
        square
        data-testid="sidebar-toggle"
      >
        {collapsed ? '>' : '<'}
      </Button>
      <VStack role="navigation" className={styles.items} gap="8">
        {mappedItems}
      </VStack>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} short={collapsed} />
      </div>
    </aside>
  );
};

export default memo(Sidebar);
