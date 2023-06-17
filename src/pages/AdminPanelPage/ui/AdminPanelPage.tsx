import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

const AdminPanelPage = () => {
  const { t } = useTranslation('about');

  return <Page data-testid="adminPage">{t('admin page')}</Page>;
};

export default AdminPanelPage;
