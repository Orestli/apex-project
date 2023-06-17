import cn from 'classnames';
import React, { memo } from 'react';

import styles from './Text.module.scss';

export type TextTheme = 'primary' | 'inverted' | 'error';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 'size_s' | 'size_m' | 'size_l';

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  size_s: 'h3',
  size_m: 'h2',
  size_l: 'h1',
};

interface Props {
  align?: TextAlign;
  className?: string;
  'data-testid'?: string;
  size?: TextSize;
  text?: string;
  theme?: TextTheme;
  title?: string;
}

const Text: React.FC<Props> = ({
  title,
  text,
  theme = 'primary',
  size = 'size_m',
  align = 'left',
  className,
  'data-testid': dataTestId,
}) => {
  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div className={cn(styles[theme], styles[align], styles[size], className)}>
      {title && (
        <HeaderTag
          className={styles.title}
          data-testid={`${dataTestId}-header`}
        >
          {title}
        </HeaderTag>
      )}
      {text && (
        <p className={styles.text} data-testid={`${dataTestId}-paragraph`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default memo(Text);
