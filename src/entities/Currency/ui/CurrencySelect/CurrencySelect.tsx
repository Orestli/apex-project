import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import ListBox from '@/shared/ui/Popups/ui/ListBox/ListBox';

import { Currency } from '../../model/types/currency';

const options = [
  { value: Currency.UAH, content: Currency.UAH },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
];

interface Props {
  className?: string;
  readonly?: boolean;
  value?: Currency;
  onChange?(value: Currency): void;
}

const CurrencySelect: React.FC<Props> = ({
  value,
  readonly,
  onChange,
  className,
}) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => onChange?.(value as Currency),
    [onChange],
  );

  return (
    <ListBox
      className={className}
      label={t('currency')}
      value={value}
      onChange={onChangeHandler}
      items={options}
      defaultValue={t('Select option')}
      readonly={readonly}
      direction="top right"
    />
  );
};

export default memo(CurrencySelect);
