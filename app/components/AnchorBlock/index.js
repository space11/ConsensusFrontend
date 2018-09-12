import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Bg from '../../images/Anchor/bg';
import ActionButton from '../ActionButton';

const AnchorBlockWrapper = styled.div`
  position: relative;

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

const ActionWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5vw;
  height: 70%;
`;

const AreYouReadyText = styled.div`
  font-size: 2.2rem;
  color: #fff;
  margin-bottom: 2rem;
`;

class AnchorBlock extends PureComponent {
  render() {
    return (
      <AnchorBlockWrapper>
        <ActionWrapper>
          <AreYouReadyText>Готовы начать?</AreYouReadyText>
          <ActionButton text="Организовать дебаты" />
        </ActionWrapper>
        <Bg />
      </AnchorBlockWrapper>
    );
  }
}

export default AnchorBlock;
