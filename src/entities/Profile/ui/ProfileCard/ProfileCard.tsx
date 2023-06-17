import cn from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { CountrySelect, Country } from '@/entities/Country';
import { CurrencySelect, Currency } from '@/entities/Currency';
import Avatar from '@/shared/ui/Avatar/Avatar';
import Input from '@/shared/ui/Input/Input';
import Loader from '@/shared/ui/Loader/Loader';
import { HStack, VStack } from '@/shared/ui/Stack';
import Text from '@/shared/ui/Text/Text';

import type { Profile } from '../../model/types/profile';

import styles from './ProfileCard.module.scss';

interface Props {
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeAge?(value?: string): void;
  onChangeAvatar?(value?: string): void;
  onChangeCity?(value?: string): void;
  onChangeCountry?(country: Country): void;
  onChangeCurrency?(currency: Currency): void;
  onChangeFirstname?(value?: string): void;
  onChangeLastname?(value?: string): void;
  onChangeUsername?(value?: string): void;
}

const ProfileCard: React.FC<Props> = ({
  data,
  isLoading,
  error,
  readonly,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}) => {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <HStack
        className={cn(styles.ProfileCard, styles.loading)}
        justify="center"
        max
      >
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack
        className={cn(styles.ProfileCard, styles.error)}
        justify="center"
        max
      >
        <Text
          theme="error"
          title={t('an-error-occurred-while-loading-the-profile')}
          text={t('try-to-reload-page')}
          align="center"
        />
      </HStack>
    );
  }

  return (
    <VStack
      className={cn(styles.ProfileCard, !readonly && styles.editing)}
      gap="8"
      max
    >
      {data?.avatar && (
        <HStack className={styles.avatarWrapper} justify="center">
          <Avatar src={data?.avatar} />
        </HStack>
      )}
      <Input
        className={styles.input}
        value={data?.firstName}
        placeholderText={t('firstname')}
        onChange={onChangeFirstname}
        readOnly={readonly}
        data-testid="firstName-field"
      />
      <Input
        className={styles.input}
        value={data?.lastName}
        placeholderText={t('lastname')}
        onChange={onChangeLastname}
        readOnly={readonly}
        data-testid="lastName-field"
      />
      <Input
        className={styles.input}
        value={data?.age}
        placeholderText={t('age')}
        onChange={onChangeAge}
        readOnly={readonly}
      />
      <Input
        className={styles.input}
        value={data?.city}
        placeholderText={t('city')}
        onChange={onChangeCity}
        readOnly={readonly}
      />
      <Input
        className={styles.input}
        value={data?.username}
        placeholderText={t('username')}
        onChange={onChangeUsername}
        readOnly={readonly}
      />
      <Input
        className={styles.input}
        value={data?.avatar}
        placeholderText={t('avatar')}
        onChange={onChangeAvatar}
        readOnly={readonly}
      />
      <CurrencySelect
        className={styles.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        className={styles.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </VStack>
  );
};

export default ProfileCard;
