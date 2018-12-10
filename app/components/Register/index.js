import React, { Component } from 'react';
import styled from 'styled-components';
import Img from 'react-image';
import LoginForm from './LoginForm';
import PasswordForm from './PasswordForm';
import EmailForm from './Email';
import Bg from '../../images/Register/bg.svg';
import Bg1 from '../../images/Register/bg1.svg';
import Bg2 from '../../images/Register/bg2.svg';
import Bg3 from '../../images/Register/bg3.svg';

import { Status } from './messages';
import Line from './components/line';
import { hideOn, media } from '../../utils/helpers';
import { unit } from '../../utils/constants';

const RegisterWrapper = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  z-index: 1000;
  background: #fff;
`;

const FormFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 64em;
  box-sizing: border-box;
  justify-content: center;
  padding: 0 ${unit / 3}%;
  margin: 0 auto;
  ${hideOn} ${media.large`padding: 0 ${3.2 * unit}px;`};
`;

const StatusHeader = styled.div`
  color: #2b3780;
`;

const StatusStep = styled.div``;

const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 8%;
  margin-bottom: 3rem;
`;

const Background = styled(Img)`
  height: 100%;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      images: [Bg, Bg1, Bg2, Bg3],
      forms: [
        <LoginForm
          onSubmit={this.submit}
          onButtonClick={this.changeWallpaper}
        />,
        <PasswordForm
          onSubmit={this.submit}
          onButtonClick={this.changeWallpaper}
        />,
        <EmailForm
          onSubmit={this.submit}
          onButtonClick={this.changeWallpaper}
        />,
      ],
    };
  }

  changeWallpaper() {
    if (this.state.step !== this.state.images.length) {
      this.setState({ step: this.state.step + 1 });
    }
  }

  submit = values => {
    console.log(values);
  };

  render() {
    return (
      <RegisterWrapper>
        <Background src={this.state.images[this.state.step]} alt="" />
        <FormFieldWrapper>
          {this.state.forms[this.state.step]}
          <StatusWrapper>
            <StatusHeader>{Status.login}</StatusHeader>
            <StatusStep>{this.state.step}/3</StatusStep>
            <Line length="25%" />
          </StatusWrapper>
        </FormFieldWrapper>
      </RegisterWrapper>
    );
  }
}

export default Register;
