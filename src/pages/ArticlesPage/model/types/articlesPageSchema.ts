import type { EntityState } from '@reduxjs/toolkit';

import { type Article, ArticleView } from '@/entities/Article';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import type { SortOrder } from '@/shared/types/sort';

export interface ArticlesPageSchema extends EntityState<Article> {
  error?: string;
  hasMore: boolean;
  inited: boolean;
  isLoading?: boolean;
  limit: number;
  order: SortOrder;
  page: number;
  search: string;
  sort: ArticleSortField;
  type: ArticleType;
  view: ArticleView;
}
