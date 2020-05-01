/* eslint-disable import/prefer-default-export */
import React from 'react';
import { PageProvider } from './components/context/PageContext';

// eslint-disable-next-line react/prop-types
const rootElement = ({ element }) => {
  return <PageProvider>{element}</PageProvider>;
};
export default rootElement;
