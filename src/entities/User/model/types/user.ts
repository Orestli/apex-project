import type { FeatureFlags } from '@/shared/types/featureFlags';

import { UserRole } from '../consts/consts';

export interface User {
  avatar?: string;
  features?: FeatureFlags;
  id: string;
  roles?: UserRole[];
  username: string;
}

export interface UserSchema {
  authData?: User;
  init?: boolean;
}
