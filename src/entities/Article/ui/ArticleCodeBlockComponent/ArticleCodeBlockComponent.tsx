import cn from 'classnames';
import React, { memo } from 'react';

import Code from '@/shared/ui/Code/Code';

import type { ArticleCodeBlock } from '../../model/types/article';

import styles from './ArticleCodeBlockComponent.module.scss';

interface Props {
  block: ArticleCodeBlock;
  className?: string;
}

const ArticleCodeBlockComponent: React.FC<Props> = ({ block, className }) => {
  return (
    <div className={cn(styles.ArticleCodeBlockComponent, className)}>
      <Code text={block.code} />
    </div>
  );
};

export default memo(ArticleCodeBlockComponent);
