import type { StateSchema } from '@/app/providers/StoreProvider';

import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  it('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { password: 'password' },
    };

    expect(getLoginPassword(state as StateSchema)).toEqual('password');
  });

  it('should work with empty value', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
