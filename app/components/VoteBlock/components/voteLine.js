import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LineWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
`;

const LineEmpty = styled.div`
  background: #e2eafd;
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

const LineFull = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  background: #7ea4d0;
  height: 100%;
  width: ${props => props.length};
  border-radius: 10px;
`;

export default class VoteLine extends PureComponent {
  render() {
    return (
      <LineWrapper>
        <LineEmpty />
        <LineFull length={this.props.length} />
      </LineWrapper>
    );
  }
}

VoteLine.propTypes = {
  length: PropTypes.any,
};
