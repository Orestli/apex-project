import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import Button from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';
import Text from '@/shared/ui/Text/Text';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

interface Props {
  className?: string;
}

const EditableProfileCardHeader: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);

  const onEdit = useCallback(
    () => dispatch(profileActions.setReadonly(false)),
    [dispatch],
  );

  const onCancelEdit = useCallback(
    () => dispatch(profileActions.cancelEdit()),
    [dispatch],
  );

  const onSave = useCallback(() => dispatch(updateProfileData()), [dispatch]);

  const canEdit = authData?.id === profileData?.id;

  return (
    <HStack justify="between" max className={className}>
      <Text title={t('profile')} />
      {canEdit && (
        <div>
          {readonly ? (
            <Button theme="outline" onClick={onEdit} data-testid="edit-button">
              {t('edit')}
            </Button>
          ) : (
            <HStack gap="8">
              <Button
                theme="outline_red"
                onClick={onCancelEdit}
                data-testid="cancel-button"
              >
                {t('cancel')}
              </Button>
              <Button
                theme="outline"
                onClick={onSave}
                data-testid="save-button"
              >
                {t('save')}
              </Button>
            </HStack>
          )}
        </div>
      )}
    </HStack>
  );
};

export default memo(EditableProfileCardHeader);
