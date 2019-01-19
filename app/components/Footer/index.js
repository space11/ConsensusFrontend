import React from 'react';
import facebook from 'images/footer/social/facebook.svg';
import instagram from 'images/footer/social/instagram.svg';
import twitter from 'images/footer/social/twitter.svg';
import vk from 'images/footer/social/vk.svg';
import {
  FooterWrapper,
  ContentWrapper,
  MenuWrapper,
  MenuButton,
  Copyright,
  SocialWrapper,
  SocialButton,
} from './styles';

const Footer = () => (
  <FooterWrapper>
    <ContentWrapper>
      <MenuWrapper>
        <MenuButton to="/">Главная</MenuButton>
        <MenuButton to="/rules">Правила</MenuButton>
        <MenuButton to="/contacts">Контакты</MenuButton>
        <MenuButton to="/advertisement">Рекламные возможности</MenuButton>
      </MenuWrapper>
      <Copyright>© League Of Developers 2018</Copyright>
    </ContentWrapper>
    <SocialWrapper>
      <SocialButton>
        <img src={facebook} alt="" />
      </SocialButton>
      <SocialButton>
        <img src={vk} alt="" />
      </SocialButton>
      <SocialButton>
        <img src={instagram} alt="" />
      </SocialButton>
      <SocialButton>
        <img src={twitter} alt="" />
      </SocialButton>
    </SocialWrapper>
  </FooterWrapper>
);

export default Footer;
