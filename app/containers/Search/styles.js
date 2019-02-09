import styled from 'styled-components';

export const SearchPageWrapper = styled.div`
  position: relative;
  width: 940px;
  margin: 0 auto;
  padding-top: 131px;
`;

export const ControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 30px;
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
  background: #ffffff;
  width: ${props => props.width || '182px'};
  padding: 10px 10px 10px 40px;
  font-weight: 300;
  font-size: 19px;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  bottom: 7px;
  left: ${props => (props.right ? '' : '10px')};
  right: ${props => (props.right ? '10px' : '')};
`;

export const SelectComponent = styled.select`
  height: 43px;
  border-radius: 4px;
  border: 1px solid #dadada;
  width: ${props => props.width || '182px'};
  padding: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-weight: 300;
  font-size: 19px;
  background: #ffffff;
`;

export const ProfilesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const VideoBlockWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 180px;
  height: 940px;
`;
