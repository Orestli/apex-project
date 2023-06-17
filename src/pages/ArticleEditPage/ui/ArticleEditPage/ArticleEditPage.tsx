import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { Page } from '@/widgets/Page';

interface Props {
  className?: string;
}

const ArticleEditPage: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  const isEdit = Boolean(id);

  return (
    <Page className={className}>
      {isEdit ? t('edit article') : t('create new article')}
    </Page>
  );
};

export default ArticleEditPage;
