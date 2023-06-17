import type { ReducersMapObject } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';

import type { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface Props {
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
  children: React.ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

const StoreProvider: React.FC<Props> = ({
  initialState,
  asyncReducers,
  children,
}) => {
  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
  );

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
