import React from 'react';
import { Scroll } from 'react-fns';
import styled from 'styled-components';
import Container from './Container';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled.a`
  box-sizing: border-box;
  :target {
    background: black;
  }
  :hover {
    border-bottom: 2px solid #fff;
    transform: scale(1.05);
  }
`;

const StyledHeader = styled.header`
  background-color: ${props => (props.isScrolled ? '#F56565' : '')};
`;

// eslint-disable-next-line react/prop-types
const Anchor = ({ name, to }) => (
  <StyledLink
    href={to}
    className="px-5 py-6 block text-gray-100 uppercase text-sm hover:text-gray-400"
  >
    {name}
  </StyledLink>
);

const Header = () => {
  return (
    <Scroll
      render={({ y }) => {
        const isScrolled = y > 0;

        return (
          <StyledHeader isScrolled={+isScrolled} className="w-full z-20 fixed">
            <Container>
              <StyledNav>
                <a
                  className="text-gray-100 hover:text-gray-400 uppercase text-sm"
                  href="#home"
                >
                  jrebua
                </a>
                <ul className="flex items-center p-0 m-0">
                  <li className="flex-1 m-0 mx-1">
                    <Anchor to="#home" name="home" />
                  </li>
                  <li className="flex-1 m-0 mx-1">
                    <Anchor to="#about" name="about" />
                  </li>
                  <li className="flex-1 m-0 mx-1">
                    <Anchor to="#contact" name="contact" />
                  </li>
                </ul>
              </StyledNav>
            </Container>
          </StyledHeader>
        );
      }}
    />
  );
};

export default Header;
