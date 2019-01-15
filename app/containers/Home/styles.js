import styled from 'styled-components';

export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

export const OverflowBlock = styled.div`
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative;
`;

export const InfoBannerStyle = styled.div`
  @media screen and (max-width: 982px) {
    display: none;
  }
`;

export const BannerImage = styled.img`
  position: relative;
  align-self: center;
  min-width: 100%;
  top: 0;
`;
