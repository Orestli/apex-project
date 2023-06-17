import cn from 'classnames';
import React, { memo } from 'react';

import Text from '@/shared/ui/Text/Text';

import type { ArticleTextBlock } from '../../model/types/article';

import styles from './ArticleTextBlockComponent.module.scss';

interface Props {
  block: ArticleTextBlock;
  className?: string;
}

const ArticleTextBlockComponent: React.FC<Props> = ({ block, className }) => {
  return (
    <div className={cn(styles.ArticleCodeBlockComponent, className)}>
      {block.title && <Text title={block.title} className={styles.title} />}
      {block.paragraphs.map((paragraph) => (
        <Text key={paragraph} text={paragraph} className={styles.paragraph} />
      ))}
    </div>
  );
};

export default memo(ArticleTextBlockComponent);
