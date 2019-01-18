import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
  min-width: 700px;
  justify-content: space-between;
  margin: 0 30px;
`;

export const NavigationButton = styled(NavLink)`
  font-size: 20px;
  font-weight: 400;
  color: ${props => (props.isBlue ? '#474D90' : '#fff')};
  text-decoration: none;
  justify-content: center;
  letter-spacing: 1.5px;
  transition: 0.3s;
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

export const LoginSigninButton = styled.a`
  display: ${props => (props.isLogin ? 'none' : 'flex')};
`;
