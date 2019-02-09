import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlayerPlaceholder from 'images/placeholders/playerPlaceholder.svg';
// import OpvSession from 'openvidu-react';

import Slider from './components/slider';
import { PlayerBlockWrapper, Placeholder } from './styles';

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
        <Placeholder>
          <img src={PlayerPlaceholder} alt="" />
        </Placeholder>
        {/* <OpvSession
          id="opv-session"
          sessionName={localStorage.id_session}
          user="deviantkun"
          openviduServerUrl={localStorage.session_url}
          joinSession={() => ({})}
          leaveSession={() => ({})}
          error={() => ({})}
        /> */}
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

PlayerBlock.propTypes = {
  width: PropTypes.string,
};

export default PlayerBlock;
