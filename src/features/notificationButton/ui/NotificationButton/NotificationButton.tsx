import cn from 'classnames';
import React, { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import { NotificationList } from '@/entities/Notification';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import Button from '@/shared/ui/Button/Button';
import Drawer from '@/shared/ui/Drawer/Drawer';
import Icon from '@/shared/ui/Icon/Icon';
import { Popover } from '@/shared/ui/Popups';

import styles from './NotificationButton.module.scss';

interface Props {
  className?: string;
}

const NotificationButton: React.FC<Props> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => setIsOpen(true), []);
  const onCloseDrawer = useCallback(() => setIsOpen(false), []);

  const trigger = (
    <Button theme="clear" onClick={onOpenDrawer}>
      <Icon Svg={NotificationIcon} inverted />
    </Button>
  );

  return (
    <div>
      <BrowserView>
        <Popover
          className={cn(styles.NotificationButton, className)}
          trigger={trigger}
          direction="bottom left"
        >
          <NotificationList className={styles.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </div>
  );
};

export default memo(NotificationButton);
