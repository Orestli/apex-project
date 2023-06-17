import { Listbox as HListBox } from '@headlessui/react';
import cn from 'classnames';
import React, { Fragment, useMemo } from 'react';

import type { DropdownDirection } from '@/shared/types/ui';

import Button from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/consts';
import popupStyles from '../../styles/popup.module.scss';

import styles from './ListBox.module.scss';

export interface ListBoxItem {
  content: React.ReactNode;
  disabled?: boolean;
  value: string;
}

interface ListBoxProps {
  className?: string;
  defaultValue?: string;
  direction?: DropdownDirection;
  items?: ListBoxItem[];
  label?: string;
  readonly?: boolean;
  value?: string;
  onChange(value: string): void;
}

const ListBox: React.FC<ListBoxProps> = ({
  items,
  value,
  defaultValue,
  direction = 'bottom right',
  label,
  onChange,
  readonly,
  className,
}) => {
  const mappedItems = useMemo(
    () =>
      items?.map((item) => (
        <HListBox.Option
          key={item.value}
          value={item.value}
          as={Fragment}
          disabled={item.disabled}
        >
          {({ active, selected }) => (
            <li
              className={cn(
                styles.item,
                active && popupStyles.active,
                item.disabled && popupStyles.disabled,
              )}
            >
              {selected && '+ '}
              {item.content}
            </li>
          )}
        </HListBox.Option>
      )),
    [items],
  );

  return (
    <HStack gap="4">
      {label && <span>{`${label}>`}</span>}
      <HListBox
        as="div"
        className={cn(popupStyles.position, className)}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListBox.Button className={styles.trigger} disabled={readonly}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListBox.Button>
        <HListBox.Options
          className={cn(styles.options, mapDirectionClass[direction])}
        >
          {mappedItems}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
};

export default ListBox;
