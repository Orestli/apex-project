import cn from 'classnames';
import React, { memo } from 'react';

import Card from '@/shared/ui/Card/Card';
import Skeleton from '@/shared/ui/Skeleton/Skeleton';

import { ArticleView } from '../../model/consts/consts';

import styles from './ArticleListItem.module.scss';

interface Props {
  className?: string;
  view: ArticleView;
}

const ArticleListItemSkeleton: React.FC<Props> = ({ view, className }) => {
  if (view === ArticleView.BIG) {
    return (
      <div className={cn(styles.ArticleListItem, styles[view], className)}>
        <Card className={styles.card}>
          <div className={styles.header}>
            <Skeleton border="50%" width={30} height={30} />
            <Skeleton width={150} height={16} className={styles.username} />
            <Skeleton width={150} height={16} className={styles.date} />
          </div>
          <Skeleton width={250} height={24} className={styles.title} />
          <Skeleton height={200} className={styles.img} />
          <div className={styles.footer}>
            <Skeleton width={200} height={36} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={cn(styles.ArticleListItem, styles[view], className)}>
      <Card className={styles.card}>
        <div className={styles.imageWrapper}>
          <Skeleton width={200} height={200} className={styles.img} />
        </div>
        <div className={styles.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} className={styles.title} />
      </Card>
    </div>
  );
};

export default memo(ArticleListItemSkeleton);
