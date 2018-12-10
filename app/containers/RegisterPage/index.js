import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Bg from '../../images/Register/bg';
import Register from '../../components/Register';

const RegisterPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  min-height: calc(100vh - 21vw);
`;

export default class RegisterPage extends PureComponent {
  render() {
    return <Register />;
  }
}
