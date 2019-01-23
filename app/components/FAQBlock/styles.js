import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FaqBlockWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const AnchorWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 857px;
  width: 100%;
  margin-bottom: 33px;
  z-index: 1;
`;

export const HumanWrapper = styled.div`
  position: absolute;
  margin-top: 113px;
  right: 0;
`;

export const GrayWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  margin-bottom: 33px;
  margin-left: 22px;
  bottom: 0;
`;

export const BackgroundWrapper = styled.img`
  z-index: 0;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 840px;
  padding-top: 122px;
  margin: 0 auto;
`;

export const Title = styled.div`
  margin: 0 auto;
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 0.625px;
  color: #fff;
  margin-bottom: 20px;
`;

export const Description = styled.div`
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.78px;
  color: #dadada;
  width: 796px;
  margin-bottom: 60px;
`;

export const Link = styled(NavLink)`
  color: #4a90e2;
`;

export const LinePairWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 840px;
`;

export const LinesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 257px;
  justify-content: space-between;
`;

export const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 80px;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const MainContentWrapper = styled.div`
  position: absolute;
  width: 100%;
`;

export const ButtonWrapper = styled(NavLink)`
  margin-top: auto;
  align-self: center;
  justify-self: center;
`;

export const FooterLinkWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 920px;
  height: 150px;
  margin-top: 44px;
`;

export const FooterLinkSmallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: space-between;
`;

export const FooterLinkSocialWrapper = styled.div`
  display: flex;
  height: 150px;
  justify-content: space-between;
  align-items: center;
`;

export const FooterLink = styled(NavLink)`
  font-size: 20px;
  letter-spacing: 1.25px;
  color: #fff;
`;

export const SocialLink = styled.a`
  font-size: 20px;
  letter-spacing: 1.25px;
  color: #fff;
`;

export const FooterSocial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 138px;
  margin-right: 11px;
`;

export const Social = styled.img``;
