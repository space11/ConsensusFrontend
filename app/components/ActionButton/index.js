import React, { PureComponent } from 'react';
import styled from 'styled-components';

const ActionButtonWrapper = styled.button`
  height: auto;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  width: 18.6vw;
  border-radius: 100px;
  min-width: 220px;
  min-height: 45px;
  background: ${props => (props.noColor ? '#4f5f8e' : '#f7567c')};
  box-shadow: ${props =>
    props.noColor ? '0 0 5px #80bff5' : '0 0 5px #e96979'};
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export default class ActionButton extends PureComponent {
  render() {
    return (
      <ActionButtonWrapper noColor={this.props.noColor}>
        {this.props.text}
      </ActionButtonWrapper>
    );
  }
}
