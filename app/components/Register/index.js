import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'react-image';
import { Field, reducer } from 'redux-form';
import Bg from '../../images/Register/bg.svg';

const RegisterWrapper = styled.div`
  display: flex;
  position: fixed;
  height: 100vw;
  z-index: 1000;
`;

const BackgroundColor = styled.div`
  background: #fff;
  width: 100vw;
  margin-top: -100px;
`;

class Register extends Component {
  render() {
    return (
      <RegisterWrapper>
        <Img src={Bg} alt="" style={{ marginTop: '-100px' }} />
        <BackgroundColor />
      </RegisterWrapper>
    );
  }
}

export default Register;
