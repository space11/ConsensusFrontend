import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchIcon from 'images/SearchIcon';

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 1.5em 60px;
  background-color: #262cbe;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Logo = styled(Link)`
  display: inline-flex;
  font-size: 2.3em;
  letter-spacing: 0.25px;
  font-weight: 500;
  color: #fff;
  text-decoration: none;

  @media (max-width: 1024px) {
    margin: 0 auto;
  }
`;

const NavigatorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 500px;
  min-width: 220px;

  @media (max-width: 1024px) {
    margin: 0 auto;
    margin-top: 1vh;
  }
`;

const NavigationButton = styled(Link)`
  display: inline-flex;
  font-size: 1.3em;
  font-weight: 300;
  color: #fff;
  text-decoration: none;
  justify-content: center;
  letter-spacing: 1.5px;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const SearchWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;

  @media (max-width: 1024px) {
    margin: 0 auto;
    margin-top: 1vh;
  }
`;

const SearchForm = styled.input`
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(75deg, #ef4978, #fb644c) 1;
  outline: none;
  height: 45px;
  padding: 5px;
  color: #fff;
  min-width: 220px;
  width: 21vw;

  @media (max-width: 1024px) {
    margin: 0 auto;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  outline: none;
  right: 0.5vw;
  margin-top: 1px;
`;

const LoginButton = styled.button`
  height: auto;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  width: 17vw;
  min-width: 220px;
  min-height: 45px;
  background: linear-gradient(75deg, #ef4978, #fb644c);
  float: right;

  @media (max-width: 1024px) {
    margin: 0 auto;
    margin-top: 1vh;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <Logo to="/">Консенсус</Logo>
        <NavigatorContainer>
          <NavigationButton to="/popular">Популярные</NavigationButton>
          <NavigationButton to="/themes">Тематика</NavigationButton>
          <NavigationButton to="/follow">Подписки</NavigationButton>
          <NavigationButton to="/competition">Турниры</NavigationButton>
        </NavigatorContainer>
        <SearchWrapper>
          <SearchForm type="search" />
          <SearchButton>
            <SearchIcon />
          </SearchButton>
        </SearchWrapper>
        <LoginButton>Вход и регистрация</LoginButton>
      </HeaderWrapper>
    );
  }
}

export default Header;
