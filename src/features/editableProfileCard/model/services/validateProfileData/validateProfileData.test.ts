import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { ValidateProfileErrors } from '../../consts/consts';

import { validateProfileData } from './validateProfileData';

const profileData = {
  username: 'admin',
  age: 18,
  country: Country.Ukraine,
  firstName: 'Test',
  lastName: 'Test',
  city: 'City',
  currency: Currency.UAH,
};

describe('validateProfileData', () => {
  it('success', async () => {
    const result = validateProfileData(profileData);

    expect(result).toEqual([]);
  });

  it('without firstname and lastname', async () => {
    const result = validateProfileData({
      ...profileData,
      firstName: '',
      lastName: '',
    });

    expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
  });

  it('incorrect age', async () => {
    const result = validateProfileData({
      ...profileData,
      age: undefined,
    });

    expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE]);
  });

  it('incorrect country', async () => {
    const result = validateProfileData({
      ...profileData,
      country: undefined,
    });

    expect(result).toEqual([ValidateProfileErrors.INCORRECT_COUNTRY]);
  });

  it('incorrect all fields', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USER_DATA,
      ValidateProfileErrors.INCORRECT_AGE,
      ValidateProfileErrors.INCORRECT_COUNTRY,
    ]);
  });
});
