import cn from 'classnames';
import React, { memo, useCallback } from 'react';

import CopyIcon from '@/shared/assets/icons/copy.svg';

import Button from '../Button/Button';

import styles from './Code.module.scss';

interface Props {
  className?: string;
  text: string;
}

const Code: React.FC<Props> = ({ text, className }) => {
  const onCopy = useCallback(() => navigator.clipboard.writeText(text), [text]);

  return (
    <pre className={cn(styles.Code, className)}>
      <Button onClick={onCopy} className={styles.copyButton} theme="clear">
        <CopyIcon className={styles.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
};

export default memo(Code);
