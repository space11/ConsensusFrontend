/**
 *
 * Input
 *
 */
import React from 'react';
import { PropTypes } from 'prop-types';
import styled, { css } from 'styled-components';
import * as Validation from 'react-validation/lib/build/validation.rc';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import validations from './validations'; // eslint-disable-line
import Hint from './Hint';

export const StyledInput = styled(Validation.Input)`
  width: 100%;
  height: 36px;
  margin: 8px 0;
  padding: 0 12px;
  outline: none;
  border-radius: 8px;
  border: 3px solid #fff;
  transition: 0.3s;
  &:hover {
    border: 3px solid #fff;
  }
  &:focus {
    border: 3px solid #f7567c;
    padding: 0 24px;
  }
`;

export const PureInput = styled.input`
  width: 100%;
  height: 36px;
  margin: 8px 0;
  padding: 0 12px;
  outline: none;
  border-radius: 8px;
  border: 3px solid #9b9b9b;
  transition: 0.3s;
  &:hover {
    border: 3px solid #9b9b9b;
  }
  ${props => props.error && `border: 3px solid #f7567c !important;`} &:focus {
    border: 3px solid #f7567c;
    padding: 0 24px;
  }
`;

const CheckStyle = css`
  margin: 4px;
  outline: none;
  float: left;
`;

export const StyledLabel = styled.label`
  width: 100%;
  margin: 8px 2px;
  font-size: 18px;
  font-weight: 400;
  height: 36px;
`;

const StyledSelect = styled(Select)`
  width: 100%;
  height: 36px;
  margin: 8px 0;
  position: relative;

  .Select-control {
    background: transparent !important;
    border: 0 !important;
    outline: none;
    z-index: 1000 !important;
  }

  .Select-menu-outer {
    position: absolute;
    z-index: 1000 !important;
  }

  padding: 0 12px;
  outline: none;
  border-radius: 8px;
  border: 3px solid #9b9b9b;
  transition: 0.3s;
  &:hover {
    border: 3px solid #9b9b9b;
  }
  &:focus {
    border: 3px solid #f7567c;
    padding: 0 24px;
  }
`;

const CheckBox = styled.input`
  ${CheckStyle};
`;

function Input(props) {
  return (
    <div>
      <StyledLabel for={props.name} noAll={!props.label}>
        {props.label}
        {props.type === 'checkbox' ? (
          <CheckBox {...props} />
        ) : (
          <StyledInput {...props} />
        )}
      </StyledLabel>
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
};

export function SimpleInput(props) {
  return (
    <div>
      <StyledLabel for={props.name} noAll={!props.label}>
        {props.label}
        {props.type === 'checkbox' ? (
          <CheckBox {...props} />
        ) : (
          <PureInput {...props} />
        )}
      </StyledLabel>
    </div>
  );
}

SimpleInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
};

export function SelectInput(props) {
  return (
    <div>
      <StyledLabel for={props.name} noAll={!props.label}>
        {props.label}
        <StyledSelect
          name={props.name}
          options={props.options}
          onChange={props.onChange}
          value={props.value}
        />
      </StyledLabel>
    </div>
  );
}

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export function ReduxSelectInput(props) {
  if (!props.input.value || props.fixed) {
    props.input.onChange(props.options ? props.options[0] : null);
  }
  return (
    <div>
      <StyledLabel for={props.name} noAll={!props.label}>
        {props.label}
        <StyledSelect
          name={props.name}
          options={props.options}
          menuContainerStyle={{ zIndex: 999 }}
          onChange={val => {
            props.input.onChange(val);
          }}
          value={props.input.value}
        />
      </StyledLabel>
    </div>
  );
}

ReduxSelectInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  value: PropTypes.string,
  input: PropTypes.object,
  fixed: PropTypes.bool,
};

export function ReduxInput(props) {
  const { input: { onChange }, meta: {error, touched} } = props; //eslint-disable-line
  return (
    <div>
      <StyledLabel for={props.name} noAll={!props.label}>
        {props.label}
        <PureInput
          error={touched && error}
          onChange={e => {
            onChange(e.target.value);
          }}
          maxLength={props.maxLength}
          plaeceholder={props.plaeceholder}
        />
        {touched && error && <Hint>{error}</Hint>}
      </StyledLabel>
    </div>
  );
}

ReduxInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  maxLength: PropTypes.number,
  plaeceholder: PropTypes.string,
};

export function ReduxCheck({ input, meta: { error, touched }, ...props }) {
  return (
    <div>
      <StyledLabel
        style={{
          display: 'flex',
          flexFlow: 'row-reverse',
          justifyContent: 'flex-end',
        }}
        for={props.name}
        noAll={!props.label}
      >
        {props.label}
        <CheckBox
          style={{ display: 'block' }}
          type="checkbox"
          checked={input.value}
          onChange={() => {
            input.onChange(!input.value);
          }}
        />
      </StyledLabel>
      {touched && error && <Hint>{error}</Hint>}
    </div>
  );
}

ReduxCheck.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
};

export default Input;

export { default as Hint } from './Hint';
