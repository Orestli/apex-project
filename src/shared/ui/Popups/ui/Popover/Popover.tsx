import { Popover as HPopover } from '@headlessui/react';
import cn from 'classnames';
import React from 'react';

import type { DropdownDirection } from '@/shared/types/ui';

import { mapDirectionClass } from '../../styles/consts';
import popupStyles from '../../styles/popup.module.scss';

import styles from './Popover.module.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
  direction?: DropdownDirection;
  trigger: React.ReactNode;
}

const Popover: React.FC<Props> = ({
  direction = 'bottom right',
  trigger,
  className,
  children,
}) => {
  const menuClasses = [mapDirectionClass[direction]];

  return (
    <HPopover className={cn(popupStyles.position, className)}>
      <HPopover.Button as="div" className={popupStyles.trigger}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel className={cn(styles.panel, menuClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
};

export default Popover;
