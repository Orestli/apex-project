import type { RouteProps } from 'react-router-dom';

// eslint-disable-next-line orestli/layer-imports
import { UserRole } from '@/entities/User';

export interface AppRoutesProps extends RouteProps {
  authOnly?: boolean;
  roles?: UserRole[];
}
