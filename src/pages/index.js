import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Profile" />
      <Home />
      <About />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
