import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Field } from 'redux-form';

export const LoginWrapper = styled.div`
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

export const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 99999;
  height: 100%;
  margin-left: 90px;
`;

export const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormBlockWrapper = styled(InputWrapper)`
  z-index: 9900;
  width: 100%;
  margin: 145px 0 90px 0;
`;

export const Description = styled.div`
  font-weight: 300;
  width: 90%;
`;

export const AdvField = styled(Field)`
  transition: 0.3s;
  &:focus {
    padding-left: 10px;
  }
`;

export const Title = styled.h1`
  color: #2b367e;
  margin: 0;
`;

export const Url = styled(NavLink)`
  color: #f7567c;
  font-weight: 500;
`;

export const Label = styled.label`
  -webkit-user-select: none;
  font-size: 0.9rem;
`;

export const ControlLine = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  margin-bottom: 80px;
`;

export const ForgetButton = styled.button`
  color: #f7567c;
`;

export const InputComponent = styled.input`
  margin-right: 10px;
`;

export const Error = styled.div`
  color: #f7567c;
  font-size: 15px;
  margin-top: 15px;
  margin-bottom: -15px;
  -webkit-user-select: none;
`;

export const InputField = styled.div`
  margin-bottom: 30px;
`;
