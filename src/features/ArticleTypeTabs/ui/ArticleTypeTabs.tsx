import React, { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleType } from '@/entities/Article';
import Tabs, { type TabItem } from '@/shared/ui/Tabs/Tabs';

interface Props {
  className?: string;
  value: ArticleType;
  onChangeType(type: ArticleType): void;
}

const ArticleTypeTabs: React.FC<Props> = ({
  value,
  onChangeType,
  className,
}) => {
  const { t } = useTranslation();

  const typeTabs = useMemo<TabItem<ArticleType>[]>(
    () => [
      { value: ArticleType.ALL, content: t('all') },
      { value: ArticleType.IT, content: t('IT') },
      { value: ArticleType.ECONOMICS, content: t('economics') },
      { value: ArticleType.SCIENCE, content: t('science') },
    ],
    [t],
  );

  const onTabClick = useCallback(
    (tab: TabItem<ArticleType>) => onChangeType(tab.value),
    [onChangeType],
  );

  return (
    <Tabs
      className={className}
      tabs={typeTabs}
      value={value}
      onTabClick={onTabClick}
    />
  );
};

export default memo(ArticleTypeTabs);
