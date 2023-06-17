import { act, fireEvent } from '@testing-library/react';

import componentRender from '@/shared/lib/tests/componentRender/componentRender';

import Sidebar from './Sidebar';

describe('Sidebar', () => {
  it('renders without error', () => {
    const { getByTestId } = componentRender(<Sidebar />);

    const sidebar = getByTestId('sidebar');

    expect(sidebar).toBeInTheDocument();
  });

  it('renders without error', async () => {
    const { getByTestId } = componentRender(<Sidebar />);

    const sidebar = getByTestId('sidebar');
    const button = getByTestId('sidebar-toggle');

    expect(sidebar).not.toHaveClass('collapsed');

    await act(() => {
      fireEvent.click(button);
    });

    expect(sidebar).toHaveClass('collapsed');
  });
});
