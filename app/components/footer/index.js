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
  top: 0;
  margin: 0 auto;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;

const Copyright = styled.a`
  display: inherit;
  justify-content: center;
  color: #fff;
  font-size: 1em;
  width: 100%;
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
`;

const MainBlockWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 12vw auto 7vw auto;
  width: 62%;
`;

const NavigationLine = styled(Link)`
  color: #fff;
  margin: 0.5vw;
  text-decoration: none;
`;

const SocialLine = styled.a`
  color: #fff;
  margin: 0.5vw;
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
      <div style={{ position: 'relative', marginTop: '-1px' }}>
        <div style={{ position: 'relative', width: '100%' }}>
          <Bg />
        </div>
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
