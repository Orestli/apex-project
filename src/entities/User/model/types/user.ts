import { UserRole } from '../consts/consts';

export interface User {
  avatar?: string;
  id: string;
  roles?: UserRole[];
  username: string;
}

export interface UserSchema {
  authData?: User;
  init?: boolean;
}
