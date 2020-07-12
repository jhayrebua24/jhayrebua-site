import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Profile" />
      <Home />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
