import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import Skeleton from '@/shared/ui/Skeleton/Skeleton';

import {
  useGetArticleRating,
  useRateArticle,
} from '../../api/ArticleRatingApi';

export interface ArticleRatingProps {
  articleId: string;
  className?: string;
}

const ArticleRating: React.FC<ArticleRatingProps> = ({
  articleId,
  className,
}) => {
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: userData?.id || '',
  });
  const [rateArticleMutation] = useRateArticle();

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          userId: userData?.id ?? '',
          articleId,
          rate: starsCount,
          feedback,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [articleId, rateArticleMutation, userData?.id],
  );

  const onCancel = useCallback(
    (starsCount: number) => handleRateArticle(starsCount),
    [handleRateArticle],
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) =>
      handleRateArticle(starsCount, feedback),
    [handleRateArticle],
  );

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      rate={rating?.rate}
      className={className}
      title={t('rate-article')}
      feedBackTitle={t('leave-your-review')}
      onCancel={onCancel}
      onAccept={onAccept}
      hasFeedback
    />
  );
};

export default memo(ArticleRating);
