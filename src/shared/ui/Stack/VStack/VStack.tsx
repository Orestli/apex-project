import React from 'react';

import Flex, { FlexProps } from '../Flex/Flex';

type Props = Omit<FlexProps, 'direction'>;

const VStack: React.FC<Props> = ({ align = 'start', ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Flex {...props} direction="column" align={align} />
);

export default VStack;
