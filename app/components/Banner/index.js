import React, { PureComponent } from 'react';
import AlienRed from 'images/banner/alienRed.svg';
import AlienYellow from 'images/banner/alienYellow.svg';
import Rocket from 'images/banner/rocket.svg';
import Background from 'images/banner/background.svg';
import Button from '../Button';
import {
  BannerWrapper,
  BannerDescriptionWrapper,
  BannerDescriptionLine,
  RocketWrapper,
  AliensWrapper,
  RedAlienWrapper,
  YellowAlienWrapper,
  BannerImage,
  TextWrapper,
  BannerContentWrapper,
  ButtonWrapper,
} from './styles';

/* eslint-disable react/prefer-stateless-function */
class Banner extends PureComponent {
  render() {
    return (
      <BannerWrapper>
        <BannerImage src={Background} alt="" />
        <BannerContentWrapper>
          <BannerDescriptionWrapper>
            <TextWrapper>
              <BannerDescriptionLine>
                Первая в мире платформа
              </BannerDescriptionLine>
              <BannerDescriptionLine>
                для проведения онлайн-дебатов
              </BannerDescriptionLine>
            </TextWrapper>
            <ButtonWrapper to="/create-debate">
              <Button text="Организовать дебаты" />
            </ButtonWrapper>
          </BannerDescriptionWrapper>
          <AliensWrapper>
            <RedAlienWrapper>
              <img src={AlienRed} alt="" />
            </RedAlienWrapper>
            <RocketWrapper>
              <img src={Rocket} alt="" />
            </RocketWrapper>
            <YellowAlienWrapper>
              <img src={AlienYellow} alt="" />
            </YellowAlienWrapper>
          </AliensWrapper>
        </BannerContentWrapper>
      </BannerWrapper>
    );
  }
}

export default Banner;
