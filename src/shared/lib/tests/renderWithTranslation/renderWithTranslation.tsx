import { type RenderOptions, render } from '@testing-library/react';
import React from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from '@/shared/config/i18n/i18nForTests';

interface Props {
  children: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => (
  <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
);

const renderWithTranslation = (
  ui: React.ReactElement,
  options?: RenderOptions,
) => render(ui, { wrapper: Wrapper, ...options });

export default renderWithTranslation;
