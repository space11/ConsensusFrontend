import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PlayerBlock from '../../components/PlayerBlock';
import ChatBlock from '../../components/ChatBlock';
import VoteBlock from '../../components/VoteBlock';

const RoomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1vw 3vw 1vw 3vw;
  flex-wrap: wrap;
`;

const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

/* eslint-disable react/prefer-stateless-function */
export default class RoomPage extends PureComponent {
  render() {
    return (
      <RoomWrapper>
        <PlayerBlock />
        <LeftBlock>
          <VoteBlock />
          <ChatBlock />
        </LeftBlock>
      </RoomWrapper>
    );
  }
}
