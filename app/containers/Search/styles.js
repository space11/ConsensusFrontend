import styled from 'styled-components';

export const SearchPageWrapper = styled.div`
  position: relative;
  width: 940px;
  margin: 0 auto;
  height: 1042px;
  padding-top: 131px;
`;

export const ControlWrapper = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 0.532286px;
  color: #000;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  height: 43px;
  border-radius: 4px;
  border: 1px solid #dadada;
  width: ${props => props.width || '182px'};
  padding: 10px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
