import cn from 'classnames';
import React, { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import DynamicModuleLoader, {
  type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from '@/widgets/Page';

import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import ArticleInfiniteList from '../ArticleInfiniteList/ArticleInfiniteList';
import ArticlesPageFilters from '../ArticlesPageFilters/ArticlesPageFilters';

import styles from './ArticlesPage.module.scss';

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

interface Props {
  className?: string;
}

const ArticlesPage: React.FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const onLoadNextPart = useCallback(
    () => dispatch(fetchNextArticlesPage()),
    [dispatch],
  );

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        className={cn(styles.ArticlesPage, className)}
        onScrollEnd={onLoadNextPart}
        data-testid="articlesPage"
      >
        <ArticlesPageFilters />
        <ArticleInfiniteList className={styles.list} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
