import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Button from '../Button';
import ActionButton from '../ActionButton';
import validate from './validate';
import asyncValidate from './asyncValidate';

const FormBlockWrapper = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

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
  width: 70vw;
  border-radius: 6px;
  font-size: 1.5em;
  z-index: 3;
  padding: 1rem;
  max-width: 500px;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 3em;
  color: #fff;
`;

const renderField = ({
  input,
  label,
  type,
  meta: { asyncValidating, touched, error },
}) => (
  <InputWrapper className={asyncValidating ? 'async-validating' : ''}>
    <FieldInput {...input.value} type={type} placeholder={label} />
    {touched && error && <span>{error}</span>}
  </InputWrapper>
);

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 70vw;
  margin: 2rem 0;
  max-width: 560px;
  height: 35vw;
  max-height: 150px;
  @media screen and (max-width: 686px) {
    justify-content: center;
  }
`;

const FormBlock = props => {
  const { handleSubmit, handleChange, username, password, submitted } = props;
  return (
    <FormBlockWrapper onSubmit={handleSubmit}>
      <Title>Вход</Title>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
        value={username}
        onChange={handleChange}
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        value={password}
        onChange={handleChange}
        label="Password"
      />
      <ButtonWrapper>
        <ActionButton text="Регистрация" url="/register" white />
        <Button text="Вход" type="submit" disabled={submitted} />
      </ButtonWrapper>
    </FormBlockWrapper>
  );
};

renderField.propTypes = {
  input: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
};

FormBlock.propTypes = {
  handleSubmit: PropTypes.any,
  handleChange: PropTypes.any,
  username: PropTypes.string,
  password: PropTypes.string,
  submitted: PropTypes.bool,
};

export default reduxForm({
  form: 'validationForm',
  validate,
  asyncValidate,
  asyncBlurFields: ['username'],
})(FormBlock);
