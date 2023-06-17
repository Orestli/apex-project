import cn from 'classnames';
import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import DynamicModuleLoader, {
  type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import Button from '@/shared/ui/Button/Button';
import Input from '@/shared/ui/Input/Input';
import { HStack } from '@/shared/ui/Stack';

import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';

import styles from './AddCommentForm.module.scss';

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

interface Props {
  className?: string;
  onSendComment(text: string): void;
}

const AddCommentForm: React.FC<Props> = ({ onSendComment, className }) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const text = useSelector(getAddCommentFormText);

  const onCommentTextChange = useCallback(
    (value: string) => dispatch(addCommentFormActions.setText(value)),
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack
        className={cn(styles.AddCommentForm, className)}
        justify="between"
        max
        data-testid="addCommentForm"
      >
        <Input
          className={styles.input}
          placeholderText={t('enter-comment-text')}
          value={text}
          onChange={onCommentTextChange}
          data-testid="addCommentFormInput"
        />
        <Button
          theme="outline"
          onClick={onSendHandler}
          data-testid="addCommentFormButton"
        >
          {t('send')}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  );
};

export default memo(AddCommentForm);
