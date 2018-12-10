import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import Img from 'react-image';
import styled from 'styled-components';
import FacebookIcon from 'images/footer/socials/facebook';
import InstagramIcon from 'images/footer/socials/instagram';
import TwitterIcon from 'images/footer/socials/twitter';
import VKIcon from 'images/footer/socials/vk';
import Bg from 'images/footer/background.svg';

const R = styled.div`
  display: ${props => (props.footerIsHidden ? 'none' : 'block')};
  position: relative;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  height: 100%;
  min-width: 10vw;
  max-height: 1050px;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  flex-direction: column;
  z-index: 9999;
`;

const BackgroundWrapper = styled(Img)`
  position: relative;
  width: 100%;

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

const BackgroundMobileWrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: 9999;

  @media screen and (min-width: 850px) {
    display: none;
  }
`;

const BackgroundMobile = styled.div`
  width: 100%;
  background: #374059;
  height: 500px;
  z-index: 9999;
`;

const Copyright = styled.a`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;
  bottom: 0;
  color: #fff;
  font-size: 1em;
  text-decoration: none;
`;

const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media screen and (max-width: 568px) {
    margin-top: 1rem;
    height: 9rem;
  }
`;

const LeftBlockWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;

  @media screen and (max-width: 568px) {
    height: 8rem;
  }
`;

const MainBlockWrapper = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  width: 60%;
  align-items: center;
  margin-top: 3rem;
  height: 10vw;

  @media screen and (max-width: 900px) {
    margin-left: 1.8rem;
    margin-top: 0;
    height: auto;
  }
`;

const NavigationLine = styled(NavLink)`
  color: #fff;
  text-decoration: none;
`;

const SocialLine = styled.a`
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
`;

const SocialWrapper = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
  justify-content: space-between;
  margin-right: 1rem;
`;

const SocialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  justify-content: space-between;
`;

/* eslint-disable react/prefer-stateless-function */
class Footer extends PureComponent {
  render() {
    return (
      <R footerIsHidden={this.props.footerIsHidden}>
        <BackgroundWrapper src={Bg} alt="" />
        <BackgroundMobileWrapper>
          <BackgroundMobile />
        </BackgroundMobileWrapper>
        <FooterWrapper>
          <MainBlockWrapper>
            <BlockWrapper>
              <NavigationLine to="rules">Правила</NavigationLine>
              <NavigationLine to="contacts">Контакты</NavigationLine>
              <NavigationLine to="advertise">
                Рекламные возможности
              </NavigationLine>
              <NavigationLine to="terms">
                Пользовательское соглашение
              </NavigationLine>
            </BlockWrapper>
            <LeftBlockWrapper>
              <SocialWrapper>
                <VKIcon />
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
              </SocialWrapper>
              <SocialsWrapper>
                <SocialLine href="https://vk.com">VK</SocialLine>
                <SocialLine href="https://facebook.com">FACEBOOK</SocialLine>
                <SocialLine href="https://twitter.com">TWITTER</SocialLine>
                <SocialLine href="https://instagram.com">INSTAGRAM</SocialLine>
              </SocialsWrapper>
            </LeftBlockWrapper>
          </MainBlockWrapper>
          <Copyright href="https://lod-misis.ru">
            © League Of Developers 2018
          </Copyright>
        </FooterWrapper>
      </R>
    );
  }
}

Footer.propTypes = {
  footerIsHidden: PropTypes.bool,
};

export default Footer;
