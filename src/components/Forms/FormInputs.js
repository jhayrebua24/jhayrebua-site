/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import styled from 'styled-components';

const StyledText = styled.input`
  width: 100%;
  border: 1px solid #a0aec0;
  border-radius: 2px;
  padding: 7px 7px;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  color: #4a5568;
  text-transform: uppercase;
`;

export const Row = styled.div`
  padding: 0 3px;
  margin: 12px 0;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  border: 1px solid #a0aec0;
  border-radius: 2px;
  padding: 7px 7px;
`;

export const InputText = ({ field, form, ...props }) => {
  return <StyledText {...field} {...props} />;
};

export const InputArea = ({ field, form, ...props }) => {
  return <StyledTextArea rows={4} {...field} {...props} />;
};

export const Warning = ({ children }) => {
  return <span className="text-red-600">{children}</span>;
};
