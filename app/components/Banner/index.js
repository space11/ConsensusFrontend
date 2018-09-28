import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import Bg from '../../images/Banner/bg1';
import ActionButton from '../ActionButton';
import AlienRed from '../../images/Banner/Alien1';
import AlienYellow from '../../images/Banner/Alien2';
import Rocket from '../../images/Banner/Rocket';
import Space from '../Space';

const BannerWrapper = styled.div`
  min-height: calc(100vh - 21vw);
  height: 71.1vw;
  max-height: 1000px;
`;

const BannerDescriptionWrapper = styled.div`
  display: flex;
  position: relative;
  height: calc(100% - 93px);
  min-width: 10vw;
  max-height: 1050px;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 3rem;
  justify-content: center;
  width: 100%;
  z-index: 999;

  @media screen and (max-width: 900px) {
    justify-content: flex-start;
  }
`;

const BannerDescriptionLine = styled.div`
  display: flex;
  font-size: 2.2em;
  font-weight: 400;
  color: #fff;
  text-align: center;
  justify-content: center;
  letter-spacing: 1.5px;
  z-index: 1;

  @media screen and (max-width: 900px) {
    font-size: 2em;
    @media screen and (max-width: 550px) {
      font-size: 1.3em;
    }
  }
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
`;

const RocketWrapper = styled.div`
  display: flex;
  position: relative;
  margin: 0 auto;
  animation: go-left-right 3s infinite alternate ease-in-out;

  @media screen and (max-width: 900px) {
    animation: none;
    margin: 0 auto;
  }

  @keyframes go-left-right {
    from {
      left: calc(50px - 5%);
    }
    to {
      left: calc(15% - 50px);
    }
  }
`;

const AliensWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 0 5vw;
  width: 100%;
  margin-top: -3vw;
`;

const RedAlienWrapper = styled.div`
  position: relative;
  animation: go-top-bottom 3s infinite alternate;

  @media screen and (max-width: 900px) {
    display: none;
  }

  @keyframes go-top-bottom {
    from {
      top: -30px;
    }
    to {
      top: 25px;
    }
  }
`;

const YellowAlienWrapper = styled.div`
  display: flex;
  position: relative;
  margin-top: -2vw;
  animation: go-top-bottom 4s infinite alternate;

  @media screen and (max-width: 900px) {
    display: none;
  }

  @keyframes go-top-bottom {
    from {
      top: -5px;
    }
    to {
      top: 5px;
    }
  }
`;

const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2vw auto;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class Banner extends PureComponent {
  render() {
    return (
      <BannerWrapper>
        <BannerDescriptionWrapper>
          <div style={{ margin: '0' }}>
            <BannerDescriptionLine style={{ marginBottom: '1vw' }}>
              Первая в мире платформа
            </BannerDescriptionLine>
            <BannerDescriptionLine>
              для проведения онлайн-дебатов
            </BannerDescriptionLine>
            <ActionWrapper>
              <ActionButton text="Организовать дебаты" />
            </ActionWrapper>
          </div>
          <Space size={2} />
          <AliensWrapper>
            <RedAlienWrapper>
              <AlienRed />
            </RedAlienWrapper>
            <RocketWrapper>
              <Rocket />
            </RocketWrapper>
            <YellowAlienWrapper>
              <AlienYellow />
            </YellowAlienWrapper>
          </AliensWrapper>
        </BannerDescriptionWrapper>
        <BackgroundWrapper>
          <Parallax offsetYMin={-5} offsetYMax={5}>
            <Bg />
          </Parallax>
        </BackgroundWrapper>
      </BannerWrapper>
    );
  }
}

export default Banner;
