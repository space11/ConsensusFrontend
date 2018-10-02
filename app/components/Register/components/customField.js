import React from 'react';
import styled from 'styled-components';

const FieldInput = styled.input`
  border: 1px solid #2b3780;
  background: transparent;
  height: 4rem;
  width: 57%;
  border-radius: 6px;
  font-size: 1.5em;
  padding: 1rem;

  &::placeholder {
    font-weight: 300;
  }
`;

export default props => <FieldInput placeholder={props.placeholder} />;
