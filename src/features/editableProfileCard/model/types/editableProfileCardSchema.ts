import type { Profile } from '@/entities/Profile';

import { ValidateProfileErrors } from '../consts/consts';

export interface ProfileSchema {
  data?: Profile;
  error?: string;
  form?: Profile;
  isLoading: boolean;
  readonly?: boolean;
  validateErrors?: ValidateProfileErrors[];
}
