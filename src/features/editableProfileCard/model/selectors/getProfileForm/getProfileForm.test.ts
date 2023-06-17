import type { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { getProfileForm } from './getProfileForm';

const profileData = {
  username: 'admin',
  age: 18,
  country: Country.Ukraine,
  firstName: 'Test',
  lastName: 'Test',
  city: 'City',
  currency: Currency.UAH,
};

describe('getProfileForm', () => {
  it('should return form data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { form: profileData },
    };

    expect(getProfileForm(state as StateSchema)).toEqual(profileData);
  });

  it('should work with empty value', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
