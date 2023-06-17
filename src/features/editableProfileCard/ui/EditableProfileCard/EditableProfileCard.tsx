import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from '@/entities/Profile';
import DynamicModuleLoader, {
  type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/Stack';
import Text from '@/shared/ui/Text/Text';

import { ValidateProfileErrors } from '../../model/consts/consts';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import EditableProfileCardHeader from '../EditableProfileCardHeader/EditableProfileCardHeader';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface EditableProfileCardProps {
  className?: string;
  id?: string;
}

export const EditableProfileCard = memo(
  ({ id, className }: EditableProfileCardProps) => {
    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
      [ValidateProfileErrors.SERVER_ERROR]: t('server-error'),
      [ValidateProfileErrors.INCORRECT_COUNTRY]: t('incorrect-country'),
      [ValidateProfileErrors.NO_DATA]: t('date-not-specified'),
      [ValidateProfileErrors.INCORRECT_USER_DATA]: t('incorrect-profile-data'),
      [ValidateProfileErrors.INCORRECT_AGE]: t('incorrect-age'),
    };

    useInitialEffect(() => {
      if (id) {
        dispatch(fetchProfileData(id));
      }
    });

    const onChangeFirstname = useCallback(
      (value?: string) =>
        dispatch(profileActions.updateProfile({ firstName: value || '' })),
      [dispatch],
    );

    const onChangeLastname = useCallback(
      (value?: string) =>
        dispatch(profileActions.updateProfile({ lastName: value || '' })),
      [dispatch],
    );

    const onChangeAge = useCallback(
      (value?: string) =>
        dispatch(profileActions.updateProfile({ age: Number(value || 0) })),
      [dispatch],
    );

    const onChangeCity = useCallback(
      (value?: string) =>
        dispatch(profileActions.updateProfile({ city: value || '' })),
      [dispatch],
    );

    const onChangeUsername = useCallback(
      (value?: string) =>
        dispatch(profileActions.updateProfile({ username: value || '' })),
      [dispatch],
    );

    const onChangeAvatar = useCallback(
      (value?: string) =>
        dispatch(profileActions.updateProfile({ avatar: value || '' })),
      [dispatch],
    );

    const onChangeCurrency = useCallback(
      (currency: Currency) =>
        dispatch(profileActions.updateProfile({ currency })),
      [dispatch],
    );

    const onChangeCountry = useCallback(
      (country: Country) => dispatch(profileActions.updateProfile({ country })),
      [dispatch],
    );

    return (
      <DynamicModuleLoader reducers={reducers}>
        <VStack className={className} gap="8" max>
          <EditableProfileCardHeader />
          {validateErrors?.length &&
            validateErrors.map((error) => (
              <Text
                key={error}
                theme="error"
                text={validateErrorTranslates[error]}
                data-testid="text-error"
              />
            ))}
          <ProfileCard
            data={formData}
            isLoading={isLoading}
            error={error}
            readonly={readonly}
            onChangeFirstname={onChangeFirstname}
            onChangeLastname={onChangeLastname}
            onChangeAge={onChangeAge}
            onChangeCity={onChangeCity}
            onChangeUsername={onChangeUsername}
            onChangeAvatar={onChangeAvatar}
            onChangeCurrency={onChangeCurrency}
            onChangeCountry={onChangeCountry}
          />
        </VStack>
      </DynamicModuleLoader>
    );
  },
);
