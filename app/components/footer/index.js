import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import FacebookIcon from 'images/SocialIcons/Facebook';
import InstagramIcon from 'images/SocialIcons/Instagram';
import TwitterIcon from 'images/SocialIcons/Twitter';
import VKIcon from 'images/SocialIcons/VK';

const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  flex: 0 0 auto;
  height: 21vw;
  padding: 1vw 17vw;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, #280d60, #290b57);
`;

const NavigationBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 10.5vw;
  align-self: center;
  justify-content: space-evenly;
`;

const NavigationButton = styled(Link)`
  display: inline-flex;
  font-size: 1em;
  font-weight: 100;
  color: #fff;
  text-decoration: none;
  letter-spacing: 1px;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const SocialButton = styled.a`
  display: inline-flex;
  font-size: 1em;
  font-weight: 100;
  align-items: center;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const SocialBlock = styled.div`
  display: flex;
  height: 10.5vw;
  flex-direction: column;
  align-self: center;
  letter-spacing: 1px;
  justify-content: space-evenly;
`;

/* eslint-disable react/prefer-stateless-function */
class Footer extends PureComponent {
  render() {
    return (
      <FooterWrapper>
        <NavigationBlock>
          <NavigationButton to="/rules">Правила</NavigationButton>
          <NavigationButton to="/contacts">Контакты</NavigationButton>
          <NavigationButton to="/advert">
            Рекламные возможности
          </NavigationButton>
          <NavigationButton to="/docs">
            Пользовательское соглашение
          </NavigationButton>
        </NavigationBlock>
        <SocialButton
          href="https://lod-misis.ru"
          target="_blank"
          style={{
            fontSize: '.7em',
            alignSelf: 'flex-end',
            textTransform: 'none',
            marginLeft: '-7vw',
            letterSpacing: '1px',
          }}
        >
          © League Of Developers 2018
        </SocialButton>
        <SocialBlock>
          <SocialButton href="https://vk.com" target="_blank">
            <VKIcon /> VK
          </SocialButton>
          <SocialButton href="https://facebook.com" target="_blank">
            <FacebookIcon /> Facebook
          </SocialButton>
          <SocialButton href="https://twitter.com" target="_blank">
            <TwitterIcon /> Twitter
          </SocialButton>
          <SocialButton href="https://instagram.com" target="_blank">
            <InstagramIcon /> Instagram
          </SocialButton>
        </SocialBlock>
      </FooterWrapper>
    );
  }
}

export default Footer;
