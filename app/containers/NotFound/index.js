import React from 'react';
import styled from 'styled-components';
import Img from 'react-image';
import Bg from 'images/notfound/background.svg';
import Ufo from 'images/notfound/ufo.svg';
import NF from 'images/notfound/404.svg';

const NotFoundBackground = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-image: linear-gradient(to top, #2b3780, #20244c);
`;

const Background = styled(Img)`
  width: 100%;
  height: 100%;
`;

const UfoWrapper = styled(Img)`
  z-index: 999;
  margin: 1rem;
  height: 50%;
  animation: 10s slide infinite alternate;

  @keyframes slide {
    0% {
      transform: translateX(-200%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const NotWrapper = styled(Img)`
  z-index: 999;
  margin: 1rem;
  height: 30%;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  align-items: center;
  padding: 50px;
  justify-content: space-around;
`;

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
