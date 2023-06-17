import cn from 'classnames';
import React, { memo } from 'react';

import Skeleton from '@/shared/ui/Skeleton/Skeleton';
import { VStack } from '@/shared/ui/Stack';

import { useNotification } from '../../api/notificationApi';
import NotificationItem from '../NotificationItem/NotificationItem';

import styles from './NotificationList.module.scss';

const POLLING_INTERVAL = 10_000;

interface Props {
  className?: string;
}

const NotificationList: React.FC<Props> = ({ className }) => {
  const { data, isLoading } = useNotification(undefined, {
    pollingInterval: POLLING_INTERVAL,
  });

  if (isLoading) {
    return (
      <VStack className={cn(styles.NotificationList, className)} gap="16" max>
        <Skeleton width="100%" height="80px" border="8px" />
        <Skeleton width="100%" height="80px" border="8px" />
        <Skeleton width="100%" height="80px" border="8px" />
      </VStack>
    );
  }

  return (
    <VStack className={cn(styles.NotificationList, className)} gap="16" max>
      {data?.map((item) => (
        <NotificationItem key={item.id} item={item} />
      ))}
    </VStack>
  );
};

export default memo(NotificationList);
