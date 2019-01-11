import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import facebook from 'images/footer/social/facebook.svg';
import instagram from 'images/footer/social/instagram.svg';
import twitter from 'images/footer/social/twitter.svg';
import vk from 'images/footer/social/vk.svg';

const FooterWrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  background: #303565;
  width: 100%;
  height: 103px;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 589px;
`;

const MenuButton = styled(NavLink)`
  font-size: 18px;
  color: #fff;
  cursor: pointer;
`;

const Copyright = styled.button`
  font-weight: 300;
  font-size: 13px;
  text-align: center;
  color: #fff;
  margin: 15px 0 0 0;
  cursor: pointer;
`;

const SocialWrapper = styled.div`
  position: absolute;
  display: flex;
  right: 50px;
  width: 120px;
  justify-content: space-between;
  align-items: center;
`;

const SocialButton = styled.button`
  cursor: pointer;
`;

/* eslint-disable react/prefer-stateless-function */
class Footer extends Component {
  render() {
    return (
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
  }
}

Footer.propTypes = {
  footerIsHidden: PropTypes.bool,
};

export default Footer;
