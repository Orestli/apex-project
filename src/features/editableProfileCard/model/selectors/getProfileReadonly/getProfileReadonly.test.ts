import type { StateSchema } from '@/app/providers/StoreProvider';

import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileIsLoading', () => {
  it('should return readonly value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { readonly: false },
    };

    expect(getProfileReadonly(state as StateSchema)).toBeFalsy();
  });

  it('should work with empty value', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileReadonly(state as StateSchema)).toBe(undefined);
  });
});
