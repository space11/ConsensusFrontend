import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
  margin-bottom: 90px;
`;

export const FormBlockWrapper = styled(InputWrapper)`
  z-index: 9900;
  width: 100%;
  margin: 145px 0 90px 0;
`;

export const Input = {
  borderBottom: '1px solid #474D90',
  background: 'transparent',
  height: '3rem',
  marginBottom: '1.5rem',
  width: '100%',
  zIndex: '3',
};

export const Description = styled.div`
  font-weight: 300;
  width: 90%;
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
