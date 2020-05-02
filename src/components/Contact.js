import React, { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
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
    'mx-2 rounded rounded-full p-3 bg-gray-700 text-white hover:text-indigo-300',
}))`
  & svg {
    font-size: 2rem;
  }
`;

const Contact = () => {
  const { activeContent, setActiveContent } = useContext(PageContext);
  const [ref, inView] = useInView({
    threshold: 1,
  });

  const setSection = _debounce(() => setActiveContent('contact'), 100);
  if (inView && activeContent !== 'contact') {
    setSection();
  }
  return (
    <section ref={ref} id="contact" className="bg-gray-900 py-6 text-gray-400">
      <Container>
        <div className="w-full px-5 py-5 xl:px-20 lg:px-15 md:px-10">
          <p className="text-red-500 uppercase text-2xl font-medium">CONTACT</p>
          <p className="text-justify">
            Hey! I&apos;m grateful that you visited my page. I am open for job
            opportunity full-time/part-time positions as React/Front-end or
            Full-stack Developer. Let&apos;s connect!
          </p>
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
      </Container>
    </section>
  );
};

export default Contact;
