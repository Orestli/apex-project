import cn from 'classnames';
import React, { useState, memo, useEffect, useRef } from 'react';

import styles from './Input.module.scss';

interface Props
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'onChange'
  > {
  autoFocus?: boolean;
  'data-testid'?: string;
  placeholderText?: string;
  onChange?(value: string): void;
}

const Input: React.FC<Props> = ({
  className,
  autoFocus,
  onChange,
  placeholderText,
  readOnly,
  'data-testid': dataTestId,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      inputRef.current?.focus();
    }
  }, [autoFocus]);

  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
    setCaretPosition(event.target.value.length);
  };

  const onSelectHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCaretPosition(event.target.selectionStart || 0);

  const input = (
    <input
      ref={inputRef}
      className={cn(styles.input, readOnly && styles.readonly)}
      type={props.type || 'text'}
      onChange={onChangeHandler}
      onFocus={onFocus}
      onBlur={onBlur}
      onSelect={onSelectHandler}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      data-testid={dataTestId || 'input'}
    />
  );

  return (
    <div className={cn(styles.InputWrapper, className)}>
      {placeholderText && (
        <div className={styles.placeholder}>{`${placeholderText}>`}</div>
      )}
      <div className={styles.caretWrapper}>
        {input}
        {isFocused && !readOnly && (
          <span
            className={styles.caret}
            style={{ left: `${caretPosition * 9}px` }}
          />
        )}
      </div>
    </div>
  );
};

export default memo(Input);
