import cn from 'classnames';
import React, { memo } from 'react';

import Card from '@/shared/ui/Card/Card';
import Text from '@/shared/ui/Text/Text';

import type { Notification } from '../../model/types/notification';

import styles from './NotificationItem.module.scss';

interface Props {
  className?: string;
  item: Notification;
}

const NotificationItem: React.FC<Props> = ({ item, className }) => {
  const content = (
    <Card theme="outlined" className={cn(styles.NotificationItem, className)}>
      <Text title={item.title} text={item.description} />
    </Card>
  );

  return item.href ? (
    <a
      className={styles.link}
      href={item.href}
      target="_blank"
      rel="noreferrer"
    >
      {content}
    </a>
  ) : (
    content
  );
};

export default memo(NotificationItem);
