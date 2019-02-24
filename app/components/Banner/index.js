import React, { PureComponent } from 'react';
import Background from 'images/banner/background.svg';
import Button from '../Button';
import * as Styles from './styles';

/* eslint-disable react/prefer-stateless-function */
class Banner extends PureComponent {
  render() {
    return (
      <Styles.BannerWrapper>
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
        </Styles.BannerContentWrapper>
        <Styles.BannerImage src={Background} alt="" />
      </Styles.BannerWrapper>
    );
  }
}

export default Banner;
