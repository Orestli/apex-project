import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@/shared/ui/Button/Button';

import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

const Counter: React.FC = () => {
  const { t } = useTranslation();
  const counterValue = useCounterValue();
  const { increment, decrement } = useCounterActions();

  return (
    <div>
      <h1 data-testid="value">{counterValue}</h1>
      <Button onClick={increment} data-testid="increment-value">
        {t('increment')}
      </Button>
      <Button onClick={decrement} data-testid="decrement-value">
        {t('decrement')}
      </Button>
    </div>
  );
};

export default Counter;
