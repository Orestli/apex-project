import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import DynamicModuleLoader, {
  type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import Button from '@/shared/ui/Button/Button';
import Input from '@/shared/ui/Input/Input';
import Text from '@/shared/ui/Text/Text';

import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import styles from './LoginForm.module.scss';

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

interface Props {
  onSuccess(): void;
}

const LoginForm: React.FC<Props> = ({ onSuccess }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback(
    (value: string) => dispatch(loginActions.setUsername(value)),
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => dispatch(loginActions.setPassword(value)),
    [dispatch],
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, onSuccess, password, username]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={styles.LoginForm}>
        <Text title={t('sign-in')} />
        {error && <Text text={t('auth-error')} theme="error" />}
        <Input
          type="text"
          className={styles.input}
          placeholderText={t('enter-login')}
          value={username}
          onChange={onChangeUsername}
          autoFocus
        />
        <Input
          type="text"
          className={styles.input}
          placeholderText={t('enter-password')}
          value={password}
          onChange={onChangePassword}
        />
        <Button
          theme="outline"
          className={styles.loginButton}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('sign-in')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(LoginForm);
