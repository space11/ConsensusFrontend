import styled from 'styled-components';
import { Field } from 'redux-form';

export const ForgotPageWrapper = styled.div`
  display: flex;
  min-width: 100%;
  height: 100%;
  z-index: 1000;
`;

export const Background = styled.img`
  position: relative;
  top: 0;
  overflow: hidden;
`;

export const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: -30px;
  margin-bottom: 50px;
`;

export const ForgotFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 99999;
  height: 100%;
  margin-left: 90px;
`;

export const FormBlockWrapper = styled(InputWrapper)`
  z-index: 9900;
  width: 100%;
  margin: 266px 0 106px 0;
`;

export const Description = styled.div`
  font-weight: 300;
  width: 467px;
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
