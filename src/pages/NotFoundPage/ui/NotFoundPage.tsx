import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './NotFoundPage.module.scss';

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.NotFoundPage} data-testid="notFoundPage">
      {t('page-is-not-found')}
    </div>
  );
};

export default NotFoundPage;
