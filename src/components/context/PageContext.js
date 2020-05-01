import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const PageContext = createContext({
  activeContent: '',
  setActiveContent: () => {},
});
export const PageProvider = ({ children }) => {
  const [activeContent, setActiveContent] = useState('home');
  return (
    <PageContext.Provider value={{ activeContent, setActiveContent }}>
      {children}
    </PageContext.Provider>
  );
};
PageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PageContext;
