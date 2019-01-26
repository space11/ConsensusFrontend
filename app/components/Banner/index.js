import React, { PureComponent } from 'react';
import AlienRed from 'images/banner/alienRed.svg';
import AlienYellow from 'images/banner/alienYellow.svg';
import Rocket from 'images/banner/rocket.svg';
import Background from 'images/banner/background.svg';
import Button from '../Button';
import * as Styles from './styles';

/* eslint-disable react/prefer-stateless-function */
class Banner extends PureComponent {
  render() {
    return (
      <Styles.BannerWrapper>
        <Styles.BannerImage src={Background} alt="" />
        <Styles.BannerContentWrapper>
          <Styles.BannerDescriptionWrapper>
            <Styles.TextWrapper>
              <Styles.BannerDescriptionLine>
                Первая в мире платформа
              </Styles.BannerDescriptionLine>
              <Styles.BannerDescriptionLine>
                для проведения онлайн-дебатов
              </Styles.BannerDescriptionLine>
            </Styles.TextWrapper>
            <Styles.ButtonWrapper to="/create-debate">
              <Button text="Организовать дебаты" />
            </Styles.ButtonWrapper>
          </Styles.BannerDescriptionWrapper>
          <Styles.AliensWrapper>
            <Styles.RedAlienWrapper>
              <img src={AlienRed} alt="" />
            </Styles.RedAlienWrapper>
            <Styles.RocketWrapper>
              <img src={Rocket} alt="" />
            </Styles.RocketWrapper>
            <Styles.YellowAlienWrapper>
              <img src={AlienYellow} alt="" />
            </Styles.YellowAlienWrapper>
          </Styles.AliensWrapper>
        </Styles.BannerContentWrapper>
      </Styles.BannerWrapper>
    );
  }
}

export default Banner;
