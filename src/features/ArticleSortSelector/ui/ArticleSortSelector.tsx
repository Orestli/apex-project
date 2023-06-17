import cn from 'classnames';
import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortField } from '@/entities/Article';
import type { SortOrder } from '@/shared/types/sort';
import Select, { type SelectOption } from '@/shared/ui/Select/Select';

import styles from './ArticleSortSelector.module.scss';

interface Props {
  className?: string;
  order: SortOrder;
  sort: ArticleSortField;
  onChangeOrder(newOrder: SortOrder): void;
  onChangeSort(newSort: ArticleSortField): void;
}

const ArticleSortSelector: React.FC<Props> = ({
  sort,
  order,
  onChangeSort,
  onChangeOrder,
  className,
}) => {
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      { value: 'asc', content: t('ascending') },
      { value: 'desc', content: t('descending') },
    ],
    [t],
  );

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      { value: ArticleSortField.CREATED, content: t('date') },
      { value: ArticleSortField.TITLE, content: t('title') },
      { value: ArticleSortField.VIEWS, content: t('views') },
    ],
    [t],
  );

  return (
    <div className={cn(styles.ArticleSortSelector, className)}>
      <Select
        label={t('sort by')}
        options={sortFieldOptions}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        className={styles.order}
        label={t('by')}
        options={orderOptions}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
};

export default memo(ArticleSortSelector);
