import React from 'react';
import { Link } from 'gatsby';
import { Scroll } from 'react-fns';
import styled from 'styled-components';
import Container from './Container';
import Image from './image';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link).attrs(props => ({
  className: `px-5 py-${
    props.isScrolled ? `5` : `6`
  } block text-gray-100 uppercase text-sm hover:text-gray-400`,
}))`
  box-sizing: border-box;
  transition: padding 150ms ease-out;
`;

const StyledHeader = styled.header`
  background-color: ${props => (props.isScrolled ? '#F56565' : '')};
`;

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
                  <Image className="w-10 rounded-full border-2 border-gray-100" />
                </a>
                <ul className="flex items-center p-0 m-0">
                  <li className="flex-1 m-0 mx-1">
                    <StyledLink isScrolled={+isScrolled} to="#home">
                      home
                    </StyledLink>
                  </li>
                  <li className="flex-1 m-0 mx-1">
                    <StyledLink isScrolled={+isScrolled} to="#about">
                      about
                    </StyledLink>
                  </li>
                  <li className="flex-1 m-0 mx-1">
                    <StyledLink isScrolled={+isScrolled} to="#contact">
                      contact
                    </StyledLink>
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
