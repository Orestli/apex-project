import React from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

const ForbiddenPage: React.FC = () => {
  const { t } = useTranslation('about');

  return (
    <Page data-testid="forbiddenPage">{t('you-dont-have-permissions')}</Page>
  );
};

export default ForbiddenPage;
