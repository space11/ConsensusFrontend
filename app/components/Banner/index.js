import React, { PureComponent } from 'react';
import AlienRed from 'images/banner/alienRed';
import AlienYellow from 'images/banner/alienYellow';
import Rocket from 'images/banner/rocket';
import Button from '../Button';
import Space from '../Space';
import {
  BannerWrapper,
  BannerDescriptionWrapper,
  BannerDescriptionLine,
  RocketWrapper,
  AliensWrapper,
  RedAlienWrapper,
  YellowAlienWrapper,
  ActionWrapper,
} from './styles';

/* eslint-disable react/prefer-stateless-function */
class Banner extends PureComponent {
  render() {
    return (
      <BannerWrapper>
        <BannerDescriptionWrapper>
          <div>
            <BannerDescriptionLine>
              Первая в мире платформа
            </BannerDescriptionLine>
            <BannerDescriptionLine>
              для проведения онлайн-дебатов
            </BannerDescriptionLine>
            <ActionWrapper>
              <Button
                text="Организовать дебаты"
                onClick={() => (window.location.href = '/create-debate')}
              />
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
