import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DebateWrapper = styled.div`
  display: flex;
  min-width: 100%;
  height: 100%;
  z-index: 1000;
  background: #f9f9f9;
`;

export const Background = styled.img`
  position: relative;
  top: 0;
  overflow: hidden;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const CreateDebateFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 999;
  height: 100%;
  margin: 10vw 6vw;

  @media screen and (max-width: 900px) {
    width: 100%;
    margin: 0;
    justify-content: center;
    align-items: center;
    padding: 10vw;
  }
`;

export const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 90px;
  width: 30vw;

  @media screen and (max-width: 900px) {
    width: 60vw;
  }
`;

export const Input = {
  width: '100%',
  marginBottom: '1.5vw',
};

export const Label = styled.label`
  -webkit-user-select: none;
  font-size: 1.7vw;
  letter-spacing: 0.211704px;
  margin-bottom: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 900px) {
    justify-content: center;
    align-items: center;
  }
`;

export const InviteOpponentWrapper = styled.div`
  position: relative;
`;

export const FieldSuggestionsWrapper = styled.div`
  margin-top: -1.6vw;
  width: 100%;
  background: #fff;
  border-radius: 0 0 7px 7px;
  border: 2px solid #474d90;
`;

export const OpponentFieldWrapper = styled(NavLink)`
  width: 100%;
  height: 50px;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-right: 15px;
  object-fit: cover;
`;

export const Nickname = styled.div`
  font-size: 18px;
  color: #000;
`;
