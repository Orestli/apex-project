import { Menu } from '@headlessui/react';
import cn from 'classnames';
import React, { Fragment, useMemo } from 'react';

import type { DropdownDirection } from '@/shared/types/ui';

import AppLink from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/consts';
import popupStyles from '../../styles/popup.module.scss';

import styles from './Dropdown.module.scss';

export interface DropdownItem {
  content?: React.ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?(): void;
}

interface Props {
  className?: string;
  direction?: DropdownDirection;
  items: DropdownItem[];
  trigger: React.ReactNode;
}

const Dropdown: React.FC<Props> = ({
  items,
  trigger,
  direction = 'bottom right',
  className,
}) => {
  const menuClasses = [mapDirectionClass[direction]];

  const mappedItems = useMemo(
    () =>
      items.map((item, index) => {
        const key = `dropdown-item-${index}`;

        const content = ({ active }: { active: boolean }) => (
          <button
            type="button"
            className={cn(styles.item, active && popupStyles.active)}
            onClick={item.onClick}
            disabled={item.disabled}
          >
            {item.content}
          </button>
        );

        if (item.href) {
          return (
            <Menu.Item
              key={key}
              as={AppLink}
              to={item.href}
              disabled={item.disabled}
            >
              {content}
            </Menu.Item>
          );
        }

        return (
          <Menu.Item key={key} as={Fragment} disabled={item.disabled}>
            {content}
          </Menu.Item>
        );
      }),
    [items],
  );

  return (
    <Menu as="div" className={cn(popupStyles.position, className)}>
      <Menu.Button className={popupStyles.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={cn(styles.menu, menuClasses)}>
        {mappedItems}
      </Menu.Items>
    </Menu>
  );
};

export default Dropdown;
