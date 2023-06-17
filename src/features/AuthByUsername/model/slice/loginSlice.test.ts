import type { LoginSchema } from '../types/loginSchema';

import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  it('test set username', () => {
    const username = 'test';
    const state: DeepPartial<LoginSchema> = { username };

    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername(username)),
    ).toStrictEqual({ username });
  });

  it('test set password', () => {
    const password = 'test';
    const state: DeepPartial<LoginSchema> = { password };

    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword(password)),
    ).toStrictEqual({ password });
  });
});
