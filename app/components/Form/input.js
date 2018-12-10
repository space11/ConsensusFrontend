import React, { Component } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 5rem;
  position: relative;
`;

const FieldInput = styled.input`
  border-bottom: 1px solid #fff;
  background: transparent;
  color: #fff;
  height: 4rem;
  margin: 1.5rem 0;
  width: 100%;
  border-radius: 6px;
  font-size: 1.5em;
  z-index: 3;
  padding: 1rem;
`;

/* eslint-disable */

export default class CustomInput extends Component {
  render() {
    const {
      input: { value, onChange },
    } = this.props;
    return (
      <InputWrapper className={asyncValidating ? 'async-validating' : ''}>
        <span>The current value is {value}.</span>
        <FieldInput {...value} type={type} placeholder={label} />
        {touched && error && <span>{error}</span>}
      </InputWrapper>
    );
  }
}
