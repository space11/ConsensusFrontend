import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from 'images/header/searchIcon';
import Button from 'components/Button';
import ProfileImage from 'containers/Account/1.jpg';
import Notification from 'images/header/notifications.svg';
import {
  Wrapper,
  HeaderWrapper,
  Logo,
  NavigatorContainer,
  NavigationButton,
  SearchButton,
  ProfileWrapper,
  LoginSigninButton,
  NotificationWrapper,
  NotificationRedRound,
} from './styles';

const Header = ({ isBlue, isWhite, isLogin, isRed }) => (
  <Wrapper>
    <HeaderWrapper>
      <Logo to="/" isBlue={isBlue} isWhite={isWhite}>
        Консенсус
      </Logo>
      <NavigatorContainer>
        <NavigationButton to="/popular" isBlue={isBlue}>
          Популярные
        </NavigationButton>
        <NavigationButton to="/themes" isBlue={isBlue}>
          Тематика
        </NavigationButton>
        <NavigationButton to="/follow" isBlue={isBlue}>
          Подписки
        </NavigationButton>
        <NotificationWrapper>
          <NotificationRedRound />
          <img src={Notification} alt="" />
        </NotificationWrapper>
        <SearchButton isBlue={isBlue}>
          <SearchIcon isBlue={isBlue} />
        </SearchButton>
        {localStorage.id_token === undefined ? (
          <LoginSigninButton href="/sign-in" isLogin={isLogin}>
            <Button text="Вход и регистрация" isTransparent isRed={isRed} />
          </LoginSigninButton>
        ) : (
          <LoginSigninButton
            href={`/account/${localStorage.userId}`}
            isLogin={isLogin}
          >
            <ProfileWrapper src={ProfileImage} alt="" />
          </LoginSigninButton>
        )}
      </NavigatorContainer>
    </HeaderWrapper>
  </Wrapper>
);

Header.propTypes = {
  isBlue: PropTypes.bool,
  isWhite: PropTypes.bool,
  isLogin: PropTypes.bool,
  isRed: PropTypes.bool,
};

export default Header;
