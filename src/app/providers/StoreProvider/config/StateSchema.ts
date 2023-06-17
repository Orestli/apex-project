/* eslint-disable @typescript-eslint/member-ordering */
import type {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import type { AxiosInstance } from 'axios';

import type { ArticleDetailsSchema } from '@/entities/Article';
import type { CounterSchema } from '@/entities/Counter';
import type { UserSchema } from '@/entities/User';
import type { LoginSchema } from '@/features/AuthByUsername';
import type { AddCommentFormSchema } from '@/features/addCommentForm';
import type { ProfileSchema } from '@/features/editableProfileCard';
import type { ScrollSchema } from '@/features/scroll';
import type { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import type { ArticlesPageSchema } from '@/pages/ArticlesPage';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
  counter: CounterSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
  scroll: ScrollSchema;
  user: UserSchema;
  // Async
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  add(key: StateSchemaKey, reducer: Reducer): void;
  getMountedReducers(): MountedReducers;
  getReducerMap(): ReducersMapObject<StateSchema>;
  reduce(state: StateSchema, action: AnyAction): CombinedState<StateSchema>;
  remove(key: StateSchemaKey): void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  extra: ThunkExtraArg;
  rejectValue: T;
  state: StateSchema;
}
