import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Bg from '../../images/Banner/bg1';
import ActionButton from '../ActionButton';
import AlienRed from '../../images/Banner/Alien1';
import AlienYellow from '../../images/Banner/Alien2';
import Rocket from '../../images/Banner/Rocket';

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

const BannerDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 13.6vw;
`;

const BannerDescriptionLine = styled.div`
  display: flex;
  font-size: 2.5vw;
  font-weight: 400;
  margin-bottom: 1vw;
  color: #fff;
  justify-content: center;
  letter-spacing: 1.5px;
`;

const RocketWrapper = styled.div`
  margin: 20vw auto;
  position: relative;
  animation: go-left-right 3s infinite alternate ease-in-out;

  @keyframes go-left-right {
    from {
      left: calc(50px - 5%);
    }
    to {
      left: calc(10% - 50px);
    }
  }
`;

const AliensWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 0 5vw;
  margin-top: -12vw;
`;

const RedAlienWrapper = styled.div`
  position: relative;
  animation: go-top-bottom 3s infinite alternate;

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
  position: relative;
  animation: go-top-bottom 4s infinite alternate;
  margin-top: -2vw;

  @keyframes go-top-bottom {
    from {
      top: -5px;
    }
    to {
      top: 5px;
    }
  }
`;

/* eslint-disable react/prefer-stateless-function */
class Banner extends PureComponent {
  render() {
    return (
      <div>
        <BackgroundWrapper>
          <Bg />
        </BackgroundWrapper>
        <BannerDescriptionWrapper>
          <BannerDescriptionLine>Первая в мире платформа</BannerDescriptionLine>
          <BannerDescriptionLine style={{ marginBottom: '4vw' }}>
            для проведения онлайн-дебатов
          </BannerDescriptionLine>
          <ActionButton text="Организовать дебаты" />
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
      </div>
    );
  }
}

export default Banner;
