import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Bg from '../../images/Register/bg';

const RegisterPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  min-height: calc(100vh - 21vw);
`;

export default class RegisterPage extends PureComponent {
  render() {
    return (
      <RegisterPageWrapper>
        <Bg />
      </RegisterPageWrapper>
    );
  }
}
