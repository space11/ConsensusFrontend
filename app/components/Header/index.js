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
  SearchButton,
  ProfileWrapper,
  LoginSigninButton,
  NotificationBellWrapper,
  NotificationRedRound,
  NotificationWrapper,
  NotificationContainer,
  NotificationTransparentWrapper,
} from './styles';
import {
  InvitationBlock,
  InvitationBlockFinish,
  InvitationBlockSoon,
  InvitationBlockNow,
} from './components/index';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  render() {
    const { hover } = this.state;
    const { isBlue, isWhite, isLogin, isRed } = this.props;
    const date = new Date();
    return (
      <Wrapper>
        <HeaderWrapper>
          <Logo to="/" isBlue={isBlue} isWhite={isWhite}>
            Консенсус
          </Logo>
          <NavigatorContainer isLogin={localStorage.id_token !== undefined}>
            <NotificationContainer
              onClick={() => this.setState({ hover: true })}
              onMouseLeave={() => this.setState({ hover: false })}
            >
              {hover ? (
                <NotificationWrapper hover={hover}>
                  <NotificationTransparentWrapper />
                  <InvitationBlock
                    date={date.toUTCString()}
                    url="/account/7db7cfcf-ea98-43f0-a9a5-c67944c17a86"
                    nickname="Notan Evchiform"
                    datePlan={date.toUTCString()}
                  />
                  <InvitationBlock
                    date={date.toUTCString()}
                    url="/account/7db7cfcf-ea98-43f0-a9a5-c67944c17a86"
                    nickname="Notan Evchiform"
                    datePlan={date.toUTCString()}
                  />
                  <InvitationBlockFinish
                    date={date.toUTCString()}
                    url="/account/7db7cfcf-ea98-43f0-a9a5-c67944c17a86"
                    nickname="Notan Evchiform"
                  />
                  <InvitationBlockSoon date={date.toUTCString()} />
                  <InvitationBlockNow
                    date={date.toUTCString()}
                    url="/account/7db7cfcf-ea98-43f0-a9a5-c67944c17a86"
                    nickname="Notan Evchiform"
                    datePlan={date.toUTCString()}
                  />
                </NotificationWrapper>
              ) : (
                ''
              )}
              {localStorage.id_token !== undefined ? (
                <NotificationBellWrapper>
                  <NotificationRedRound />
                  <img src={Notification} alt="" />
                </NotificationBellWrapper>
              ) : (
                ''
              )}
            </NotificationContainer>
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
  }
}

Header.propTypes = {
  isBlue: PropTypes.bool,
  isWhite: PropTypes.bool,
  isLogin: PropTypes.bool,
  isRed: PropTypes.bool,
};

export default Header;
