import type { StateSchema } from '@/app/providers/StoreProvider';

import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
  it('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { isLoading: true },
    };

    expect(getLoginIsLoading(state as StateSchema)).toBeTruthy();
  });

  it('should work with empty value', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginIsLoading(state as StateSchema)).toBeFalsy();
  });
});
