import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import Button from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});

Clear.args = {
  children: 'Text',
  theme: 'clear',
};

export const ClearInverted = Template.bind({});

ClearInverted.args = {
  children: 'Text',
  theme: 'clearInverted',
};

export const Outline = Template.bind({});

Outline.args = {
  children: 'Text',
  theme: 'outline',
};

export const OutlineSizeL = Template.bind({});

OutlineSizeL.args = {
  children: 'Text',
  theme: 'outline',
  size: 'size_l',
};

export const OutlineSizeXL = Template.bind({});

OutlineSizeXL.args = {
  children: 'Text',
  theme: 'outline',
  size: 'size_xl',
};

export const OutlineDark = Template.bind({});

OutlineDark.args = {
  children: 'Text',
  theme: 'outline',
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});

BackgroundTheme.args = {
  children: 'Text',
  theme: 'background',
};

export const BackgroundInvertedTheme = Template.bind({});

BackgroundInvertedTheme.args = {
  children: 'Text',
  theme: 'backgroundInverted',
};

export const Square = Template.bind({});

Square.args = {
  children: '>',
  theme: 'backgroundInverted',
  square: true,
};

export const SquareSizeL = Template.bind({});

SquareSizeL.args = {
  children: '>',
  theme: 'backgroundInverted',
  square: true,
  size: 'size_l',
};

export const SquareSizeXL = Template.bind({});

SquareSizeXL.args = {
  children: '>',
  theme: 'backgroundInverted',
  square: true,
  size: 'size_xl',
};

export const Disabled = Template.bind({});

Disabled.args = {
  children: '>',
  theme: 'outline',
  disabled: true,
};
