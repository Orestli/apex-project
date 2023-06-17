import React from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: React.ReactNode;
  element?: HTMLElement;
}

const Portal: React.FC<Props> = ({ element = document.body, children }) =>
  createPortal(children, element);

export default Portal;
