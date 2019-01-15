import styled from 'styled-components';

export const NotFoundBackground = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-image: linear-gradient(to top, #2b3780, #20244c);
`;

export const Background = styled.img`
  width: 100%;
  height: 100%;
`;

export const UfoWrapper = styled.img`
  z-index: 999;
  margin: 1rem;
  height: 50%;
  animation: 10s slide infinite alternate;

  @keyframes slide {
    0% {
      transform: translateX(-200%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const NotWrapper = styled.img`
  z-index: 999;
  margin: 1rem;
  height: 30%;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  align-items: center;
  padding: 50px;
  justify-content: space-around;
`;
