import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom';
import Img from 'react-image';
import Space from 'components/Space';
import PlayerBlock from 'components/PlayerBlock';
import Bg from 'images/register/background.svg';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #2B3780;
  }
`;

const RegisterWrapper = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: center;
  align-items: center;
  height: calc(100vh -10%);
  top: 0;
  z-index: 1000;
  background-color: #2b3780;
`;

const Background = styled(Img)`
  position: absolute;
  min-width: 100%;
  height: 100%;
  top: 0;
  z-index: 1;
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  min-height: 100%;
  min-width: 100%;
  top: 0;
  align-self: center;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  align-self: center;
  flex-direction: column;
  background: #20244c;
  width: 41vw;
  z-index: 2;
  border-radius: 1rem;
  padding: 2em 3em;
  margin: 15vh 0;
  box-shadow: 0 3px 10px #000;

  @media screen and (max-width: 610px) {
    width: 90%;
    height: auto;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 2em;
  color: #fff;
  -webkit-user-select: none;
  text-align: center;
`;

const Text = styled.div`
  text-align: center;
  color: #fff;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 13rem;
`;

const NormalText = styled.label`
  color: #fff;
  word-wrap: break-word;
  -webkit-user-select: none;
`;

const SubmitButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #b998ea, #e2958c);
  border-radius: 0.4rem;
  height: 3rem;
  width: 100%;
  color: #fff;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    transform: scale(1.01);
    animation: anim 2s alternate infinite;
  }

  @keyframes anim {
    50% {
      background: #b998ea;
      box-shadow: 0.4rem #e2958c inset;
    }
  }
`;

const LoginButton = styled(NavLink)`
  margin-left: 0.5rem;
  color: #f7567c;
`;

class Testing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RegisterWrapper>
        <GlobalStyle />
        <BackgroundWrapper>
          <Background src={Bg} alt="" />
        </BackgroundWrapper>
        <ContentWrapper>
          <Title>Проверка</Title>
          <Space size="1" />
          <Text>Пожалуйста, убедитесь, что вас хорошо видно и слышно</Text>
          <Space size="2" />
          <PlayerBlock />
          <Space size="2" />
          <div>
            <NormalText>Неполадки?</NormalText>
            <LoginButton to="sign-in">
              Прочтите статью по настройке звука и веб-камеры.
            </LoginButton>
          </div>
          <Space size="2" />
          <SubmitButton to="/account">Все работает отлично</SubmitButton>
          <Space size="1" />
        </ContentWrapper>
      </RegisterWrapper>
    );
  }
}

export default Testing;
