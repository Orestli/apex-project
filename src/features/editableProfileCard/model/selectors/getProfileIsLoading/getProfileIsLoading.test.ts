import type { StateSchema } from '@/app/providers/StoreProvider';

import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
  it('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { isLoading: true },
    };

    expect(getProfileIsLoading(state as StateSchema)).toBeTruthy();
  });

  it('should work with empty value', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileIsLoading(state as StateSchema)).toBeFalsy();
  });
});
