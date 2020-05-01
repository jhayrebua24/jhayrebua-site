import React from 'react';
import { FaSadCry } from 'react-icons/fa';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => {
  return (
    <Layout pageError>
      <SEO title="404: Not found" />
      <div className="pt-16 w-full h-screen flex justify-center items-center">
        <FaSadCry className="mx-2 text-gray-600 text-6xl " />
        <p className="text-6xl text-gray-700 m-0">SORRY! PAGE NOT FOUND</p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
