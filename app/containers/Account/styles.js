import styled from 'styled-components';

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
`;

export const ProfileShadow = styled.input`
  position: absolute;
  width: 250px;
  height: 250px;
  background: #000000;
  mix-blend-mode: normal;
  opacity: 0.6;
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
`;

export const Nickname = styled.div`
  top: 750px;
  font-size: 36px;
  font-weight: 400;
  -webkit-user-select: none;
  margin-bottom: 40px;
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
  margin-top: 20px;
`;

export const Label = styled.div`
  font-weight: 400;
  font-size: 20px;
  margin-right: 20px;
  width: 110px;
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
