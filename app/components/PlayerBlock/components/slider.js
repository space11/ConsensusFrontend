import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MuteIcon from 'images/playerblock/mute';
import PauseIcon from 'images/playerblock/pause';
import PlayIcon from 'images/playerblock/play';
import SoundIcon from 'images/playerblock/sound';
import FullScreenIcon from 'images/playerblock/fullscreen';
import Rocket from 'images/playerblock/rocket';

const SliderWrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  bottom: 0;
  flex: 0 0 auto;
  width: ${props => props.width};
`;

const TimeLineWrapper = styled.div`
  width: 100%;
  height: 1rem;
  background-image: linear-gradient(to right, #7ea4d0, #4e5f92);
  opacity: 0.7;
`;

const PassedWrapper = styled.div`
  position: absolute;
  opacity: 1;
  z-index: 9999;
`;

const LeftControl = styled.div`
  min-width: 160px;
  max-width: 20%;
  display: inherit;
  justify-content: space-between;
`;

const PassedTimeLineWrapper = styled.div`
  width: ${props => props.lineLength + 15}px;
  z-index: 9999;
  height: 1rem;
  border-radius: 0 50px 50px 0;
  background-image: radial-gradient(at right, #fdf27d, #ea5e75);
`;

const LowControlFieldWrapper = styled.div`
  display: inherit;
  align-items: center;
  box-shadow: inset 0 -30px 50px #474d90;
  width: 100%;
  justify-content: space-between;
`;

const ButtonWrapper = styled.button`
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

const RocketWrapper = styled.button`
  position: absolute;
  top: -5px;
  right: -30px;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

const TimeText = styled.div`
  color: #fff;
  font-weight: 200;
  outline: none;
  margin-top: 1px;
  -webkit-user-select: none;
`;

const TimeTextWrapper = styled.div`
  display: flex;
  align-self: center;
  height: 100%;
`;

class Slider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: props.isPlaying || true,
      isMuted: props.isMuted || false,
      isFull: props.isFull || false,
      lineLength: props.lineLength || 0,
    };

    this.onPlayClick = this.onPlayClick.bind(this);
    this.onVolume = this.onVolume.bind(this);
    this.onFullscreen = this.onFullscreen.bind(this);
  }

  onPlayClick() {
    if (this.state.isPlaying) {
      this.props.video.pause();
      this.setState({ isPlaying: false });
    } else {
      this.props.video.play();
      this.setState({ isPlaying: true });
    }
  }

  onVolume() {
    if (this.state.isMuted) {
      this.props.video.muted = false;
      this.setState({ isMuted: false });
    } else {
      this.props.video.muted = true;
      this.setState({ isMuted: true });
    }
  }

  onFullscreen() {
    if (this.state.isFull) {
      this.props.video.webkitExitFullscreen();
      this.setState({ isFull: true });
    } else {
      this.props.video.webkitRequestFullscreen();
      this.setState({ isFull: false });
    }
  }

  render() {
    return (
      <SliderWrapper
        width={this.props.width}
        video={this.props.video}
        isFull={this.state.isFull}
      >
        <PassedWrapper>
          <PassedTimeLineWrapper lineLength={this.state.lineLength} />
          <RocketWrapper>
            <Rocket />
          </RocketWrapper>
        </PassedWrapper>
        <TimeLineWrapper />
        <LowControlFieldWrapper>
          <LeftControl>
            <ButtonWrapper onClick={this.onPlayClick}>
              {this.state.isPlaying ? <PlayIcon /> : <PauseIcon />}
            </ButtonWrapper>
            <ButtonWrapper
              onClick={this.onVolume}
              style={{ marginTop: '-3px' }}
            >
              {this.state.isMuted ? <MuteIcon /> : <SoundIcon />}
            </ButtonWrapper>
            <TimeTextWrapper>
              <TimeText>
                {this.props.timePassedMin}:{this.props.timePassedSec} /{' '}
                {this.props.timeValueMin}:{this.props.timeValueSec}
              </TimeText>
            </TimeTextWrapper>
          </LeftControl>
          <ButtonWrapper
            onClick={this.onFullscreen}
            style={{ marginRight: '10px', marginTop: '-2px' }}
          >
            <FullScreenIcon />
          </ButtonWrapper>
        </LowControlFieldWrapper>
      </SliderWrapper>
    );
  }
}

Slider.propTypes = {
  video: PropTypes.any,
  isPlaying: PropTypes.bool,
  isMuted: PropTypes.bool,
  isFull: PropTypes.bool,
  width: PropTypes.string,
  lineLength: PropTypes.string,
  timePassedMin: PropTypes.string,
  timeValueMin: PropTypes.string,
  timePassedSec: PropTypes.string,
  timeValueSec: PropTypes.string,
};

Slider.defaultProps = {
  timePassedMin: '00',
  timeValueMin: '45',
  timePassedSec: '00',
  timeValueSec: '00',
};

export default Slider;