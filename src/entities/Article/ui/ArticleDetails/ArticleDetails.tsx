import cn from 'classnames';
import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import DynamicModuleLoader, {
  type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import Avatar from '@/shared/ui/Avatar/Avatar';
import Icon from '@/shared/ui/Icon/Icon';
import Skeleton from '@/shared/ui/Skeleton/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import Text from '@/shared/ui/Text/Text';

import { ArticleBlockType } from '../../model/consts/consts';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import type { ArticleBlock } from '../../model/types/article';
import ArticleCodeBlockComponent from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import ArticleImageBlockComponent from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import styles from './ArticleDetails.module.scss';

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

const renderBlock = (block: ArticleBlock) => {
  switch (block.type) {
    case ArticleBlockType.CODE: {
      return (
        <ArticleCodeBlockComponent
          key={block.id}
          block={block}
          className={styles.block}
        />
      );
    }

    case ArticleBlockType.IMAGE: {
      return (
        <ArticleImageBlockComponent
          key={block.id}
          block={block}
          className={styles.block}
        />
      );
    }

    case ArticleBlockType.TEXT: {
      return (
        <ArticleTextBlockComponent
          key={block.id}
          block={block}
          className={styles.block}
        />
      );
    }

    default: {
      return null;
    }
  }
};

interface Props {
  className?: string;
  id?: string;
}

const ArticleDetails: React.FC<Props> = ({ id, className }) => {
  const { t } = useTranslation('article-details');

  const dispatch = useAppDispatch();

  const article = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={styles.avatar}
          width={200}
          height={200}
          border="50%"
        />
        <Skeleton className={styles.title} width={300} height={32} />
        <Skeleton className={styles.skeleton} width={600} height={24} />
        <Skeleton className={styles.skeleton} width="100%" height={200} />
        <Skeleton className={styles.skeleton} width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        align="center"
        title={t('an-error-occurred-while-loading-the-article')}
      />
    );
  } else {
    content = (
      <>
        <HStack className={styles.avatarWrapper} justify="center" max>
          <Avatar src={article?.img} size={200} className={styles.avatar} />
        </HStack>
        <VStack gap="4" max data-testid="articleDetailsInfo">
          <Text title={article?.title} text={article?.subtitle} size="size_l" />
          <HStack className={styles.articleInfo} gap="8">
            <Icon Svg={EyeIcon} className={styles.icon} />
            <Text text={String(article?.views)} />
          </HStack>
          <HStack className={styles.articleInfo} gap="8">
            <Icon Svg={CalendarIcon} className={styles.icon} />
            <Text text={article?.createdAt} />
          </HStack>
        </VStack>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <VStack className={cn(styles.ArticleDetails, className)} gap="16" max>
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetails);
