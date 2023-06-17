import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return <Page data-testid="aboutPage">{t('about-page')}</Page>;
};

export default AboutPage;
