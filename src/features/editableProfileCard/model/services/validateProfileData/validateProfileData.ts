import type { Profile } from '@/entities/Profile';

import { ValidateProfileErrors } from '../../consts/consts';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileErrors.NO_DATA];
  }

  const { firstName, lastName, age, country } = profile;

  const errors: ValidateProfileErrors[] = [];

  if (!firstName || !lastName) {
    errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileErrors.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileErrors.INCORRECT_COUNTRY);
  }

  return errors;
};
