import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Bg from '../../images/Banner/bg1';
import ActionButton from '../ActionButton';
import AlienRed from '../../images/Banner/Alien1';
import AlienYellow from '../../images/Banner/Alien2';
import Rocket from '../../images/Banner/Rocket';
import Space from '../Space';

const BannerWrapper = styled.div`
  display: flex;
  position: relative;
  min-height: 20vw;
`;

const BannerDescriptionWrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  height: 90%;
  z-index: 999;

  @media screen and (max-width: 768px) {
    margin-top: 0;
    font-size: 0.8em;
  }

  @media screen and (max-width: 900px) {
    justify-content: flex-start;
  }
`;

const BannerDescriptionLine = styled.div`
  display: flex;
  font-size: 2em;
  font-weight: 400;
  color: #fff;
  text-align: center;
  justify-content: center;
  letter-spacing: 1.5px;
  z-index: 1;
`;

const BackgroundWrapper = styled.div`
  z-index: 1;
  height: 100%;
  width: 100%;
`;

const RocketWrapper = styled.div`
  display: flex;
  position: relative;
  margin: auto 0;
  height: 25%;
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

  justify-content: space-between;
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
        <BackgroundWrapper>
          <Bg />
        </BackgroundWrapper>
        <BannerDescriptionWrapper>
          <div style={{ margin: '0 auto' }}>
            <BannerDescriptionLine style={{ marginBottom: '1rem' }}>
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
      </BannerWrapper>
    );
  }
}

export default Banner;
