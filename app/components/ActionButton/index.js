import React, { Component } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

const ActionButtonWrapper = styled(NavLink)`
  display: flex;
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.isWhite ? '#fff' : '#fff')};
  border-radius: 100px;
  min-width: 240px;
  min-height: 45px;
  background: ${props => (props.isWhite ? '' : '#f7567c')};
  border: #f7567c 2px solid;
  box-shadow: 0 0 2px #f7567c;
  ${'' /* background-image: ${props =>
    props.isWhite ? 'linear-gradient(to left, #E2958C, #B998EA)' : ''}; */} justify-content: center;
  align-items: center;
  box-shadow: ${props => (props.isWhite ? '' : '0 0 5px #e96979')};
  transition: 0.3s;
  -webkit-user-select: none;

  &:hover {
    transform: scale(1.1);
  }
`;

class ActionButton extends Component { //eslint-disable-line
  render() {
    return (
      <ActionButtonWrapper to={this.props.url} isWhite={this.props.isWhite}>
        <span style={{ display: 'inline-block' }}>{this.props.text}</span>
      </ActionButtonWrapper>
    );
  }
}

ActionButton.propTypes = {
  url: PropTypes.string,
  isWhite: PropTypes.bool,
  text: PropTypes.string,
};

export default ActionButton;
