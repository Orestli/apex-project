import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getArticleDetailsData } from '@/entities/Article';
import { routes } from '@/shared/const/router';
import Button from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';

import { getCanEditArticle } from '../../model/selectors/article';

interface Props {
  className?: string;
}

const ArticleDetailsPageHeader: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const article = useSelector(getArticleDetailsData);
  const canEdit = useSelector(getCanEditArticle);

  const onBackToList = useCallback(
    () => navigate(routes.articles.index),
    [navigate],
  );

  const onEditArticle = useCallback(
    () => navigate(routes.articles.article.index(article?.id || '').edit),
    [article?.id, navigate],
  );

  return (
    <HStack className={className} justify="between" max>
      <Button theme="outline" onClick={onBackToList}>
        {t('back')}
      </Button>
      {canEdit && (
        <Button theme="outline" onClick={onEditArticle}>
          {t('edit')}
        </Button>
      )}
    </HStack>
  );
};

export default memo(ArticleDetailsPageHeader);
