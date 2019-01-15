import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MuteIcon from 'images/playerblock/mute.svg';
import PauseIcon from 'images/playerblock/pause.svg';
import PlayIcon from 'images/playerblock/play.svg';
import SoundIcon from 'images/playerblock/sound.svg';
import FullScreenIcon from 'images/playerblock/fullscreen.svg';
import SettingsIcon from 'images/playerblock/settings.svg';
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
  background-image: linear-gradient(90deg, #7ea4d0 0%, #4e5f92 100%);
`;

const PassedWrapper = styled.div`
  position: absolute;
  z-index: 9999;
`;

const LeftControl = styled.div`
  width: 121px;
  display: inherit;
  justify-content: space-between;
`;

const LeftBlock = styled.div`
  display: flex;
  position: absolute;
`;

const RightControl = styled.div`
  width: 58px;
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
  background: #303565;
  width: 100%;
  height: 38px;
  padding: 0 25px;
  justify-content: space-between;
  align-items: center;
`;

const UpperControlWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #303565;
  width: 100%;
  height: 40px;
  padding: 0 25px;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  flex: 0 0 auto;
`;

const RoundCenter = styled.div`
  margin: 0 auto;
`;

const ButtonWrapper = styled.button``;

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
  outline: none;
  -webkit-user-select: none;
  font-weight: 300;
  font-size: 15px;
`;

const TimeTextWrapper = styled.div`
  display: flex;
  align-self: center;
  height: 100%;
`;

const Image = styled.img``;

const Text = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: #fff;
`;

class Slider extends Component {
  render() {
    const {
      talking,
      width,
      isPlaying,
      isMuted,
      timeValueMin,
      timeValueSec,
      round,
      time,
      show,
    } = this.props;
    return (
      <div>
        <UpperControlWrapper>
          <LeftBlock>
            <Text>Говорит: {talking}</Text>
          </LeftBlock>
          <RoundCenter>
            <Text>
              {round} раунд ({time})
            </Text>
          </RoundCenter>
        </UpperControlWrapper>
        <SliderWrapper
          width={width}
          style={{ display: show ? 'flex' : 'none' }}
        >
          <PassedWrapper>
            <PassedTimeLineWrapper />
            <RocketWrapper>
              <Rocket />
            </RocketWrapper>
          </PassedWrapper>
          <TimeLineWrapper />
          <LowControlFieldWrapper>
            <LeftControl>
              <ButtonWrapper>
                {isPlaying ? (
                  <Image src={PlayIcon} alt="" />
                ) : (
                  <Image src={PauseIcon} alt="" />
                )}
              </ButtonWrapper>
              <ButtonWrapper>
                {isMuted ? (
                  <Image src={MuteIcon} alt="" />
                ) : (
                  <Image src={SoundIcon} alt="" />
                )}
              </ButtonWrapper>
              <TimeTextWrapper>
                <TimeText>
                  {timeValueMin}:{timeValueSec}
                </TimeText>
              </TimeTextWrapper>
            </LeftControl>
            <RightControl>
              <ButtonWrapper>
                <Image src={SettingsIcon} alt="" />
              </ButtonWrapper>
              <ButtonWrapper>
                <Image src={FullScreenIcon} alt="" />
              </ButtonWrapper>
            </RightControl>
          </LowControlFieldWrapper>
        </SliderWrapper>
      </div>
    );
  }
}

Slider.propTypes = {
  video: PropTypes.any,
  isPlaying: PropTypes.bool,
  isMuted: PropTypes.bool,
  width: PropTypes.string,
  timeValueMin: PropTypes.string,
  timeValueSec: PropTypes.string,
};

Slider.defaultProps = {
  timeValueMin: '45',
  timeValueSec: '00',
};

export default Slider;
