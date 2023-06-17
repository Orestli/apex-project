import type { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { getProfileData } from './getProfileData';

const profileData = {
  username: 'admin',
  age: 18,
  country: Country.Ukraine,
  firstName: 'Test',
  lastName: 'Test',
  city: 'City',
  currency: Currency.UAH,
};

describe('getProfileData', () => {
  it('should return profile data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { data: profileData },
    };

    expect(getProfileData(state as StateSchema)).toEqual(profileData);
  });

  it('should work with empty value', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
