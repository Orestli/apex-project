import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import Text from '@/shared/ui/Text/Text';

import { useArticleRecommendationsList } from '../api/articleRecommendationsApi';

interface Props {
  className?: string;
}

export const ArticleRecommendationsList = memo((props: Props) => {
  const { className } = props;
  const { t } = useTranslation();

  const { data: articles, isLoading, error } = useArticleRecommendationsList(3);

  if (isLoading || error || !articles) {
    return null;
  }

  return (
    <VStack
      gap="8"
      className={className}
      data-testid="articleRecommendationsList"
    >
      <Text size="size_l" title={t('recommendations')} />
      <ArticleList articles={articles} target="_blank" />
    </VStack>
  );
});
