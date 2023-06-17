import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@/shared/ui/Button/Button';

interface Props {
  className?: string;
  short?: boolean;
}

const LangSwitcher: React.FC<Props> = ({ short, className }) => {
  const { t, i18n } = useTranslation();

  const toggle = () =>
    i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');

  return (
    <Button className={className} theme="clear" onClick={toggle}>
      {t(short ? 'shorted-lang' : 'lang')}
    </Button>
  );
};

export default memo(LangSwitcher);
