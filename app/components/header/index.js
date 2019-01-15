import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from 'images/header/searchIcon';
import Button from 'components/Button';
import ProfileImage from 'containers/Account/1.jpg';
import {
  Wrapper,
  HeaderWrapper,
  Logo,
  NavigatorContainer,
  NavigationButton,
  SearchButton,
  ProfileWrapper,
  LoginSigninButton,
} from './styles';

const Header = ({ isblue, isWhite, isLogin }) => (
  <Wrapper>
    <HeaderWrapper>
      <Logo to="/" isblue={isblue} isWhite={isWhite}>
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
          <LoginSigninButton href="/sign-in" isLogin={isLogin}>
            <Button text="Вход и регистрация" isTransparent />
          </LoginSigninButton>
        ) : (
          <LoginSigninButton href={`/account/${localStorage.userId}`} isLogin={isLogin}>
            <ProfileWrapper src={ProfileImage} alt="" />
          </LoginSigninButton>
        )}
      </NavigatorContainer>
    </HeaderWrapper>
  </Wrapper>
);

Header.propTypes = {
  isblue: PropTypes.bool,
};

export default Header;
