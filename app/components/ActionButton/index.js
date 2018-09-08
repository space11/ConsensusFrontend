import React from 'react';
import styled from 'styled-components';

const ActionButton = styled.button`
  height: auto;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  width: 18.6vw;
  border-radius: 100px;
  min-width: 220px;
  min-height: 45px;
  background: #f7567c;
  box-shadow: 0 0 5px #ff5964;
`;

export default function({ text }) {
  return <ActionButton>{text}</ActionButton>;
}
