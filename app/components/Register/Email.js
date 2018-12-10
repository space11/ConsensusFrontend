import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import CustomField from './components/customField';
import Button from '../Button';
import ActionButton from '../ActionButton';

const LoginFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  min-height: 5rem;
`;

const Title = styled.div`
  font-size: 2em;
  font-weight: 500;
  margin: 1rem;
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: 10rem;
  justify-content: space-between;
  margin-bottom: 10rem;
  margin-top: 10rem;
`;

const T = () => <CustomField placeholder="Подтвердите e-mail" />;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 10rem;
`;

let EmailForm = props => {
  const { handleSubmit } = props;
  const { onButtonClick } = props;
  return (
    <LoginFormWrapper onSubmit={handleSubmit}>
      <InputsWrapper>
        <Title>Подтвердите e-mail</Title>
        <Field name="email" component={T} type="email" />
      </InputsWrapper>
      <ButtonsWrapper>
        <ActionButton text="Назад" to="/" isWhite />
        <Button text="Продолжить" type="submit" onButtonClick={onButtonClick} />
      </ButtonsWrapper>
    </LoginFormWrapper>
  );
};

EmailForm = reduxForm({
  form: 'pass',
})(EmailForm);

export default EmailForm;
