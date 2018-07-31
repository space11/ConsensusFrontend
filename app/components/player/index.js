import React, { Component } from 'react';
import PropTypes from 'prop-types';

function hasGetUserMedia() {
  return !!(
    navigator.mediaDevices.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia
  );
}

class Player extends Component {
  static defaultProps = {
    audio: true,
    className: '',
    height: 480,
    onUserMedia: () => {},
    onUserMediaError: () => {},
    width: 640,
  };

  static propTypes = {
    audio: PropTypes.bool,
    onUserMedia: PropTypes.func,
    onUserMediaError: PropTypes.func,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    style: PropTypes.object,
    className: PropTypes.string,
    audioConstraints: audioConstraintType,
    videoConstraints: videoConstraintType,
    controls: videoConstraintType,
  };

  static mountedInstances = [];

  static userMediaRequested = false;

  constructor(props) {
    super(props);
    this.state = {
      hasUserMedia: false,
      height: props.height,
    };
  }

  componentDidMount() {
    if (!hasGetUserMedia()) return;

    Player.mountedInstances.push(this);

    if (!this.state.hasUserMedia && !Player.userMediaRequested) {
      this.requestUserMedia();
    }
  }

  componentWillUpdate(nextProps) {
    if (
      JSON.stringify(nextProps.audioConstraints) !==
        JSON.stringify(this.props.audioConstraints) ||
      JSON.stringify(nextProps.videoConstraints) !==
        JSON.stringify(this.props.videoConstraints)
    ) {
      this.requestUserMedia();
    }
  }

  componentWillUnmount() {
    const index = Player.mountedInstances.indexOf(this);
    Player.mountedInstances.splice(index, 1);

    if (Player.mountedInstances.length === 0 && this.state.hasUserMedia) {
      if (this.stream.stop) {
        this.stream.stop();
      } else {
        if (this.stream.getVideoTracks) {
          this.stream.getVideoTracks().map(track => track.stop());
        }
        if (this.stream.getAudioTracks) {
          this.stream.getAudioTracks().map(track => track.stop());
        }
      }
      Player.userMediaRequested = false;
      window.URL.revokeObjectURL(this.state.src);
    }
  }

  playPauseHandler() {
    if (this.state.video.paused === true) {
      this.state.video.play();
    } else {
      this.state.video.pause();
    }
  }

  requestUserMedia() {
    navigator.getUserMedia =
      navigator.mediaDevices.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;

    const sourceSelected = (audioConstraints, videoConstraints) => {
      const constraints = {
        video: videoConstraints || true,
      };

      if (this.props.audio) {
        constraints.audio = audioConstraints || true;
      }

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
          Player.mountedInstances.forEach(instance =>
            instance.handleUserMedia(null, stream),
          );
        })
        .catch(e => {
          Player.mountedInstances.forEach(instance =>
            instance.handleUserMedia(e),
          );
        });
    };

    if ('mediaDevices' in navigator) {
      sourceSelected(this.props.audioConstraints, this.props.videoConstraints);
    } else {
      const optionalSource = id => ({ optional: [{ sourceId: id }] });

      const constraintToSourceId = constraint => {
        const { deviceId } = (constraint || {}).deviceId;

        if (typeof deviceId === 'string') {
          return deviceId;
        } else if (Array.isArray(deviceId) && deviceId.length > 0) {
          return deviceId[0];
        } else if (typeof deviceId === 'object' && deviceId.ideal) {
          return deviceId.ideal;
        }

        return null;
      };

      MediaStreamTrack.getSources(sources => {
        let audioSource = null;
        let videoSource = null;

        sources.forEach(source => {
          if (source.kind === 'audio') {
            audioSource = source.id;
          } else if (source.kind === 'video') {
            videoSource = source.id;
          }
        });

        const audioSourceId = constraintToSourceId(this.props.audioConstraints);
        if (audioSourceId) {
          audioSource = audioSourceId;
        }

        const videoSourceId = constraintToSourceId(this.props.videoConstraints);
        if (videoSourceId) {
          videoSource = videoSourceId;
        }

        sourceSelected(
          optionalSource(audioSource),
          optionalSource(videoSource),
        );
      });
    }

    Player.userMediaRequested = true;
  }

  handleUserMedia(err, stream) {
    if (err) {
      this.setState({ hasUserMedia: false });
      this.props.onUserMediaError(err);

      return;
    }

    this.stream = stream;

    try {
      this.video.srcObject = stream;
      this.video.style.transform = 'scale(-1, 1)';
      this.setState({ video: this.video });
      this.setState({ hasUserMedia: true });
    } catch (error) {
      this.setState({
        hasUserMedia: true,
        src: window.URL.createObjectURL(stream),
      });
    }

    this.props.onUserMedia();
  }

  render() {
    return (
      <div>
        <video
          autoPlay
          width={this.props.width}
          height={this.state.height}
          src={this.state.src}
          muted={this.props.audio}
          className={this.props.className}
          playsInline
          style={this.props.style}
          ref={ref => {
            this.video = ref;
          }}
          controls={this.props.controls}
        >
          <track kind="captions" />
        </video>
        <button
          style={{ display: this.props.height > 100 ? 'inline' : 'none' }}
          onClick={this.playPauseHandler}
        >
          Play
        </button>
      </div>
    );
  }
}

const constrainStringType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.string),
  PropTypes.shape({
    exact: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }),
  PropTypes.shape({
    ideal: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }),
]);

const constrainBooleanType = PropTypes.oneOfType([
  PropTypes.shape({
    exact: PropTypes.bool,
  }),
  PropTypes.shape({
    ideal: PropTypes.bool,
  }),
]);

const constrainLongType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.shape({
    exact: PropTypes.number,
    ideal: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
  }),
]);

const constrainDoubleType = constrainLongType;

const audioConstraintType = PropTypes.shape({
  deviceId: constrainStringType,
  groupId: constrainStringType,
  autoGainControl: constrainBooleanType,
  channelCount: constrainLongType,
  latency: constrainDoubleType,
  noiseSuppression: constrainBooleanType,
  sampleRate: constrainLongType,
  sampleSize: constrainLongType,
  volume: constrainDoubleType,
});

const videoConstraintType = PropTypes.shape({
  deviceId: constrainStringType,
  groupId: constrainStringType,
  aspectRatio: constrainDoubleType,
  facingMode: constrainStringType,
  frameRate: constrainDoubleType,
  height: constrainLongType,
  width: constrainLongType,
  controls: constrainStringType,
});

export default Player;
