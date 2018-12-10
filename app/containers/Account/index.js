import React, { Component } from 'react';
import Img from 'react-image';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Bg from 'images/account/background.svg';
import EditIcon from 'images/account/edit.svg';
import RocketIcon from 'images/account/rocket.svg';
import AvaPlaceholder from 'images/placeholders/avatar.svg';
import Content from 'components/Content';
import Space from 'components/Space';
import ActionButton from 'components/ActionButton';

const AccountPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  min-height: 100vh;
  align-items: center;
`;

const Background = styled(Img)`
  position: absolute;
  min-height: 100%;
  top: -180px;
  z-index: 1;
`;

const BackgroundWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  min-height: 100%;
  min-width: 100%;
  top: 0;
  align-self: center;
  overflow: hidden;
`;

const AccountLine = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 33vh;
  width: 100%;
  z-index: 200;
`;

const AvatarWrapper = styled(Img)`
  border: 30px solid #fff;
  border-radius: 1000px;
  width: 30vh;
  height: 30vh;
  max-width: 40rem;
  max-height: 40rem;
  z-index: 200;
`;

const AccountContentWrapper = styled(Content)`
  flex-direction: column;
  z-index: 999;
  height: 100%;
  width: 50%;
`;

const NicknameField = styled.h1`
  font-weight: 400;
  text-align: center;
`;

const EditButton = styled(Img)``;

const EditButtonWrapper = styled.button`
  margin-left: 0.5rem;
`;

const FollowerLine = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  padding: 0 20rem;
  z-index: 10;
`;

const FollowerWrapper = styled.div`
  display: flex;
  border-radius: 10rem;
  width: 100px;
  height: 100px;
  background: #f9f9f9;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 20px -8px #000;
  margin: 1rem;
`;

const InfoBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoTitle = styled.h2``;

const InfoBlock = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 1rem 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  margin: 1rem auto;
`;

const TestWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Test = styled(NavLink)`
  color: #2b3780;
  width: 100%;
  text-align: center;
`;

const Rocket = styled(Img)`
  position: absolute;
  width: 100px;
  height: 100px;
  z-index: 100;
`;

const RocketWrapper = styled.div`
  position: absolute;
  top: 15vh;
  width: 400px;
  height: 150px;
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

const FollowerDiv = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.1rem;
  text-align: center;
`;

class AccountPage extends Component { //eslint-disable-line
  render() {
    return (
      <AccountPageWrapper>
        <BackgroundWrapper>
          <Background src={Bg} alt="" />
          <RocketWrapper>
            <Rocket src={RocketIcon} alt="" />
          </RocketWrapper>
        </BackgroundWrapper>
        <AccountLine>
          <FollowerLine>
            <FollowerDiv>
              <FollowerWrapper style={{ marginTop: '-5vh' }}>
                1000
              </FollowerWrapper>
              Подписчики
            </FollowerDiv>
            <AvatarWrapper src={AvaPlaceholder} alt="" />
            <FollowerDiv>
              <FollowerWrapper
                style={{ marginTop: '-5vh', textAlign: 'center' }}
              >
                1000
              </FollowerWrapper>
              Подписки
            </FollowerDiv>
          </FollowerLine>
        </AccountLine>
        <AccountContentWrapper>
          <NicknameField>
            Notan Evchiform
            <EditButtonWrapper>
              <EditButton src={EditIcon} alt="" />
            </EditButtonWrapper>
          </NicknameField>
          <TestWrapper>
            <Test to="/testing">Тестирование веб-камеры и звука</Test>
          </TestWrapper>
          <Space size="2" />
          <InfoBlockWrapper>
            <InfoBlock>
              <InfoTitle>Репутация:</InfoTitle>
              <div style={{ marginLeft: '1rem', fontSize: '1.5rem' }}>
                Опытный (200 реп.)
              </div>
            </InfoBlock>
            <InfoBlock>
              <InfoTitle>О себе:</InfoTitle>
              <div style={{ marginLeft: '1rem', fontSize: '1.5rem' }}>
                developer/student/boytoy //ugly, cute and dying
                <EditButtonWrapper>
                  <EditButton src={EditIcon} alt="" />
                </EditButtonWrapper>
              </div>
            </InfoBlock>
          </InfoBlockWrapper>
          <Space size="3" />
          <ButtonWrapper>
            <ActionButton url="/" text="Подписаться" />
          </ButtonWrapper>
        </AccountContentWrapper>
      </AccountPageWrapper>
    );
  }
}

export default AccountPage;
