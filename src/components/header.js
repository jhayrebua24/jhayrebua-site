import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Scroll } from 'react-fns';
import styled from 'styled-components';

import Container from './Container';
import Image from './image';
import Toggle from './Toggle';
import PageContext from './context/PageContext';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const WhiteOverlay = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: inline;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.2);
    width: 100vh;
    height: 100vh;
    z-index: 1;
  }
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

const StyledUL = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 768px) {
    top: 0;
    right: 0;
    width: 0;
    position: fixed;
    display: block;
    background-color: #f56565;
    overflow-x: hidden;
    height: 100vh;
    visibility: hidden;
    transition: 0.2s ease-out;

    ${props => {
      if (props.showmenu) {
        return `
          visibility: visible; 
          width: 50%;
          transition: width 0.3s, visibility 0.3s ease-in-out;
          z-index: 9999;
        `;
      }
      return ``;
    }}
  }
`;

const Header = ({ pageError }) => {
  const { activeContent } = useContext(PageContext);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Scroll
      render={({ y }) => {
        const isScrolled = y > 0 || pageError;
        return (
          <StyledHeader isscrolled={+isScrolled} className="w-full z-20 fixed">
            <Container>
              <StyledNav showmenu={+showMenu}>
                {showMenu && (
                  <WhiteOverlay onClick={() => setShowMenu(false)} />
                )}
                <a
                  className="text-gray-100 hover:text-gray-400 uppercase text-sm"
                  href="/"
                >
                  <Image className="w-10 rounded-full border-2 border-gray-100" />
                </a>
                <StyledUL showmenu={+showMenu}>
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
                </StyledUL>
                <Toggle setShowMenu={setShowMenu} showmenu={showMenu} />
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
