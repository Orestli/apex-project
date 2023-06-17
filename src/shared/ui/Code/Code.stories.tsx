import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Code from './Code';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});

Normal.args = {
  text:
    "import React from 'react';\n" +
    "import type { ComponentMeta, ComponentStory } from '@storybook/react';\n" +
    '\n' +
    "import Code from './Code';\n" +
    '\n' +
    'export default {\n' +
    "  title: 'shared/Code',\n" +
    '  component: Code,\n' +
    '  argTypes: {\n' +
    "    backgroundColor: { control: 'color' },\n" +
    '  },\n' +
    '} as ComponentMeta<typeof Code>;',
};
