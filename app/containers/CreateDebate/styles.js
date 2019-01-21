import styled from 'styled-components';

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
  background: 'transparent',
  height: '56px',
  marginBottom: '40px',
  width: '474px',
  zIndex: '3',
  borderRadius: '7px',
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
