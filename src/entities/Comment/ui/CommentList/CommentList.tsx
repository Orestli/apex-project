import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { VStack } from '@/shared/ui/Stack';
import Text from '@/shared/ui/Text/Text';

import type { Comment } from '../../model/types/comment';
import CommentCard from '../CommentCard/CommentCard';

interface Props {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

const CommentList: React.FC<Props> = ({ comments, isLoading, className }) => {
  const { t } = useTranslation('article-details');

  if (isLoading) {
    return (
      <VStack className={className} gap="16">
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    );
  }

  return (
    <VStack className={className} gap="16" max>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            key={comment.id}
            isLoading={isLoading}
            comment={comment}
          />
        ))
      ) : (
        <Text text={t('no-comments')} />
      )}
    </VStack>
  );
};

export default memo(CommentList);
