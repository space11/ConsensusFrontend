import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BannerWrapper = styled.div`
  display: flex;
  height: 64vw;
`;

export const BannerDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const BannerDescriptionLine = styled.div`
  color: #fff;
  font-size: 3vw;
  text-align: center;
  letter-spacing: 0.1vw;
  -webkit-user-select: none;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
`;

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const BannerImage = styled.img`
  width: 100%;
  position: absolute;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 60px;
`;

export const BannerContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  top: 0;
  padding: 15vw 68px;
  z-index: 100;
`;

export const ButtonWrapper = styled(NavLink)`
  margin-top: auto;
  align-self: center;
  justify-self: center;
  z-index: 99999;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
