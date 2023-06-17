import cn from 'classnames';
import React, { memo, useState } from 'react';

import StarIcon from '@/shared/assets/icons/star.svg';

import Icon from '../Icon/Icon';

import styles from './StartRating.module.scss';

const starts = Array.from({ length: 5 }, (_, i) => i + 1);

interface Props {
  className?: string;
  selectedStars?: number;
  size?: number;
  onSelect?(starsCount: number): void;
}

const StartRating: React.FC<Props> = ({
  size = 30,
  selectedStars = 0,
  onSelect,
  className,
}) => {
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={cn(styles.StartRating, {}, [className])}>
      {starts.map((star) => (
        <Icon
          key={star}
          className={cn(
            styles.starIcon,
            isSelected && styles.selected,
            currentStarsCount >= star ? styles.hovered : styles.normal,
          )}
          Svg={StarIcon}
          width={size}
          height={size}
          onMouseEnter={onHover(star)}
          onMouseLeave={onLeave}
          onClick={onClick(star)}
          data-testid={`startRating-${star}`}
          data-selected={currentStarsCount >= star}
        />
      ))}
    </div>
  );
};

export default memo(StartRating);
