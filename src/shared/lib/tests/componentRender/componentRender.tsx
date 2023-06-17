/* eslint-disable orestli/layer-imports */
import { ReducersMapObject } from '@reduxjs/toolkit';
import { type RenderOptions, render } from '@testing-library/react';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import i18n from '@/shared/config/i18n/i18nForTests';
import { Theme } from '@/shared/const/theme';
import '@/app/styles/index.scss';

interface Props {
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
  children: React.ReactElement;
  initialState?: DeepPartial<StateSchema>;
  route?: string;
  theme?: Theme;
}

export const TestProvider = ({
  route = '/',
  initialState,
  asyncReducers,
  theme,
  children,
}: Props) => {
  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>{children}</div>
          </ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
};

const Wrapper: React.FC<Props> = ({
  route = '/',
  initialState,
  asyncReducers,
  theme = Theme.LIGHT,
  children,
}) => (
  <TestProvider
    route={route}
    initialState={initialState}
    asyncReducers={asyncReducers}
    theme={theme}
  >
    {children}
  </TestProvider>
);

const componentRender = (
  ui: React.ReactElement,
  uiProps?: Omit<Props, 'children'>,
  options?: RenderOptions,
) =>
  render(ui, {
    // eslint-disable-next-line react/jsx-props-no-spreading
    wrapper: ({ children }) => <Wrapper {...uiProps}>{children}</Wrapper>,
    ...options,
  });

export default componentRender;
