import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PlayerBlock from '../../components/PlayerBlock';
import ChatBlock from '../../components/ChatBlock';

const RoomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1vw 4vw 1vw 4vw;
  flex-wrap: wrap;
`;

/* eslint-disable react/prefer-stateless-function */
export default class RoomPage extends PureComponent {
  render() {
    return (
      <RoomWrapper>
        <PlayerBlock />
        <ChatBlock />
      </RoomWrapper>
    );
  }
}
