import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from 'images/header/searchIcon';
import Button from 'components/Button';
import ProfileImage from 'containers/Account/1.jpg';
import { Notification } from 'images/header/notifications';
import * as Styles from './styles';
import {
  InvitationBlock,
  InvitationBlockFinish,
  InvitationBlockSoon,
  InvitationBlockNow,
} from './components';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      intervalId: 0,
    };
  }

  render() {
    const { hover, intervalId } = this.state;
    const { isBlue, isWhite, isLogin, isRed } = this.props;
    const date = new Date();
    return (
      <Styles.Wrapper>
        <Styles.HeaderWrapper>
          <Styles.Logo to="/" isBlue={isBlue} isWhite={isWhite}>
            Консенсус
          </Styles.Logo>
          <Styles.NavigatorContainer
            isLogin={localStorage.id_token !== undefined}
          >
            {hover ? (
              <Styles.NotificationTransparentWrapper
                onClick={() => this.setState({ hover: false })}
              />
            ) : (
              ''
            )}
            <Styles.NotificationContainer
              onClick={() => this.setState({ hover: true })}
              onMouseEnter={() => {
                clearInterval(intervalId);
              }}
              onMouseLeave={() => {
                this.setState({
                  intervalId: setInterval(
                    () => this.setState({ hover: false }),
                    3000,
                  ),
                });
              }}
            >
              {hover ? (
                <Styles.NotificationWrapper hover={hover}>
                  <Styles.Inner>
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
                    <InvitationBlockNow
                      date={date.toUTCString()}
                      url="/account/7db7cfcf-ea98-43f0-a9a5-c67944c17a86"
                      nickname="Notan Evchiform"
                      datePlan={date.toUTCString()}
                    />
                  </Styles.Inner>
                </Styles.NotificationWrapper>
              ) : (
                ''
              )}
              {localStorage.id_token !== undefined ? (
                <Styles.NotificationBellWrapper>
                  <Styles.NotificationRedRound isBlue={isBlue} />
                  <Notification isBlue={isBlue} />
                </Styles.NotificationBellWrapper>
              ) : (
                ''
              )}
            </Styles.NotificationContainer>
            <Styles.SearchButton to="/search/1" isBlue={isBlue}>
              <SearchIcon isBlue={isBlue} />
            </Styles.SearchButton>
            {localStorage.id_token === undefined ? (
              <Styles.LoginSigninButton to="/sign-in" isLogin={isLogin}>
                <Button text="Вход и регистрация" isTransparent isRed={isRed} />
              </Styles.LoginSigninButton>
            ) : (
              <Styles.LoginSigninButton
                to={`/account/${localStorage.userId}`}
                isRed={isRed}
                isLogin={isLogin}
              >
                <Styles.ProfileWrapper src={ProfileImage} alt="" />
              </Styles.LoginSigninButton>
            )}
          </Styles.NavigatorContainer>
        </Styles.HeaderWrapper>
      </Styles.Wrapper>
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
