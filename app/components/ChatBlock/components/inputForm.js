import React, { PureComponent } from 'react';
import styled from 'styled-components';
import SmileIcon from '../../../images/Controls/smile';

const InputFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0 0;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const LowLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Input = styled.textarea`
  font-size: 22px;
  width: 90%;
  resize: none;
  font-weight: 300;
  padding-bottom: 1rem;

  &::placeholder {
    color: #474d90;
    font-weight: 300;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const Line = styled.div`
  border: none;
  background-color: #474d90;
  height: 1px;
`;

const ButtonWrapper = styled.button`
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

export default class InputForm extends PureComponent {
  render() {
    return (
      <InputFormWrapper>
        <Line />
        <LowLineWrapper>
          <Input cols="22" rows="1" placeholder="Сообщение..." />
          <ButtonWrapper>
            <SmileIcon />
          </ButtonWrapper>
        </LowLineWrapper>
      </InputFormWrapper>
    );
  }
}
