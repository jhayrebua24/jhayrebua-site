/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import './layout.css';

const Layout = ({ pageError, children }) => {
  return (
    <>
      <Header pageError={!!pageError} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageError: PropTypes.bool,
};

Layout.defaultProps = {
  pageError: false,
};

export default Layout;
