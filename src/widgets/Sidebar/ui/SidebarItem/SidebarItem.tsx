import cn from 'classnames';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import AppLink from '@/shared/ui/AppLink/AppLink';

import type { SidebarItemProps } from '../../model/types/sidebar';

import styles from './SidebarItem.module.scss';

interface Props {
  collapsed: boolean;
  item: SidebarItemProps;
}

const SidebarItem: React.FC<Props> = ({ item, collapsed }) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      to={item.path}
      theme="secondary"
      className={cn(styles.item, collapsed && styles.collapsed)}
    >
      <item.Icon className={styles.icon} />
      <span className={styles.link}>{t(item.text)}</span>
    </AppLink>
  );
};

export default memo(SidebarItem);
