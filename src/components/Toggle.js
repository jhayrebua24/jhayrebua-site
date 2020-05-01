import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  display: none;
  padding: 18px 0;
  cursor: pointer;
  z-index: 9999;
  @media (max-width: 768px) {
    display: inline-block;
  }
`;

const Line = styled.div`
  width: 35px;
  height: 5px;
  margin: 6px 0;
  transition: transform 300ms ease-in;

  :first-child {
    ${props => {
      if (props.showmenu) {
        return `-webkit-transform: rotate(-45deg) translate(-9px, 6px);
        transform: rotate(-45deg) translate(-9px, 6px);`;
      }
      return '';
    }}
  }

  :nth-child(2) {
    ${props => {
      if (props.showmenu) {
        return `opacity: 0;`;
      }
      return '';
    }}
  }

  :last-child {
    ${props => {
      if (props.showmenu) {
        return ` -webkit-transform: rotate(45deg) translate(-8px, -8px);
        transform: rotate(45deg) translate(-8px, -8px);`;
      }
      return '';
    }}
  }
`;

const Toggle = ({ setShowMenu, showmenu }) => {
  return (
    <Button onClick={() => setShowMenu(curr => !curr)}>
      <Line showmenu={+showmenu} className="bg-gray-100" />
      <Line showmenu={+showmenu} className="bg-gray-100" />
      <Line showmenu={+showmenu} className="bg-gray-100" />
    </Button>
  );
};

export default Toggle;
