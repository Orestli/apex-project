import { userEvent } from '@storybook/testing-library';

import componentRender from '@/shared/lib/tests/componentRender/componentRender';

import Counter from './Counter';

const initialState = { counter: { value: 10 } };

describe('Counter', () => {
  it('test render', () => {
    const { getByTestId } = componentRender(<Counter />, { initialState });

    const value = getByTestId('value');

    expect(value).toHaveTextContent('10');
  });

  it('increment value', () => {
    const { getByTestId } = componentRender(<Counter />, { initialState });

    const value = getByTestId('value');
    const incrementButton = getByTestId('increment-value');

    userEvent.click(incrementButton);

    expect(value).toHaveTextContent('11');
  });

  it('decrement value', () => {
    const { getByTestId } = componentRender(<Counter />, { initialState });

    const value = getByTestId('value');
    const decrementButton = getByTestId('decrement-value');

    userEvent.click(decrementButton);

    expect(value).toHaveTextContent('9');
  });
});
