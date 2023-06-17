import type { StateSchema } from '@/app/providers/StoreProvider';

import {
  getArticleDetailsData,
  getArticleDetailsIsLoading,
  getArticleDetailsError,
} from './articleDetails';

describe('articleDetails', () => {
  it('should return data', () => {
    const data = {
      id: '1',
      title: 'title',
    };

    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    };

    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });

  it('should work with empty state data', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });

  it('should return isLoading', () => {
    const isLoading = true;

    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading,
      },
    };

    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(isLoading);
  });

  it('should work with empty state isLoading', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
  });

  it('should return error', () => {
    const error = 'error';

    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error,
      },
    };

    expect(getArticleDetailsError(state as StateSchema)).toEqual(error);
  });

  it('should work with empty state error', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
  });
});
