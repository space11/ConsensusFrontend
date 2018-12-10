import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PlayerBlockCollapsedWrapper = styled.div`
  display: none;
`;

const Player = styled.div`
  position: fixed;
  width: 28rem;
  height: 15.75rem;
  bottom: 0px;
  margin: 1rem;
  z-index: 1000;
  left: 50px;
`;

class PlayerBlockCollapsed extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { isHide: false };
    this.hideBar = this.hideBar.bind(this);
  }

  hideBar() {
    const { isHide } = this.state;
    window.scrollY < 300
      ? isHide && this.setState({ isHide: false })
      : !isHide && this.setState({ isHide: true });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.hideBar);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideBar);
  }

  render() {
    return (
      <PlayerBlockCollapsedWrapper>
        {this.state.isHide ? <Player /> : ''}
      </PlayerBlockCollapsedWrapper>
    );
  }
}

PlayerBlockCollapsed.propTypes = {
  video: PropTypes.any,
};

export default PlayerBlockCollapsed;
