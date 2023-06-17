import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { ValidateProfileErrors } from '../../consts/consts';

import { updateProfileData } from './updateProfileData';

const profileData = {
  id: '1',
  username: 'admin',
  age: 18,
  country: Country.Ukraine,
  firstName: 'Test',
  lastName: 'Test',
  city: 'City',
  currency: Currency.UAH,
};

describe('updateProfileData', () => {
  it('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profileData,
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ data: profileData }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profileData);
  });

  it('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profileData,
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileErrors.SERVER_ERROR]);
  });

  it('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: {
          ...profileData,
          lastName: '',
        },
      },
    });

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
  });
});
