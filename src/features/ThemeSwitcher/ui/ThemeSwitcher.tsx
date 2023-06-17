import React, { memo } from 'react';

import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import Button from '@/shared/ui/Button/Button';

interface Props {
  className?: string;
}

const ThemeSwitcher: React.FC<Props> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button theme="clear" className={className} onClick={toggleTheme}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};

export default memo(ThemeSwitcher);
