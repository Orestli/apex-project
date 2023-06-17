import { screen } from '@testing-library/react';

import { UserRole } from '@/entities/User';
import { routes } from '@/shared/const/router';
import componentRender from '@/shared/lib/tests/componentRender/componentRender';

import AppRouter from './AppRouter';

describe('AppRouter', () => {
  it('renders page', async () => {
    componentRender(<AppRouter />, {
      route: routes.about,
    });

    const page = await screen.findByTestId('aboutPage');

    expect(page).toBeInTheDocument();
  });

  it('renders not found page', async () => {
    componentRender(<AppRouter />, {
      route: '/test',
    });

    const page = await screen.findByTestId('notFoundPage');

    expect(page).toBeInTheDocument();
  });

  it('redirects unauthorized user to home page', async () => {
    componentRender(<AppRouter />, {
      route: routes.profile.index('1'),
    });

    const page = await screen.findByTestId('mainPage');

    expect(page).toBeInTheDocument();
  });

  it('renders private route for authorized user', async () => {
    componentRender(<AppRouter />, {
      route: routes.profile.index('1'),
      initialState: {
        user: {
          init: true,
          authData: {},
        },
      },
    });

    const page = await screen.findByTestId('profilePage');

    expect(page).toBeInTheDocument();
  });

  it('redirects to forbidden page for user with permissions', async () => {
    componentRender(<AppRouter />, {
      route: routes.admin,
      initialState: {
        user: {
          init: true,
          authData: { roles: [UserRole.ADMIN] },
        },
      },
    });

    const page = await screen.findByTestId('adminPage');

    expect(page).toBeInTheDocument();
  });
});
