import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => (
  <footer className="py-2 bg-gray-200 text-center">
    Crafted with <FaHeart className="inline" /> by{' '}
    <a className="text-red-500" href="https://www.facebook.com/JhaYiEe">
      Jei Rebua
    </a>
    <br />
    using
    {` `}
    <a className="text-red-500" href="https://www.gatsbyjs.org">
      Gatsby
    </a>
    {` and `}
    <a className="text-red-500" href="https://tailwindcss.com">
      Tailwind CSS
    </a>
  </footer>
);

export default Footer;
