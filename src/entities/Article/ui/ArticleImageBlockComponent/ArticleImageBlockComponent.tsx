import cn from 'classnames';
import React, { memo } from 'react';

import Text from '@/shared/ui/Text/Text';

import type { ArticleImageBlock } from '../../model/types/article';

import styles from './ArticleImageBlockComponent.module.scss';

interface Props {
  block: ArticleImageBlock;
  className?: string;
}

const ArticleImageBlockComponent: React.FC<Props> = ({ block, className }) => {
  return (
    <div className={cn(styles.ArticleImageBlockComponent, className)}>
      <img src={block.src} alt={block.title} className={styles.image} />
      {block.title && <Text text={block.title} align="center" />}
    </div>
  );
};

export default memo(ArticleImageBlockComponent);
