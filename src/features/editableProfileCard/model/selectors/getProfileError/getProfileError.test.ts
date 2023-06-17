import type { StateSchema } from '@/app/providers/StoreProvider';

import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  it('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { error: 'error message' },
    };

    expect(getProfileError(state as StateSchema)).toEqual('error message');
  });

  it('should work with empty value', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
