import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <div className="max-w-full w-full px-2 mx-auto xl:w-9/12 lg:w-10/12 md:w-11/12">
      {children}
    </div>
  );
};
Container.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Container;
