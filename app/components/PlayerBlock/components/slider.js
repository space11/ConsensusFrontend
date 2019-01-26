import React from 'react';
import PropTypes from 'prop-types';
import MuteIcon from 'images/playerblock/mute.svg';
import PauseIcon from 'images/playerblock/pause.svg';
import PlayIcon from 'images/playerblock/play.svg';
import SoundIcon from 'images/playerblock/sound.svg';
import FullScreenIcon from 'images/playerblock/fullscreen.svg';
import SettingsIcon from 'images/playerblock/settings.svg';
import Rocket from 'images/playerblock/rocket';
import * as Styles from './styles';

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
    <Styles.UpperControlWrapper>
      <Styles.LeftBlock>
        <Styles.Text>Говорит: {talking}</Styles.Text>
      </Styles.LeftBlock>
      <Styles.RoundCenter>
        <Styles.Text>
          {round} раунд ({time})
        </Styles.Text>
      </Styles.RoundCenter>
    </Styles.UpperControlWrapper>
    <Styles.SliderWrapper
      width={width}
      style={{ display: show ? 'flex' : 'none' }}
    >
      <Styles.PassedWrapper>
        <Styles.PassedTimeLineWrapper />
        <Styles.RocketWrapper>
          <Rocket />
        </Styles.RocketWrapper>
      </Styles.PassedWrapper>
      <Styles.TimeLineWrapper />
      <Styles.LowControlFieldWrapper>
        <Styles.LeftControl>
          <Styles.ButtonWrapper>
            {isPlaying ? (
              <Styles.Image src={PlayIcon} alt="" />
            ) : (
              <Styles.Image src={PauseIcon} alt="" />
            )}
          </Styles.ButtonWrapper>
          <Styles.ButtonWrapper>
            {isMuted ? (
              <Styles.Image src={MuteIcon} alt="" />
            ) : (
              <Styles.Image src={SoundIcon} alt="" />
            )}
          </Styles.ButtonWrapper>
          <Styles.TimeTextWrapper>
            <Styles.TimeText>
              {timeValueMin}:{timeValueSec}
            </Styles.TimeText>
          </Styles.TimeTextWrapper>
        </Styles.LeftControl>
        <Styles.RightControl>
          <Styles.ButtonWrapper>
            <Styles.Image src={SettingsIcon} alt="" />
          </Styles.ButtonWrapper>
          <Styles.ButtonWrapper>
            <Styles.Image src={FullScreenIcon} alt="" />
          </Styles.ButtonWrapper>
        </Styles.RightControl>
      </Styles.LowControlFieldWrapper>
    </Styles.SliderWrapper>
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
