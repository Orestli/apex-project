import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ArticleList } from '@/entities/Article';
import Text from '@/shared/ui/Text/Text';

import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { getArticles } from '../../model/slices/articlesPageSlice';

interface Props {
  className?: string;
}

const ArticleInfiniteList: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  if (error) {
    return <Text text={t('error')} />;
  }

  return (
    <ArticleList
      className={className}
      view={view}
      articles={articles}
      isLoading={isLoading}
    />
  );
};

export default memo(ArticleInfiniteList);
