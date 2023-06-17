import type { Article } from '../types/article';

export interface ArticleDetailsSchema {
  data?: Article;
  error?: string;
  isLoading: boolean;
}
