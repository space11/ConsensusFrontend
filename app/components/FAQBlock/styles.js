import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FaqBlockWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const AnchorWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  height: 857px;
  width: 100%;
`;

export const HumanWrapper = styled.div`
  position: absolute;
  top: 113px;
  right: 0;
`;

export const GrayWrapper = styled.div`
  position: absolute;
  bottom: 33px;
  left: 22px;
`;

export const BackgroundWrapper = styled.img`
  width: 100%;
`;

export const ContentWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 122px;
  width: 840px;
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
