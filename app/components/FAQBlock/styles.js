import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FaqBlockWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Content = styled.div`
  margin: 10vw 0;
`;

export const AnchorWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 33px;
  z-index: 1;
`;

export const BackgroundWrapper = styled.img`
  z-index: 0;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Title = styled.div`
  margin: 0 auto;
  font-weight: bold;
  font-size: 1.8vw;
  color: #fff;
  margin-bottom: 1.5vw;
  text-align: center;
`;

export const Description = styled.div`
  font-size: 1.1vw;
  text-align: center;
  color: #dadada;
  width: 45vw;
  margin: 0 auto;
  margin-bottom: 5vw;
`;

export const Link = styled(NavLink)`
  color: #4a90e2;
`;

export const LinePairWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const LinesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 13.5vw;
  max-height: 260px;
  width: 45vw;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const MainContentWrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  width: 100%;
  bottom: 0;
`;

export const ButtonWrapper = styled(NavLink)`
  align-self: center;
`;

export const FooterLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60vw;
  margin-bottom: 8.5vw;
`;

export const FooterLinkSmallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 9.05vw;
  justify-content: space-between;
`;

export const FooterLinkSocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterLink = styled(NavLink)`
  font-size: 1.2vw;
  color: #fff;
`;

export const SocialLink = styled.a`
  font-size: 1.2vw;
  color: #fff;
`;

export const FooterSocial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 8.1vw;
  margin-right: 11px;
`;

export const AlienFooterImage = styled.img`
  margin-bottom: 37px;
`;

export const Social = styled.img`
  width: 1.2vw;
`;

export const Copyright = styled.a`
  font-weight: 300;
  font-size: 1.1vw;
  text-align: center;
  color: #fff;
  width: 100%;
  margin-bottom: 1.1vw;
`;
