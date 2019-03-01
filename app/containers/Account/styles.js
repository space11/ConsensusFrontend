import styled, { keyframes } from 'styled-components';
import { fadeIn, fadeOut, rotateIn, rotateOut } from 'react-animations';

const fade = keyframes`${fadeIn}`;
const out = keyframes`${fadeOut}`;
const flip = keyframes`${rotateIn}`;
const flipOut = keyframes`${rotateOut}`;

export const AccountPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackgroundComponent = styled.img`
  position: absolute;
  z-index: 1;
  height: 570px;
  width: 100%;
  border-radius: 0 0 100% 100%;
  background: linear-gradient(360deg, #2b3780 0%, #2d3270 50%, #20244c 100%);
`;

export const FollowLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  z-index: 3;
  top: 480px;
  margin-top: 470px;
`;

export const FollowComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FollowBlock = styled.button`
  display: flex;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.16);
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-weight: 300;
  cursor: pointer;
`;

export const Span = styled.span`
  font-weight: 300;
  font-size: 20px;
  -webkit-user-select: none;
`;

export const ProfileImageBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background: #fff;
  z-index: 100;
  border-radius: 500px;
  margin-top: -200px;
  margin-bottom: 20px;
  z-index: 200;
  margin-top: 400px;
`;

export const ProfileShadow = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  background: #000000;
  mix-blend-mode: normal;
  border-radius: 500px;
  cursor: pointer;
`;

export const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 500px;
`;

export const CameraComponent = styled.img`
  position: absolute;
  cursor: pointer;
  opacity: 1;
  z-index: 99999;
`;

export const Nickname = styled.div`
  top: 750px;
  font-size: 36px;
  font-weight: 400;
  -webkit-user-select: none;
  margin-bottom: 5px;
`;

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  top: 850px;
  width: 784px;
  margin-bottom: 60px;
`;

export const ContentLine = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 20px;
  margin-right: 20px;
  width: 110px;
  -webkit-user-select: none;
`;

export const Content = styled.div`
  font-weight: 300;
  word-wrap: break-word;
  width: 654px;
`;

export const ButtonLine = styled.div`
  display: flex;
  width: 784px;
  justify-content: flex-end;
  margin-bottom: 60px;
`;

export const RocketWrapper = styled.div`
  position: absolute;
  top: 15vh;
  width: 300px;
  height: 400px;
  z-index: 120;
  animation: spin 7s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const RocketComponent = styled.img`
  -webkit-user-select: none;
  position: absolute;
  width: 100px;
  height: 100px;
  z-index: 20;
`;

export const SendAgain = styled.button`
  font-size: 20px;
  letter-spacing: 0.56px;
  color: #2b367e;
  cursor: pointer;
`;

export const InputField = styled.input`
  border-radius: 5px;
  width: 100%;
  height: 44px;
  border: 1px solid #dadada;
  padding: 10px;
`;

export const InputTextField = {
  borderRadius: '5px',
  width: '100%',
  height: '138px',
  border: '1px solid #dadada',
  padding: '10px',
  resize: 'none',
};

export const Error = styled.div`
  color: #f7567c;
  font-size: 15px;
  margin-top: 15px;
  margin-bottom: -15px;
  -webkit-user-select: none;
`;

export const EditedContentLine = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const ChangePasswordButton = styled.button`
  font-weight: 400;
  font-size: 20px;
  margin-right: 20px;
  cursor: pointer;
`;

export const ChangePasswordLabel = styled.div`
  font-weight: 400;
  font-size: 20px;
  margin-right: 20px;
  width: 279px;
`;

export const StoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  animation: 0.3s ${props => (props.shownStory ? fade : out)};
`;

export const TestLink = styled.button`
  font-size: 20px;
  letter-spacing: 0.127023px;
  color: #2b3780;
  margin-bottom: 30px;
  cursor: pointer;
`;

export const Test = styled.div`
  position: absolute;
  height: 1449px;
  width: 100%;
  z-index: 10000;
  display: flex;
  justify-content: center;
`;

export const TestShadowWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 1449px;
  width: 100%;
  background: #000;
  opacity: 0.3;
`;

export const TestWrapper = styled.div`
  position: fixed;
  background: #f9f9f9;
  border-radius: 5px;
  width: 468px;
  z-index: 100000;
  margin-top: 250px;
`;

export const TestTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  letter-spacing: 0.56px;
  padding: 20px 30px;
  width: 100%;
  border-bottom: 1px solid #dadada;
  -webkit-user-select: none;
`;

export const TestContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width; 100%;
  padding: 20px 30px;
`;

export const CrossWrapper = styled.button`
  cursor: pointer;
`;

export const Microphone = styled.div`
  font-size: 20px;
  letter-spacing: 0.56px;
  margin-bottom: 15px;
`;

export const LevelNumberWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const LevelNumber = styled.div`
  font-weight: 300;
  font-size: 16px;
  -webkit-user-select: none;
`;

export const LevelLine = styled.div`
  position: relative;
  width: 100%;
  height: 7px;
  background: #dadada;
  border: 0.5px solid #dadada;
  border-radius: 5px;
  z-index: 7;
  margin-bottom: 20px;
`;

export const LevelLineColored = styled.div`
  background: linear-gradient(90deg, #f9f9f9 0%, #2c3579 100%);
  border: 0.5px solid #dadada;
  border-radius: 7px;
  height: 7px;
  position: absolute;
  width: ${props => props.width};
  top: 0;
  z-index: 10;
`;

export const CameraTitle = styled.div`
  font-size: 16px;
  letter-spacing: 0.56px;
  margin-bottom: 10px;
`;

export const ArrowComponent = styled.img`
  animation: .3s ${props => (props.shownStory ? flip : flipOut)};
  /* transform: ${props =>
    props.shownStory ? 'rotate(180deg)' : 'rotate(360deg)'}; */
`;
