import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PlayIcon from '../../images/ControlIcons/PlayIcon';
import SoundIcon from '../../images/ControlIcons/SoundIcon';
import MuteIcon from '../../images/ControlIcons/MuteIcon';
import PauseIcon from '../../images/ControlIcons/PauseIcon';

/* eslint-disable no-param-reassign */
const ControlsWrapper = styled.div`
  position: relative;
  align-items: center;
  background-color: #280d60;
  width: ${props => props.width}px;
`;

const Input = styled.input`
  position: absolute;
  left: 5vw;
  appearance: none;
  outline: none;
  height: 20px;
  width: 5vw;
  border-radius: 3px;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.3vw;
    cursor: pointer;
    background: #5b25cc;
    border-radius: 4px;
    outline: none;
  }

  &::-webkit-slider-thumb {
    height: 12px;
    width: 12px;
    border-radius: 100%;
    background: #ffffff;
    cursor: pointer;
    appearance: none;
    margin-top: -4px;
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;

class Controls extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      paused: props.paused,
      muted: props.muted,
    };
  }

  playPauseHandler(video) {
    if (video.paused === true) {
      video.play();
      this.setState({ paused: false });
    } else {
      video.pause();
      this.setState({ paused: true });
    }
  }

  muteHandler(video) {
    if (video.muted === false) {
      video.muted = true;
      this.setState({ muted: false });
    } else {
      video.muted = false;
      this.setState({ muted: true });
    }
  }

  volumeBarHandler(video, event) {
    const volume = event.target.value;
    video.volume = volume;
    console.log(volume);
  }
  render() {
    return (
      <ControlsWrapper
        width={this.props.width}
        style={{ display: this.props.width > 200 ? 'none' : 'flex' }}
      >
        <button
          style={{
            display: this.state.paused ? 'none' : 'inline',
            outline: 'none',
          }}
          onClick={() => this.playPauseHandler(this.props.video)}
        >
          <PlayIcon />
        </button>

        <button
          style={{
            display: !this.state.paused ? 'none' : 'inline',
            outline: 'none',
          }}
          onClick={() => this.playPauseHandler(this.props.video)}
        >
          <PauseIcon />
        </button>

        <Input
          type="range"
          id="volume-bar"
          min="0"
          max="1"
          step="0.1"
          style={{ display: this.state.muted ? 'none' : 'block' }}
          onChange={event => this.volumeBarHandler(this.props.video, event)}
        />

        <button
          type="button"
          id="mute"
          onClick={() => this.muteHandler(this.props.video)}
          style={{
            display: this.state.muted ? 'none' : 'inline',
            outline: 'none',
            marginLeft: '15px',
            marginTop: '-3px',
          }}
        >
          <SoundIcon />
        </button>

        <button
          type="button"
          id="mute"
          onClick={() => this.muteHandler(this.props.video)}
          style={{
            display: !this.state.muted ? 'none' : 'inline',
            outline: 'none',
            marginLeft: '10px',
            marginTop: '-2px',
          }}
        >
          <MuteIcon />
        </button>
      </ControlsWrapper>
    );
  }
}

Controls.propTypes = {
  paused: PropTypes.bool,
  muted: PropTypes.bool,
  video: PropTypes.any,
  width: PropTypes.any,
};

export default Controls;
