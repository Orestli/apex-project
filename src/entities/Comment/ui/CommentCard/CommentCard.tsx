import cn from 'classnames';
import React, { memo } from 'react';

import { routes } from '@/shared/const/router';
import AppLink from '@/shared/ui/AppLink/AppLink';
import Avatar from '@/shared/ui/Avatar/Avatar';
import Skeleton from '@/shared/ui/Skeleton/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import Text from '@/shared/ui/Text/Text';

import type { Comment } from '../../model/types/comment';

import styles from './CommentCard.module.scss';

interface Props {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

const CommentCard: React.FC<Props> = ({ comment, isLoading, className }) => {
  if (isLoading) {
    return (
      <VStack
        className={cn(styles.CommentCard, styles.loading, className)}
        gap="8"
        max
        data-testid="commentCardLoading"
      >
        <div className={styles.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={16} className={styles.username} />
        </div>
        <Skeleton className={styles.text} width="100%" height={50} />
      </VStack>
    );
  }

  return comment ? (
    <VStack
      className={cn(styles.CommentCard, className)}
      gap="8"
      max
      data-testid="commentCardContent"
    >
      <AppLink
        to={routes.profile.index(comment.user.id)}
        className={styles.header}
      >
        {comment.user.avatar && <Avatar src={comment.user.avatar} size={30} />}
        <Text className={styles.username} title={comment.user.username} />
      </AppLink>
      <Text className={styles.text} text={comment.text} />
    </VStack>
  ) : null;
};

export default memo(CommentCard);
