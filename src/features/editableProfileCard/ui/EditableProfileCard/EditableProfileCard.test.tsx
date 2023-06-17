import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { $api } from '@/shared/api/api';
import componentRender from '@/shared/lib/tests/componentRender/componentRender';

import { profileReducer } from '../../model/slice/profileSlice';

import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
  id: '1',
  firstName: 'admin',
  lastName: 'admin',
  age: 20,
  currency: Currency.EUR,
  country: Country.Japan,
  city: 'test',
  username: 'username',
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: { authData: { id: '1', username: 'username' } },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('EditableProfileCard', () => {
  it('toggle readonly mode', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('edit-button'));

    expect(screen.getByTestId('cancel-button')).toBeInTheDocument();
  });

  it('reset data after cancel', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('edit-button'));

    const firstNameField = screen.getByTestId('firstName-field');
    const lastNameField = screen.getByTestId('lastName-field');

    await userEvent.clear(firstNameField);
    await userEvent.clear(lastNameField);

    await userEvent.type(firstNameField, 'user');
    await userEvent.type(lastNameField, 'user');

    expect(firstNameField).toHaveValue('user');
    expect(lastNameField).toHaveValue('user');

    await userEvent.click(screen.getByTestId('cancel-button'));

    expect(firstNameField).toHaveValue('admin');
    expect(lastNameField).toHaveValue('admin');
  });

  it('should display validation error message', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('edit-button'));

    await userEvent.clear(screen.getByTestId('firstName-field'));

    await userEvent.click(screen.getByTestId('save-button'));

    expect(screen.getByTestId('text-error-paragraph')).toBeInTheDocument();
  });

  it('should send PUT request', async () => {
    const mockPutRequest = jest.spyOn($api, 'put');

    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('edit-button'));

    await userEvent.type(screen.getByTestId('firstName-field'), 'user');

    await userEvent.click(screen.getByTestId('save-button'));

    expect(mockPutRequest).toHaveBeenCalled();
  });
});
