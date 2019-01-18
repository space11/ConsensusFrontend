import styled from 'styled-components';

export const BannerWrapper = styled.div`
  display: flex;
  width: 100%;
  top: 20%;
  height: inherit;
  align-items: center;
  position: absolute;
  justify-content: center;
  @media screen and (max-width: 900px) {
    top: 25%;
  }
`;

export const BannerDescriptionWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  min-height: 90%;
  z-index: 999;
`;

export const BannerDescriptionLine = styled.div`
  color: #fff;
  text-align: center;
  z-index: 1;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 2.3em;
  margin-bottom: 20px;
`;

export const RocketWrapper = styled.div`
  height: 25%;
  margin-top: 120px;
  animation: 3s slideOutLeft infinite alternate;

  @keyframes slideOutLeft {
    0% {
      transform: translateX(-25%);
    }
    100% {
      transform: translateX(70%);
    }
  }

  @media screen and (max-width: 900px) {
    animation: none;
    margin: 0 auto;
  }
`;

export const AliensWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 3rem;
  margin-top: -120px;
  align-items: center;
`;

export const RedAlienWrapper = styled.div`
  @media screen and (max-width: 900px) {
    display: none;
  }

  animation: 3s slideUp infinite alternate;

  @keyframes slideUp {
    0% {
      transform: translateY(-2%);
    }
    100% {
      transform: translateY(2%);
    }
  }
`;

export const YellowAlienWrapper = styled.div`
  display: flex;

  animation: 3.5s slideUp infinite alternate;

  @keyframes slideUp {
    0% {
      transform: translateY(-4%);
    }
    100% {
      transform: translateY(4%);
    }
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2vw auto;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;