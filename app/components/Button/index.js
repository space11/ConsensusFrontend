import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { ButtonWrapper } from './styles';

const Button = ({
  isTransparent,
  type,
  onClick,
  text,
  isRed,
  w,
  h,
  right,
  isValid,
  style,
  fontSize,
}) => (
  <ButtonWrapper
    isTransparent={isTransparent}
    type={type}
    onClick={onClick}
    isRed={isRed}
    h={h}
    w={w}
    right={right}
    style={({ width: w }, style)}
    isValid={isValid}
  >
    <span style={{ display: 'inline-block', fontSize }}>{text}</span>
  </ButtonWrapper>
);

Button.propTypes = {
  isTransparent: PropTypes.bool,
  isRed: PropTypes.bool,
  isValid: PropTypes.bool,
  w: PropTypes.string,
  h: PropTypes.string,
  style: PropTypes.string,
  right: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  fontSize: PropTypes.string,
};

export default withRouter(Button);
