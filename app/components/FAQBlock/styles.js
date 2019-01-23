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
  height: 824px;
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
  height: 702px;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 122px;
`;

export const Title = styled.div`
  margin: 0 auto;
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 0.625px;
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
`;

export const Description = styled.div`
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.78px;
  color: #dadada;
  width: 796px;
  margin: 0 auto;
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
  flex-direction: column;
  width: 100%;
  margin-top: 80px;
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
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 920px;
  height: 150px;
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

export const AlienFooterImage = styled.img`
  margin-bottom: 37px;
`;

export const Social = styled.img``;

export const Copyright = styled.a`
  font-weight: 300;
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.69552px;
  color: #fff;
  width: 100%;
  margin-bottom: 31px;
`;
