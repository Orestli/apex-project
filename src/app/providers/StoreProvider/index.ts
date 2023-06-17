import type {
  StateSchema,
  ReduxStoreWithManager,
  ThunkConfig,
  StateSchemaKey,
} from './config/StateSchema';
import { type AppDispatch, createReduxStore } from './config/store';
import StoreProvider from './ui/StoreProvider';

export { StoreProvider, createReduxStore };

export type {
  ReduxStoreWithManager,
  ThunkConfig,
  StateSchema,
  AppDispatch,
  StateSchemaKey,
};
