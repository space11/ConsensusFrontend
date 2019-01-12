import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

const ButtonWrapper = styled.button`
  display: flex;
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.isRed ? '#f7567c' : '#fff')};
  border-radius: 25px;
  min-height: ${props => (props.isTransparent ? '45px' : '54px')};
  max-width: ${props => (props.isTransparent ? '245px' : '268px')};
  padding: 10px 20px;
  background: ${props => (props.isTransparent ? 'transparent' : '#f7567c')};
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 5px rgba(247, 86, 124, 0.4);
  border: ${props => (props.isTransparent ? '2px solid #f7567c' : '')};
  transition: 0.3s;
  -webkit-user-select: none;
  cursor: pointer;
`;

class Button extends PureComponent {
  render() {
    const { isTransparent, type, onClick, text, isRed, w, right } = this.props;
    return (
      <ButtonWrapper
        isTransparent={isTransparent}
        type={type}
        onClick={onClick}
        isRed={isRed}
        style={{ width: w, marginRight: right }}
      >
        <span style={{ display: 'inline-block' }}>{text}</span>
      </ButtonWrapper>
    );
  }
}

Button.propTypes = {
  isTransparent: PropTypes.bool,
  isRed: PropTypes.bool,
  w: PropTypes.string,
  right: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default withRouter(Button);
