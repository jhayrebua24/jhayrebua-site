import React, { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import _debounce from 'lodash.debounce';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaEnvelopeOpen,
} from 'react-icons/fa';

import PageContext from './context/PageContext';
import ContactForm from './Forms/ContactForm';

const Contacts = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  @media (max-width: 640px) {
    justify-content: center;
  }
`;

const Link = styled.a.attrs(() => ({
  className:
    'rounded rounded-full p-3 bg-gray-700 text-white hover:text-indigo-300',
}))`
  & svg {
    font-size: 2rem;
  }

  :not(first-child) {
    margin: 0 3px;
  }
`;

const Contact = () => {
  const { activeContent, setActiveContent } = useContext(PageContext);
  const [ref, inView] = useInView({
    threshold: 1,
  });
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "contact.jpg" }) {
        publicURL
      }
    }
  `);

  const setSection = _debounce(() => setActiveContent('contact'), 100);
  if (inView && activeContent !== 'contact') {
    setSection();
  }
  return (
    <section className="min-h-screen w-full flex" ref={ref} id="contact">
      <div
        className="w-auto lg:w-2/5 min-h-screen "
        style={{
          backgroundImage: `url(${data.bg.publicURL})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="w-auto lg:w-3/5 px-5 py-5 xl:px-20 lg:px-15 md:px-10">
        <p className="text-red-500 uppercase text-2xl font-medium">CONTACT</p>
        <p className="text-justify">
          Hey! I&apos;m grateful that you visited my page. I am open for job
          opportunity full-time/part-time positions as React/Front-end or
          Full-stack Developer. Let&apos;s connect!
        </p>
        <ContactForm />
        <Contacts>
          <Link href="mailto::jhayrebua123@gmail.com">
            <FaEnvelopeOpen />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/jesson-jei-rebua-226ba0171/"
          >
            <FaLinkedin />
          </Link>
          <Link target="_blank" href="https://github.com/jhayrebua24">
            <FaGithub />
          </Link>
          <Link target="_blank" href="https://www.facebook.com/JhaYiEe">
            <FaFacebook />
          </Link>
        </Contacts>
      </div>
    </section>
  );
};

export default Contact;
