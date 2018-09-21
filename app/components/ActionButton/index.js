import React, { PureComponent } from 'react';
import styled from 'styled-components';

const ActionButtonWrapper = styled.a`
  display: flex;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  border-radius: 100px;
  min-width: 240px;
  min-height: 45px;
  background: #f7567c;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px #e96979;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export default class ActionButton extends PureComponent {
  render() {
    return (
      <ActionButtonWrapper href={this.props.url}>
        <span style={{ display: 'inline-block' }}>{this.props.text}</span>
      </ActionButtonWrapper>
    );
  }
}
