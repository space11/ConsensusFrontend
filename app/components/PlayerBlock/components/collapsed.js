import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PlayerBlockCollapsedWrapper = styled.div`
  position: fixed;
  width: 300px;
  height: 200px;
  bottom: 0;
  background: #412;
  z-index: 99999;
`;

const Player = styled.video``;

class PlayerBlockCollapsed extends PureComponent {
  render() {
    return (
      <PlayerBlockCollapsedWrapper>
        {this.props.collapsed ? this.props.video : ''}
      </PlayerBlockCollapsedWrapper>
    );
  }
}

PlayerBlockCollapsed.propTypes = {
  video: PropTypes.any,
};

export default PlayerBlockCollapsed;
