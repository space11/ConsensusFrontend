import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import SearchIcon from 'images/header/searchIcon';
import Button from 'components/Button';
import ProfileImage from 'containers/Account/1.jpg';

const Wrapper = styled.div`
  position: relative;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  display: flex;
  z-index: 9999;
  position: absolute;
  width: 100%;
  padding: 30px 45px;
  align-items: center;
  background: transparent;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Logo = styled(NavLink)`
  display: flex;
  font-size: 36px;
  letter-spacing: 0.25px;
  font-weight: 500;
  color: ${props => (props.isblue ? '#474D90' : '#fff')};
  text-decoration: none;
  transition: 0.3s;
  float: left;
`;

const NavigatorContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 700px;
  justify-content: space-between;
  margin: 0 30px;
`;

const NavigationButton = styled(NavLink)`
  font-size: 20px;
  font-weight: 400;
  color: ${props => (props.isblue ? '#474D90' : '#fff')};
  text-decoration: none;
  justify-content: center;
  letter-spacing: 1.5px;
  transition: 0.3s;
`;

const SearchButton = styled.button`
  color: ${props => (props.isblue ? '#474D90' : '#fff')};
  cursor: pointer;
`;

const ProfileWrapper = styled.img`
  display: flex;
  width: 44px;
  height: 44px;
  border-radius: 100px;
  background: #000;
  cursor: pointer;
`;

/* eslint-disable react/prefer-stateless-function */
class Header extends Component {
  render() {
    const { isblue } = this.props;
    return (
      <Wrapper>
        <HeaderWrapper>
          <Logo to="/" isblue={isblue}>
            Консенсус
          </Logo>
          <NavigatorContainer>
            <NavigationButton to="/popular" isblue={isblue}>
              Популярные
            </NavigationButton>
            <NavigationButton to="/themes" isblue={isblue}>
              Тематика
            </NavigationButton>
            <NavigationButton to="/follow" isblue={isblue}>
              Подписки
            </NavigationButton>
            <SearchButton isblue={isblue}>
              <SearchIcon isblue={isblue} />
            </SearchButton>
            {localStorage.id_token === undefined ? (
              <Button
                text="Вход и регистрация"
                isTransparent
                onClick={() => (window.location.href = '/sign-in')}
              />
            ) : (
              <ProfileWrapper
                src={ProfileImage}
                alt=""
                onClick={() =>
                  (window.location.href = `/account/${localStorage.userId}`)
                }
              />
            )}
          </NavigatorContainer>
        </HeaderWrapper>
      </Wrapper>
    );
  }
}

Header.propTypes = {
  isblue: PropTypes.bool,
};

export default Header;
