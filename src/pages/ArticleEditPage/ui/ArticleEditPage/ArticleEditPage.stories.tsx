import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import ArticleEditPage from './ArticleEditPage';

export default {
  title: 'pages/ArticleEditPage/ArticleEditPage',
  component: ArticleEditPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => (
  <ArticleEditPage {...args} />
);

export const Normal = Template.bind({});

Normal.args = {};
