import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getUserAuthData, getUserRoles, UserRole } from '@/entities/User';
import { routes } from '@/shared/const/router';

interface Props {
  children: React.ReactNode;
  roles?: UserRole[];
}

const RequireAuth: React.FC<Props> = ({ roles, children }) => {
  const location = useLocation();
  const auth = useSelector(getUserAuthData);
  const userRoles = useSelector(getUserRoles);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) return true;

    return roles.some((requiredRoles) => userRoles?.includes(requiredRoles));
  }, [roles, userRoles]);

  if (!auth) {
    return <Navigate to={routes.index} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return (
      <Navigate to={routes.forbidden} state={{ from: location }} replace />
    );
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default RequireAuth;
