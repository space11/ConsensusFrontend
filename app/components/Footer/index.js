import React from 'react';
import facebook from 'images/footer/social/facebook.svg';
import instagram from 'images/footer/social/instagram.svg';
import twitter from 'images/footer/social/twitter.svg';
import vk from 'images/footer/social/vk.svg';
import * as Styles from './styles';

const Footer = () => (
  <Styles.FooterWrapper>
    <Styles.ContentWrapper>
      <Styles.MenuWrapper>
        <Styles.MenuButton to="/">Главная</Styles.MenuButton>
        <Styles.MenuButton to="/rules">Правила</Styles.MenuButton>
        <Styles.MenuButton to="/contacts">Контакты</Styles.MenuButton>
        <Styles.MenuButton to="/advertisement">
          Рекламные возможности
        </Styles.MenuButton>
      </Styles.MenuWrapper>
      <Styles.Copyright>© League Of Developers 2018</Styles.Copyright>
    </Styles.ContentWrapper>
    <Styles.SocialWrapper>
      <Styles.SocialButton>
        <img src={facebook} alt="" />
      </Styles.SocialButton>
      <Styles.SocialButton>
        <img src={vk} alt="" />
      </Styles.SocialButton>
      <Styles.SocialButton>
        <img src={instagram} alt="" />
      </Styles.SocialButton>
      <Styles.SocialButton>
        <img src={twitter} alt="" />
      </Styles.SocialButton>
    </Styles.SocialWrapper>
  </Styles.FooterWrapper>
);

export default Footer;
