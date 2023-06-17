import { lazy, Suspense } from 'react';

import Skeleton from '@/shared/ui/Skeleton/Skeleton';

import type { ArticleRatingProps } from './ArticleRating';

const ArticleRating = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
  <Suspense fallback={<Skeleton width="100%" height={140} />}>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <ArticleRating {...props} />
  </Suspense>
);
