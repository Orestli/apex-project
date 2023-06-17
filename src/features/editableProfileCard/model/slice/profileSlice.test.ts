import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { ValidateProfileErrors } from '../consts/consts';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/editableProfileCardSchema';

import { profileActions, profileReducer } from './profileSlice';

const profileData = {
  username: 'admin',
  age: 18,
  country: Country.Ukraine,
  firstName: 'Test',
  lastName: 'Test',
  city: 'City',
  currency: Currency.UAH,
};

describe('profileSlice', () => {
  it('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };

    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true)),
    ).toStrictEqual({ readonly: true });
  });

  it('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data: profileData,
      form: {
        username: '',
      },
    };

    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
    ).toStrictEqual({
      readonly: true,
      validateErrors: undefined,
      data: profileData,
      form: profileData,
    });
  });

  it('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        username: '123',
      },
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({
          username: '12345',
        }),
      ),
    ).toStrictEqual({
      form: {
        username: '12345',
      },
    });
  });

  it('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileErrors.SERVER_ERROR],
    };

    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending),
    ).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  it('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateErrors: [ValidateProfileErrors.SERVER_ERROR],
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(profileData, ''),
      ),
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      form: profileData,
      data: profileData,
    });
  });
});
