import React, { useContext } from 'react';
import useIntersectionObserver from '@react-hook/intersection-observer';
import _debounce from 'lodash.debounce';
import styled from 'styled-components';
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaEnvelopeOpen,
} from 'react-icons/fa';
import Container from './Container';
import PageContext from './context/PageContext';

const Contacts = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  & svg {
    margin-right: 7px;
  }
`;

const Link = styled.a`
  text-decoration: underline;
`;

const Contact = () => {
  const { activeContent, setActiveContent } = useContext(PageContext);
  const [entry, observerRef] = useIntersectionObserver({
    threshold: 1,
  });

  const setSection = _debounce(() => setActiveContent('contact'), 300);
  if (entry.isIntersecting && activeContent !== 'contact') {
    setSection();
  }
  return (
    <section
      ref={observerRef}
      id="contact"
      className="bg-gray-900 py-6 text-gray-400"
    >
      <Container>
        <div className="w-full px-5 py-5 xl:px-20 lg:px-15 md:px-10">
          <p className="text-red-500 uppercase text-2xl font-medium">CONTACT</p>
          <p className="text-justify">
            Hey! I&apos;m grateful that you visited my page. I am open for job
            opportunity full-time/part-time positions as React/Front-end or
            Full-stack Developer. Let&apos;s connect!
          </p>
          <Contacts>
            <FaEnvelopeOpen />
            jhayrebua123@gmail.com
          </Contacts>
          <Contacts>
            <FaLinkedin />
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/jesson-jei-rebua-226ba0171/"
            >
              Jesson Jei Rebua
            </Link>
          </Contacts>
          <Contacts>
            <FaGithub />
            <Link target="_blank" href="https://github.com/jhayrebua24">
              @jhayrebua24
            </Link>
          </Contacts>
          <Contacts>
            <FaFacebook />
            <Link target="_blank" href="https://www.facebook.com/JhaYiEe">
              @JhaYieE
            </Link>
          </Contacts>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
