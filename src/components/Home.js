import React, { useContext } from 'react';
import _debounce from 'lodash.debounce';
import { useInView } from 'react-intersection-observer';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Typist from 'react-typist';

import BackgroundImage from 'gatsby-background-image';
import PageContext from './context/PageContext';

const Anchor = styled(Link).attrs(() => ({
  className: 'text-gray-400 underline px-6 py-4 z-10 rounded-full',
}))`
  :hover {
    color: #f56565;
  }
`;

const StyledBackgroundSection = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTypist = styled(Typist)`
  ::before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }
`;

const BackgroundSection = () => {
  const { activeContent, setActiveContent } = useContext(PageContext);
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "code-bg.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const [ref, inView] = useInView({
    threshold: 0.8,
  });

  const imageData = data.bg.childImageSharp.fluid;
  const setSection = _debounce(() => setActiveContent('home'), 100);
  if (inView && activeContent !== 'home') {
    setSection();
  }
  return (
    <StyledBackgroundSection id="home" fluid={imageData}>
      <div ref={ref}>
        <StyledTypist
          cursor={{
            hideWhenDone: true,
            hideWhenDoneDelay: 0,
            element: <span className="text-6xl text-white">|</span>,
          }}
          className="z-10 text-gray-100 block text-6xl font-medium leading-normal text-center max-w-2xl"
        >
          Hello!
          <Typist.Backspace count={6} delay={1000} />I am{' '}
          <span className="text-red-500">Jei</span>, a{' '}
          <span className="text-red-500">Full-stack </span>
          Web Developer.
        </StyledTypist>
      </div>
      <Anchor to="/#about">Learn more about me.</Anchor>
    </StyledBackgroundSection>
  );
};

export default BackgroundSection;
