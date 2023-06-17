import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import Text from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: 'Title lorem',
  text: 'Description',
};

export const Error = Template.bind({});

Error.args = {
  title: 'Title lorem',
  text: 'Description',
  theme: 'error',
};

export const OnlyTitle = Template.bind({});

OnlyTitle.args = {
  title: 'Title lorem',
};

export const OnlyText = Template.bind({});

OnlyText.args = {
  text: 'Description',
};

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {
  title: 'Title lorem',
  text: 'Description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});

OnlyTitleDark.args = {
  title: 'Title lorem',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});

OnlyTextDark.args = {
  text: 'Description',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});

SizeL.args = {
  title: 'Title lorem',
  text: 'Description',
  size: 'size_l',
};

export const SizeM = Template.bind({});

SizeM.args = {
  title: 'Title lorem',
  text: 'Description',
  size: 'size_m',
};

export const SizeS = Template.bind({});

SizeS.args = {
  title: 'Title lorem',
  text: 'Description',
  size: 'size_s',
};
