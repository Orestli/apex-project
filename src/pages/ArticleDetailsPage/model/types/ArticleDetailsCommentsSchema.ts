import type { EntityState } from '@reduxjs/toolkit';

import type { Comment } from '@/entities/Comment';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
  error?: string;
  isLoading?: boolean;
}
