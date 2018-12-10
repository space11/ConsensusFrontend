import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import styled from 'styled-components';
import { fetchLogin } from 'containers/AuthProvider/actions';
import Img from 'react-image';
import Bg from 'images/signin/bg.svg';
import RocketR from 'images/signin/rocket.svg';
import ActionButton from 'components/ActionButton';
import Button from 'components/Button';
import {
  required,
  maxLength15,
  minLength2,
  alphaNumeric,
} from '../../utils/helpers';

const LoginWrapper = styled.div`
  display: flex;
  min-width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background: #f9f9f9;
`;

const Background = styled(Img)`
  position: absolute;
  min-width: 100%;
  top: 0;
  overflow: hidden;
`;

const RocketWrapper = styled(Img)`
  @media screen and (max-width: 900px) {
    display: none;
  }

  animation: 3s slideOut infinite alternate;

  @keyframes slideOut {
    0% {
      transform: translateY(-1%);
    }
    100% {
      transform: translateY(1%);
    }
  }
`;

const LoginFormWrapper = styled.div`
  display: flex;
  position: absolute;
  box-sizing: border-box;
  z-index: 24;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

const FormBlockWrapper = styled.div`
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
  font-weight: 550;
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

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { email, password } = this.props;
    this.props.fetchLogin.start({ email, password }); //eslint-disable-line
  }

  render() {
    return (
      <LoginWrapper>
        <div
          style={{
            overflow: 'hidden',
            position: 'absolute',
            height: '100%',
            minWidth: '100%',
            alignSelf: 'center',
          }}
        >
          <Background src={Bg} alt="" />
        </div>
        <LoginFormWrapper>
          <RocketWrapper src={RocketR} alt="" />
          <FormBlockWrapper onSubmit={this.onSubmit}>
            <Title>Вход</Title>
            <Field
              name="username"
              type="text"
              component={renderField}
              label="Логин"
              validate={[required, maxLength15, minLength2]}
              warn={alphaNumeric}
            />
            <Field
              name="password"
              type="password"
              component={renderField}
              label="Пароль"
              validate={[required, maxLength15, minLength2]}
              warn={alphaNumeric}
            />
            <ButtonWrapper>
              <ActionButton text="Регистрация" url="/register" isWhite />
              <Button text="Вход" type="submit" onClick={this.onSubmit} />
            </ButtonWrapper>
          </FormBlockWrapper>
        </LoginFormWrapper>
      </LoginWrapper>
    );
  }
}

LoginPage.propTypes = {
  fetchLogin: PropTypes.any,
  email: PropTypes.string,
  password: PropTypes.string,
};

const mapStateToProps = state => {
  const selector = formValueSelector('signIn', states => states.get('form'));
  const username = selector(state, 'username');
  const password = selector(state, 'password');
  return { username, password };
};

const Login = reduxForm({
  form: 'signIn',
  getFormState: state => state.get('form'),
})(LoginPage);

export default connect(
  mapStateToProps,
  dispatch => ({ fetchLogin: fetchLogin.bindTo(dispatch) }),
)(Login);
