import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

const ButtonWrapper = styled.button`
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
  -webkit-user-select: none;
  margin 1rem 0;

  &:hover {
    transform: scale(1.1);
  }
`;

class Button extends PureComponent {
  render() {
    return (
      <ButtonWrapper type={this.props.type} onClick={this.props.onButtonClick}>
        <span style={{ display: 'inline-block' }}>{this.props.text}</span>
      </ButtonWrapper>
    );
  }
}

export default withRouter(Button);
