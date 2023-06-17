import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import ListBox from '@/shared/ui/Popups/ui/ListBox/ListBox';

import { Country } from '../../model/types/country';

const options = [
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.China, content: Country.China },
  { value: Country.Japan, content: Country.Japan },
  { value: Country.India, content: Country.India },
];

interface Props {
  className?: string;
  readonly?: boolean;
  value?: Country;
  onChange?(value: Country): void;
}

const CountrySelect: React.FC<Props> = ({
  value,
  readonly,
  onChange,
  className,
}) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => onChange?.(value as Country),
    [onChange],
  );

  return (
    <ListBox
      className={className}
      label={t('country')}
      value={value}
      onChange={onChangeHandler}
      items={options}
      defaultValue={t('Select option')}
      readonly={readonly}
      direction="top right"
    />
  );
};

export default memo(CountrySelect);
