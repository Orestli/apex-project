import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@/shared/ui/Button/Button';

import styles from './PageError.module.scss';

const PageError: React.FC = () => {
  const { t } = useTranslation();

  const reloadPage = () => window.location.reload();

  return (
    <div className={styles.PageError}>
      <p>{t('something-went-wrong')}</p>
      <Button onClick={reloadPage}>{t('reload-page')}</Button>
    </div>
  );
};

export default PageError;
