import React from 'react';
import Bg from 'images/notfound/background.svg';
import Ufo from 'images/notfound/ufo.svg';
import NF from 'images/notfound/404.svg';
import {
  NotFoundBackground,
  Background,
  UfoWrapper,
  NotWrapper,
  Content,
} from './styles';

/* eslint-disable react/prefer-stateless-function */
export default class NotFound extends React.Component {
  render() {
    return (
      <NotFoundBackground>
        <Background src={Bg} alt="" />
        <Content>
          <UfoWrapper src={Ufo} alt="" />
          <NotWrapper src={NF} alt="" />
        </Content>
      </NotFoundBackground>
    );
  }
}
