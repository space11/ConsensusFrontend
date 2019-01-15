import React from 'react';
import PropTypes from 'prop-types';
import MuteIcon from 'images/playerblock/mute.svg';
import PauseIcon from 'images/playerblock/pause.svg';
import PlayIcon from 'images/playerblock/play.svg';
import SoundIcon from 'images/playerblock/sound.svg';
import FullScreenIcon from 'images/playerblock/fullscreen.svg';
import SettingsIcon from 'images/playerblock/settings.svg';
import Rocket from 'images/playerblock/rocket';
import {
  SliderWrapper,
  TimeLineWrapper,
  PassedWrapper,
  LeftControl,
  LeftBlock,
  RightControl,
  PassedTimeLineWrapper,
  LowControlFieldWrapper,
  UpperControlWrapper,
  RoundCenter,
  ButtonWrapper,
  RocketWrapper,
  TimeText,
  TimeTextWrapper,
  Image,
  Text,
} from './styles';

const Slider = ({
  talking,
  width,
  isPlaying,
  isMuted,
  timeValueMin,
  timeValueSec,
  round,
  time,
  show,
}) => (
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
    <SliderWrapper width={width} style={{ display: show ? 'flex' : 'none' }}>
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
Slider.propTypes = {
  talking: PropTypes.string,
  round: PropTypes.string,
  time: PropTypes.string,
  show: PropTypes.bool,
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
