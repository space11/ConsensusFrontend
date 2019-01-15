import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: auto;
  width: 100%;
  justify-content: space-between;
`;

export const AlienWrapper = styled.div`
  position: absolute;
  padding: 0 20px;
  animation: go-top-bottom 3s infinite alternate;
  z-index: 99999;
  margin-top: -50px;

  @keyframes go-top-bottom {
    0% {
      transform: translateY(-10%);
    }
    100% {
      transform: translateY(10%);
    }
  }
`;

export const AlienWrapperBottom = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  padding: 20px;

  right: 0;
  height: 100%;
  z-index: 99999;

  animation: go-top-bottom 4s infinite alternate;
`;
