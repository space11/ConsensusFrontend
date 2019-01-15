import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  background: #303565;
  width: 100%;
  height: 103px;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 589px;
`;

export const MenuButton = styled(NavLink)`
  font-size: 18px;
  color: #fff;
  cursor: pointer;
`;

export const Copyright = styled.button`
  font-weight: 300;
  font-size: 13px;
  text-align: center;
  color: #fff;
  margin: 15px 0 0 0;
  cursor: pointer;
`;

export const SocialWrapper = styled.div`
  position: absolute;
  display: flex;
  right: 50px;
  width: 120px;
  justify-content: space-between;
  align-items: center;
`;

export const SocialButton = styled.button`
  cursor: pointer;
`;
