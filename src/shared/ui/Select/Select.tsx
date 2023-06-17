import cn from 'classnames';
import React, { memo, useMemo } from 'react';

import styles from './Select.module.scss';

export interface SelectOption<T> {
  content: string;
  value: T;
}

interface Props<T> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  readonly?: boolean;
  value?: T;
  onChange?(value: T): void;
}

const Select = <T extends string | number>({
  label,
  options,
  value,
  readonly,
  onChange,
  className,
}: Props<T>) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) =>
    onChange?.(event.target.value as T);

  const mappedOptions = useMemo(
    () =>
      options?.map((item) => (
        <option key={item.value} className={styles.option} value={item.value}>
          {item.content}
        </option>
      )),
    [options],
  );

  return (
    <div className={cn(styles.Wrapper, className)}>
      {label && <span className={styles.label}>{`${label}>`}</span>}
      <select
        className={styles.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {mappedOptions}
      </select>
    </div>
  );
};

export default memo(Select) as typeof Select;
