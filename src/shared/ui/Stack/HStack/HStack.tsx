import React from 'react';

import Flex, { FlexProps } from '../Flex/Flex';

type Props = Omit<FlexProps, 'direction'>;

const HStack: React.FC<Props> = ({ ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Flex direction="row" {...props} />
);

export default HStack;
