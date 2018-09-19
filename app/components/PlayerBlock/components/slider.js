import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MuteIcon from '../../../images/ControlIcons/MuteIcon';
import PauseIcon from '../../../images/ControlIcons/PauseIcon';
import PlayIcon from '../../../images/ControlIcons/PlayIcon';
import SoundIcon from '../../../images/ControlIcons/SoundIcon';
import FullScreenIcon from '../../../images/ControlIcons/FullscreenIcon';
import Rocket from '../../../images/ControlIcons/RocketButton';

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
`;

const PassedWrapper = styled.div`
  position: absolute;
`;

const LeftControl = styled.div`
  min-width: 160px;
  max-width: 20%;
  display: inherit;
  justify-content: space-between;
`;

const PassedTimeLineWrapper = styled.div`
  width: ${props => props.lineLength}px;
  z-index: 9999;
  height: 1rem;
  border-radius: 0 50px 50px 0;
  background-image: radial-gradient(at right, #fdf27d, #ea5e75);
`;

const LowControlFieldWrapper = styled.div`
  display: inherit;
  align-items: center;
  background: #474d90;
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
  }

  onPlayClick() {
    this.state.isPlaying
      ? this.setState({ isPlaying: false })
      : this.setState({ isPlaying: true });
  }

  onVolume() {
    this.state.isMuted
      ? this.setState({ isMuted: false })
      : this.setState({ isMuted: true });
  }

  onFullscreen() {
    this.state.isFull
      ? this.setState({ isFull: false })
      : this.setState({ isFull: true });
  }

  onRocketMove(e) {
    this.setState({ lineLength: e.pageX - RocketWrapper.offsetWidth / 2 });
    console.log(e);
  }

  render() {
    return (
      <SliderWrapper width={this.props.width}>
        <PassedWrapper>
          <PassedTimeLineWrapper
            lineLength={this.state.lineLength}
            onMouseMove={::this.onRocketMove}
          />
          <RocketWrapper onMouseMove={::this.onRocketMove}>
            <Rocket />
          </RocketWrapper>
        </PassedWrapper>
        <TimeLineWrapper />
        <LowControlFieldWrapper>
          <LeftControl>
            <ButtonWrapper onClick={::this.onPlayClick}>
              {this.state.isPlaying ? <PlayIcon /> : <PauseIcon />}
            </ButtonWrapper>
            <ButtonWrapper
              onClick={::this.onVolume}
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
            onClick={::this.onFullscreen}
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
  isPlaying: PropTypes.bool,
  isMuted: PropTypes.bool,
  isFull: PropTypes.bool,
  width: PropTypes.string,
  timePassedMin: PropTypes.element,
  timeValueMin: PropTypes.element,
  timePassedSec: PropTypes.element,
  timeValueSec: PropTypes.element,
};

Slider.defaultProps = {
  timePassedMin: '00',
  timeValueMin: '45',
  timePassedSec: '0',
  timeValueSec: '00',
};

export default Slider;
