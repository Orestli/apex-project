import React, { memo, useLayoutEffect, useState } from 'react';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  errorFallback?: React.ReactElement;
  fallback?: React.ReactElement;
}

const AppImage: React.FC<Props> = ({
  src,
  alt = 'preview',
  fallback,
  errorFallback,
  className,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();

    img.src = src ?? '';
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  if (isLoading && fallback) return fallback;

  if (hasError && errorFallback) return errorFallback;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <img className={className} src={src} alt={alt} {...props} />
  );
};

export default memo(AppImage);
