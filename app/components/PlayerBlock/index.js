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
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  render() {
    const { width } = this.props;
    const { show } = this.state;
    return (
      <PlayerBlockWrapper
        onMouseEnter={() => this.setState({ show: true })}
        onMouseLeave={() => this.setState({ show: false })}
      >
        <OpvSession
          id="opv-session"
          sessionName={localStorage.id_session}
          user="deviantkun"
          openviduServerUrl={localStorage.session_url}
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
          show={show}
        />
      </PlayerBlockWrapper>
    );
  }
}

export default PlayerBlock;
