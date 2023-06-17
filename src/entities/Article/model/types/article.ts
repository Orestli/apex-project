import type { User } from '@/entities/User';

import { ArticleBlockType, ArticleType } from '../consts/consts';

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  code: string;
  type: ArticleBlockType.CODE;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  src: string;
  title: string;
  type: ArticleBlockType.IMAGE;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  paragraphs: string[];
  title?: string;
  type: ArticleBlockType.TEXT;
}

export type ArticleBlock =
  | ArticleCodeBlock
  | ArticleImageBlock
  | ArticleTextBlock;

export interface Article {
  blocks: ArticleBlock[];
  createdAt: string;
  id: string;
  img: string;
  subtitle: string;
  title: string;
  type: ArticleType[];
  user: User;
  views: number;
}
