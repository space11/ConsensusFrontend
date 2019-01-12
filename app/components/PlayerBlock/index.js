import React, { Component } from 'react';
import styled from 'styled-components';
import OpvSession from 'openvidu-react';
import Slider from './components/slider';

const PlayerBlockWrapper = styled.div`
  position: relative;
  display: flex;
  height: 617px;
  width: 902px;
  margin-bottom: 30px;
`;

class PlayerBlock extends Component {
  render() {
    const { width } = this.props;
    return (
      <PlayerBlockWrapper>
        <OpvSession
          id="opv-session"
          sessionName={localStorage.id_session}
          user="deviantkun"
          openviduServerUrl="https://localhost:4443"
          openviduSecret="MY_SECRET"
          joinSession={() => ({})}
          leaveSession={() => ({})}
          error={() => ({})}
        />
        <Slider
          width={width}
          isPlaying
          talking="Pynya"
          round="1"
          time="12:30"
        />
      </PlayerBlockWrapper>
    );
  }
}

export default PlayerBlock;
