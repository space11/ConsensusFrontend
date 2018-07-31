import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CustomControls extends PureComponent {
  render() {
    return (
      <button
        type="button"
        id="play-pause"
        style={this.props.style}
        onClick={this.playPauseHandler}
      >
        Play
      </button>
    );
  }
}

CustomControls.propTypes = {
  style: PropTypes.string,
};

export default CustomControls;
