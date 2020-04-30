import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import Typist from 'react-typist';

import BackgroundImage from 'gatsby-background-image';

const Overlay = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const Anchor = styled(Link).attrs(() => ({
  className: 'text-gray-400 underline px-6 py-4 z-10 rounded-full',
}))`
  :hover {
    color: #f56565;
  }
`;

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "code-bg.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage id="#home" className={className} fluid={imageData}>
          <Overlay />
          <Typist
            cursor={{
              hideWhenDone: true,
              hideWhenDoneDelay: 0,
              element: <span className="text-6xl text-white">|</span>,
            }}
            className="z-10 text-gray-100 inline-block text-6xl font-medium leading-normal text-center max-w-2xl"
          >
            Hello!
            <Typist.Backspace count={6} delay={1000} />I am{' '}
            <span className="text-red-500">Jei</span>, a{' '}
            <span className="text-red-500">Full-stack </span>
            Web Developer.
          </Typist>
          <Anchor to="#about">Learn more about me.</Anchor>
        </BackgroundImage>
      );
    }}
  />
);

const StyledBackgroundSection = styled(BackgroundSection)`
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

BackgroundSection.propTypes = {
  className: PropTypes.string.isRequired,
};
export default StyledBackgroundSection;
