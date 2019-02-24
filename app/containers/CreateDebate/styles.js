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
`;

export const CreateDebateFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 999;
  height: 100%;
  margin-left: 90px;
  margin-top: 182px;
`;

export const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 90px;
`;

export const Input = {
  border: '1px solid #474D90',
  background: '#fff',
  height: '56px',
  marginBottom: '40px',
  width: '474px',
  zIndex: '3',
  borderRadius: '7px 7px 0 0',
  padding: '5px 15px',
};

export const Label = styled.label`
  -webkit-user-select: none;
  font-size: 30px;
  letter-spacing: 0.211704px;
  margin-bottom: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const InviteOpponentWrapper = styled.div`
  position: relative;
`;

export const FieldSuggestionsWrapper = styled.div`
  margin-top: -41px;
  width: 100%;
  background: #fff;
  border-radius: 0 0 7px 7px;
  border: 1px solid #474d90;
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
