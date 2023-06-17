import { render } from '@testing-library/react';

import Button from '../Button/Button';

describe('Button', () => {
  it('renders without error', () => {
    const { getByTestId } = render(<Button>Test</Button>);

    const button = getByTestId('button');

    expect(button).toBeInTheDocument();
  });

  it('renders with clear theme', () => {
    const { getByTestId } = render(<Button theme="clear">Test</Button>);

    const button = getByTestId('button');

    expect(button).toHaveClass('clear');
  });
});
