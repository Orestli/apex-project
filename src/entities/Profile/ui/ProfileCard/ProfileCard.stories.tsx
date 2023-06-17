import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.jpg';

import ProfileCard from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  data: {
    username: 'admin',
    age: 18,
    country: Country.Ukraine,
    firstName: 'Test',
    lastName: 'Test',
    city: 'City',
    currency: Currency.UAH,
    avatar,
  },
};

export const WithError = Template.bind({});

WithError.args = {
  error: 'true',
};

export const Loading = Template.bind({});

Loading.args = {
  isLoading: true,
};
