import type { StateSchema } from '@/app/providers/StoreProvider';

import { ValidateProfileErrors } from '../../consts/consts';

import { getProfileValidateErrors } from './getProfileValidateErrors';

const errors = [
  ValidateProfileErrors.SERVER_ERROR,
  ValidateProfileErrors.INCORRECT_AGE,
];

describe('getProfileIsLoading', () => {
  it('should return readonly value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: errors,
      },
    };

    expect(getProfileValidateErrors(state as StateSchema)).toBe(errors);
  });

  it('should work with empty value', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileValidateErrors(state as StateSchema)).toBe(undefined);
  });
});
