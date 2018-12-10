import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Bg from 'images/anchor/background';
import Button from '../Button';

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
  color: #fff;
  margin-bottom: 2rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: 2.3em;
  text-align: center;
  letter-spacing: 1.11px;
`;

class AnchorBlock extends PureComponent { // eslint-disable-line
  render() {
    const { clickDebate } = this.props;
    return (
      <AnchorBlockWrapper>
        <ActionWrapper>
          <AreYouReadyText>Готовы начать?</AreYouReadyText>
          <Button text="Организовать дебаты" onButtonClick={clickDebate} />
        </ActionWrapper>
        <Bg />
      </AnchorBlockWrapper>
    );
  }
}

export default AnchorBlock;
