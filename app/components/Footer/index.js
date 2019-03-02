import React from 'react';
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
  </Styles.FooterWrapper>
);

export default Footer;
