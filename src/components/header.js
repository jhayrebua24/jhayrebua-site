import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Scroll } from 'react-fns';
import styled from 'styled-components';

import Container from './Container';
import Image from './image';
import PageContext from './context/PageContext';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled.a.attrs(props => ({
  className: `px-5 py-${props.isscrolled ? `5` : `6`}
    block text-gray-${
      props.isactive ? `400 font-semibold` : `100`
    } uppercase text-sm hover:text-gray-400`,
}))`
  box-sizing: border-box;
  transition: padding 150ms ease-out;
`;

const StyledHeader = styled.header`
  background-color: ${props => (props.isscrolled ? '#F56565' : '')};
`;

const Header = ({ pageError }) => {
  const { activeContent } = useContext(PageContext);
  return (
    <Scroll
      render={({ y }) => {
        const isScrolled = y > 0 || pageError;
        return (
          <StyledHeader isscrolled={+isScrolled} className="w-full z-20 fixed">
            <Container>
              <StyledNav>
                <a
                  className="text-gray-100 hover:text-gray-400 uppercase text-sm"
                  href="/"
                >
                  <Image className="w-10 rounded-full border-2 border-gray-100" />
                </a>
                <ul className="flex items-center p-0 m-0">
                  <li className="flex-1 m-0 mx-1">
                    <StyledLink
                      isactive={+(activeContent === 'home')}
                      isscrolled={+isScrolled}
                      href="#home"
                    >
                      home
                    </StyledLink>
                  </li>
                  <li className="flex-1 m-0 mx-1">
                    <StyledLink
                      isactive={+(activeContent === 'about')}
                      isscrolled={+isScrolled}
                      href="#about"
                    >
                      about
                    </StyledLink>
                  </li>
                  <li className="flex-1 m-0 mx-1">
                    <StyledLink
                      isactive={+(activeContent === 'contact')}
                      isscrolled={+isScrolled}
                      href="#contact"
                    >
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

Header.propTypes = {
  pageError: PropTypes.bool,
};

Header.defaultProps = {
  pageError: false,
};
export default Header;
