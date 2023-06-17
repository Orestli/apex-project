import cn from 'classnames';
import React from 'react';

import styles from './Flex.module.scss';

type FlexJustify = 'start' | 'center' | 'end' | 'between';
type FlexAlign = 'start' | 'center' | 'end';
type FlexDirection = 'row' | 'column';
type FlexGap = '4' | '8' | '16' | '32';

const justifyClasses: Record<FlexJustify, string> = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  end: styles.justifyEnd,
  between: styles.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: styles.directionRow,
  column: styles.directorColumn,
};

const gapClasses: Record<FlexGap, string> = {
  4: styles.gap4,
  8: styles.gap8,
  16: styles.gap16,
  32: styles.gap32,
};

export interface FlexProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  align?: FlexAlign;
  children: React.ReactNode;
  className?: string;
  direction?: FlexDirection;
  gap?: FlexGap;
  justify?: FlexJustify;
  max?: boolean;
}

const Flex: React.FC<FlexProps> = ({
  className,
  justify = 'start',
  align = 'center',
  direction = 'row',
  gap,
  max,
  children,
  ...props
}) => {
  const classes = [
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
    className,
  ];

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={cn(styles.Flex, max && styles.max, classes)} {...props}>
      {children}
    </div>
  );
};

export default Flex;
