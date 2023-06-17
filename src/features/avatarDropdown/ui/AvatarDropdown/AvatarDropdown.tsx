import React, { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from '@/entities/User';
import { routes } from '@/shared/const/router';
import Avatar from '@/shared/ui/Avatar/Avatar';
import Dropdown from '@/shared/ui/Popups/ui/Dropdown/Dropdown';

interface Props {
  className?: string;
}

const AvatarDropdown: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const onLogout = useCallback(
    () => dispatch(userActions.logout()),
    [dispatch],
  );

  const isAdminPanelAvailable = isAdmin || isManager;

  const dropdownItems = useMemo(
    () => [
      ...(isAdminPanelAvailable
        ? [{ content: t('admin'), href: routes.admin }]
        : []),
      { content: t('profile'), href: routes.profile.index(authData?.id || '') },
      { content: t('sign-out'), onClick: onLogout },
    ],
    [authData?.id, isAdminPanelAvailable, onLogout, t],
  );

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      className={className}
      direction="bottom left"
      trigger={<Avatar size={30} src={authData.avatar} />}
      items={dropdownItems}
    />
  );
};

export default memo(AvatarDropdown);
