import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FacebookIcon from '../../images/Footer/Socials/Facebook';
import InstagramIcon from '../../images/Footer/Socials/Instagram';
import TwitterIcon from '../../images/Footer/Socials/Twitter';
import VKIcon from '../../images/Footer/Socials/VK';
import Bg from '../../images/Footer/bg';

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
`;

const BackgroundWrapper = styled.div`
  position: relative;
  width: 100%;

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

const BackgroundMobileWrapper = styled.div`
  position: relative;
  width: 100%;

  @media screen and (min-width: 850px) {
    display: none;
  }
`;

const BackgroundMobile = styled.div`
  width: 100%;
  background: #374059;
  height: 500px;
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
  justify-content: center;
`;

const LeftBlockWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 568px) {
    margin-top: 1rem;
  }
`;

const MainBlockWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 65%;
  margin-top: 2vw;

  @media screen and (max-width: 568px) {
    justify-content: center;
  }
`;

const NavigationLine = styled(Link)`
  color: #fff;
  margin: 1vw;
  text-decoration: none;
`;

const SocialLine = styled.a`
  color: #fff;
  margin: 1vw;
  text-transform: uppercase;
  text-decoration: none;
`;

const SocialWrapper = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
  justify-content: center;
`;

const SocialsWrapper = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

/* eslint-disable react/prefer-stateless-function */
class Footer extends PureComponent {
  render() {
    return (
      <div style={{ position: 'relative' }}>
        <BackgroundWrapper>
          <Bg />
        </BackgroundWrapper>
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
      </div>
    );
  }
}

export default Footer;
