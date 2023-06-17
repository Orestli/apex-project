import cn from 'classnames';
import React, { memo } from 'react';

import { ArticleView } from '@/entities/Article';
import ListIcon from '@/shared/assets/icons/list.svg';
import TilesIcon from '@/shared/assets/icons/tiled.svg';
import Button from '@/shared/ui/Button/Button';
import Icon from '@/shared/ui/Icon/Icon';

import styles from './ArticleViewSelector.module.scss';

const viewTypes = [
  { view: ArticleView.SMALL, icon: ListIcon },
  { view: ArticleView.BIG, icon: TilesIcon },
];

interface Props {
  className?: string;
  view: ArticleView;

  onViewClick?(view: ArticleView): void;
}

const ArticleViewSelector: React.FC<Props> = ({
  view,
  onViewClick,
  className,
}) => {
  const onClick = (newView: ArticleView) => () => onViewClick?.(newView);

  return (
    <div className={cn(styles.ArticleViewSelector, className)}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme="clear"
          onClick={onClick(viewType.view)}
        >
          <Icon
            Svg={viewType.icon}
            className={cn(viewType.view !== view && styles.selected)}
          />
        </Button>
      ))}
    </div>
  );
};

export default memo(ArticleViewSelector);
