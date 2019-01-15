import styled from 'styled-components';

export const SliderWrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  bottom: 0;
  flex: 0 0 auto;
  width: ${props => props.width};
`;

export const TimeLineWrapper = styled.div`
  width: 100%;
  height: 1rem;
  background-image: linear-gradient(90deg, #7ea4d0 0%, #4e5f92 100%);
`;

export const PassedWrapper = styled.div`
  position: absolute;
  z-index: 9999;
`;

export const LeftControl = styled.div`
  width: 121px;
  display: inherit;
  justify-content: space-between;
`;

export const LeftBlock = styled.div`
  display: flex;
  position: absolute;
`;

export const RightControl = styled.div`
  width: 58px;
  display: inherit;
  justify-content: space-between;
`;

export const PassedTimeLineWrapper = styled.div`
  width: ${props => props.lineLength + 15}px;
  z-index: 9999;
  height: 1rem;
  border-radius: 0 50px 50px 0;
  background-image: radial-gradient(at right, #fdf27d, #ea5e75);
`;

export const LowControlFieldWrapper = styled.div`
  display: inherit;
  align-items: center;
  background: #303565;
  width: 100%;
  height: 38px;
  padding: 0 25px;
  justify-content: space-between;
  align-items: center;
`;

export const UpperControlWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #303565;
  width: 100%;
  height: 40px;
  padding: 0 25px;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  flex: 0 0 auto;
`;

export const RoundCenter = styled.div`
  margin: 0 auto;
`;

export const ButtonWrapper = styled.button``;

export const RocketWrapper = styled.button`
  position: absolute;
  top: -5px;
  right: -30px;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const TimeText = styled.div`
  color: #fff;
  outline: none;
  -webkit-user-select: none;
  font-weight: 300;
  font-size: 15px;
`;

export const TimeTextWrapper = styled.div`
  display: flex;
  align-self: center;
  height: 100%;
`;

export const Image = styled.img``;

export const Text = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: #fff;
`;
