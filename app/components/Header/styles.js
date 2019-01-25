import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';

const bounceAnimation = keyframes`${bounceIn}`;

export const Wrapper = styled.div`
  position: relative;
  flex-direction: column;
`;

export const HeaderWrapper = styled.div`
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

export const Logo = styled(NavLink)`
  display: flex;
  font-size: 36px;
  letter-spacing: 0.25px;
  font-weight: 500;
  color: ${props => (props.isWhite ? '#474D90' : '#fff')};
  text-decoration: none;
  transition: 0.3s;
  float: left;
`;

export const NavigatorContainer = styled.div`
  display: flex;
  align-items: center;
  width: ${props => (props.isLogin ? '135px' : '295px')};
  justify-content: space-between;
  margin: 0 0 0 30px;
`;

export const SearchButton = styled.button`
  color: ${props => (props.isBlue ? '#474D90' : '#fff')};
  cursor: pointer;
`;

export const ProfileWrapper = styled.img`
  display: flex;
  width: 44px;
  height: 44px;
  border-radius: 100px;
  background: #000;
  cursor: pointer;
`;

export const LoginSigninButton = styled(NavLink)`
  display: ${props => (props.isLogin ? 'none' : 'flex')};
`;

export const NotificationBellWrapper = styled.button`
  position: relative;
  z-index: 9;
  cursor: pointer;
`;

export const NotificationTransparentWrapper = styled.div`
  position: absolute;
  height: 1000px;
  width: 100vw;
  top: 0;
  right: 0;
  z-index: 99;
`;

export const NotificationRedRound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f7567c;
  border-radius: 100px;
  height: 17px;
  width: 17px;
  position: absolute;
  top: -3px;
  right: -6px;
  z-index: 10;
  border: 2px solid ${props => (props.isBlue ? '#fff' : '#232754')};
  text-align: center;
  color: #fff;
  font-size: 7px;
  font-weight: bold;
`;

export const NotificationWrapper = styled.div`
  position: absolute;
  flex-direction: column;
  width: 418px;
  top: 82px;
  right: 158px;
  background: #fff;
  border: 1px solid #dadada;
  border-radius: 5px 0 5px 5px;
  z-index: 99999;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.16);
  transition: 0.8s;
  animation: 0.3s ${props => (props.hover ? bounceAnimation : '')};

  &::before,
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: -26px;
    border: 13px solid transparent;
    border-bottom: 13px solid #fff;
  }

  &::before {
    position: absolute;
    border: 14px solid transparent;
    border-bottom: 14px solid #dadada;
    top: -29px;
    right: -1px;
  }
`;

export const NotificationContainer = styled.div`
  z-index: 100;
`;

export const NotificationInvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #dadada;
  padding: 16px 20px;
  z-index: 10;
`;

export const NotificationInvitationDate = styled.div`
  font-weight: 300;
  font-size: 10px;
  color: #9b9b9b;
  -webkit-user-select: none;
  margin-bottom: 5px;
`;

export const NotificationInvitationNickname = styled(NavLink)`
  font-weight: 300;
  font-size: 16px;
  color: #f7567c;
  width: 130px;
`;

export const NotificationInvitationText = styled.div`
  font-weight: 300;
  font-size: 16px;
  word-wrap: break-word;
  margin-bottom: 10px;
`;

export const NotificationInvitationDatePlan = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

export const NotificationInvitationButtonWrapper = styled.div`
  display: flex;
  height: 27px;
  justify-content: flex-end;
`;

export const Inner = styled.div`
  max-height: 629px;
  overflow-y: overlay;
  overflow-x: hidden;
`;
