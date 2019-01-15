import styled from 'styled-components';

export const InputFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  position: relative;
  width: 100%;
  padding: 10px 20px;
  height: 47px;
  border: solid #dadada;
  border-width: 1px 0 0 0;
  margin-top: 19px;
`;

export const LowLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  width: 90%;
  font-size: 16px;
  letter-spacing: 0.602182px;
  height: 19px;

  &::placeholder {
    color: #7d81b0;
    font-weight: 300;
  }
`;

export const ButtonWrapper = styled.button``;

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 992px;
  background: #f9f9f9;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
`;

export const TitleBlock = styled.div`
  display: flex;
  background: #f9f9f9;
  border: solid #dadada;
  border-width: 0 0 1px 0;
  width: 100%;
  height: 47px;
  align-items: center;
  padding: 0 20px;
  border-radius: 5px 5px 0 0;
`;

export const Title = styled.h1`
  -webkit-user-select: none;
  font-size: 25px;
  letter-spacing: 0.338727px;
  color: #000000;
  font-weight: normal;
  line-height: normal;
`;

export const MessageBlock = styled.ol`
  height: 514px;
  padding: 0 20px;
  list-style: none;
  overflow-y: scroll;
  word-wrap: break-word;
  overflow-x: hidden;
  min-width: 100%;
`;
