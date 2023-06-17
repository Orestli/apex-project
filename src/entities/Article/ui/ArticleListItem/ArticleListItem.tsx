import cn from 'classnames';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import EyeIcon from '@/shared/assets/icons/eye.svg';
import { routes } from '@/shared/const/router';
import AppImage from '@/shared/ui/AppImage/AppImage';
import AppLink from '@/shared/ui/AppLink/AppLink';
import Avatar from '@/shared/ui/Avatar/Avatar';
import Button from '@/shared/ui/Button/Button';
import Card from '@/shared/ui/Card/Card';
import Icon from '@/shared/ui/Icon/Icon';
import Skeleton from '@/shared/ui/Skeleton/Skeleton';
import Text from '@/shared/ui/Text/Text';

import { ArticleBlockType, ArticleView } from '../../model/consts/consts';
import { Article, ArticleTextBlock } from '../../model/types/article';
import ArticleTextBlockComponent from '../../ui/ArticleTextBlockComponent/ArticleTextBlockComponent';

import styles from './ArticleListItem.module.scss';

interface Props {
  article: Article;
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
  view: ArticleView;
}

const ArticleListItem: React.FC<Props> = ({
  article,
  view,
  target,
  className,
}) => {
  const { t } = useTranslation();

  const types = (
    <Text text={article.type.join(', ')} className={styles.types} />
  );
  const views = (
    <>
      <Text text={String(article.views)} className={styles.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <div
        className={cn(styles.ArticleListItem, styles[view], className)}
        data-testid="articleListItem"
      >
        <Card className={styles.card}>
          <div className={styles.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={styles.username} />
            <Text text={article.createdAt} className={styles.date} />
          </div>
          <Text title={article.title} className={styles.title} />
          {types}
          <AppImage
            fallback={<Skeleton width="100%" height={250} />}
            src={article.img}
            alt={article.title}
            className={styles.img}
          />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={styles.textBlock}
            />
          )}
          <div className={styles.footer}>
            <AppLink
              to={routes.articles.article.index(article.id).index}
              target={target}
            >
              <Button theme="outline">{t('read more')}</Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      className={cn(styles.ArticleListItem, {}, [className, styles[view]])}
      to={routes.articles.article.index(article.id).index}
      target={target}
      data-testid="articleListItem"
    >
      <Card className={styles.card}>
        <div className={styles.imageWrapper}>
          <AppImage
            fallback={<Skeleton width={200} height={200} />}
            className={styles.img}
            src={article.img}
            alt={article.title}
          />
          <Text text={article.createdAt} className={styles.date} />
        </div>
        <div className={styles.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={styles.title} />
      </Card>
    </AppLink>
  );
};

export default memo(ArticleListItem);
