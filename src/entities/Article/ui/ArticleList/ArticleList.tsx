import cn from 'classnames';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import Text from '@/shared/ui/Text/Text';

import { ArticleView } from '../../model/consts/consts';
import type { Article } from '../../model/types/article';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton';

import styles from './ArticleList.module.scss';

const getSkeletons = (view: ArticleView) =>
  Array.from({ length: view === ArticleView.SMALL ? 9 : 3 }, (_, index) => (
    <ArticleListItemSkeleton key={index} className={styles.card} view={view} />
  ));

interface Props {
  articles: Article[];
  className?: string;
  isLoading?: boolean;
  target?: React.HTMLAttributeAnchorTarget;
  view?: ArticleView;
}

const ArticleList: React.FC<Props> = ({
  articles,
  isLoading,
  view = ArticleView.SMALL,
  target,
  className,
}) => {
  const { t } = useTranslation();

  if (!isLoading && !articles?.length) {
    return (
      <div className={cn(styles.ArticleList, styles[view], className)}>
        <Text size="size_l" title={t('not found')} />
      </div>
    );
  }

  return (
    <div
      className={cn(styles.ArticleList, styles[view], className)}
      data-testid="articleList"
    >
      {articles.map((article) => (
        <ArticleListItem
          key={article.id}
          className={styles.card}
          article={article}
          view={view}
          target={target}
        />
      ))}
      {isLoading && getSkeletons(view)}
    </div>
  );
};

export default memo(ArticleList);
