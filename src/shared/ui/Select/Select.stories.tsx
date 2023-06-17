import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Select from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Enter value',
  options: [
    { value: '1', content: 'First' },
    { value: '2', content: 'Second' },
  ],
};
