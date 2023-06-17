import cn from 'classnames';
import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { NotificationButton } from '@/features/notificationButton';
import { routes } from '@/shared/const/router';
import AppLink from '@/shared/ui/AppLink/AppLink';
import Button from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';
import Text from '@/shared/ui/Text/Text';

import styles from './Navbar.module.scss';

interface Props {
  className?: string;
}

const Navbar: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const authData = useSelector(getUserAuthData);

  const onShowModal = useCallback(() => setIsAuthModal(true), []);
  const onCloseModal = useCallback(() => setIsAuthModal(false), []);

  const authorizedContent = (
    <header className={cn(styles.navbar, className)}>
      <Text className={styles.appName} title={t('Apex')} theme="inverted" />
      <AppLink to={routes.articles.create} theme="secondary">
        {t('create-article')}
      </AppLink>
      <HStack className={styles.actions} gap="16">
        <NotificationButton />
        <AvatarDropdown />
      </HStack>
    </header>
  );

  const unauthorizedContent = (
    <header className={cn(styles.navbar, className)}>
      <Button
        theme="clearInverted"
        className={styles.links}
        onClick={onShowModal}
      >
        {t('sign-in')}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </header>
  );

  return authData ? authorizedContent : unauthorizedContent;
};

export default memo(Navbar);
