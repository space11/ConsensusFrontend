import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { fetchRegistration } from 'containers/AuthProvider/actions';
import Button from 'components/Button';
import Bg from 'images/register/background.svg';

const LoginWrapper = styled.div`
  display: flex;
  min-width: 100%;
  height: 100%;
  z-index: 1000;
  background: #f9f9f9;
`;

const Background = styled.img`
  position: relative;
  top: 0;
  overflow: hidden;
`;

const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 99999;
  height: 100%;
  margin-left: 90px;
`;

const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 90px;
`;

const FormBlockWrapper = styled(InputWrapper)`
  z-index: 9900;
  width: 100%;
  margin: 145px 0 90px 0;
`;

const Input = {
  borderBottom: '1px solid #474D90',
  background: 'transparent',
  height: '3rem',
  marginBottom: '1.5rem',
  width: '100%',
  zIndex: '3',
};

const Description = styled.div`
  font-weight: 300;
  width: 90%;
`;

const Title = styled.h1`
  color: #2b367e;
  margin: 0;
`;

const Url = styled(NavLink)`
  color: #f7567c;
  font-weight: 500;
`;

const Label = styled.label`
  -webkit-user-select: none;
  font-size: 0.9rem;
`;

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { nickName, email, password } = this.props;

    this.props.fetchRegistration.start({ nickName, email, password }); //eslint-disable-line
  }

  render() {
    return (
      <LoginWrapper>
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            height: '100%',
          }}
        >
          <Background src={Bg} alt="" />
        </div>
        <LoginFormWrapper>
          <FormBlockWrapper>
            <Title>Добро пожаловать</Title>
            <Description>
              Если у Вас еще нет профиля на Consensus, создайте его.
            </Description>
            <Description>
              Уже есть профиль? <Url to="/sign-in">Войти</Url>
            </Description>
          </FormBlockWrapper>
          <InputWrapper>
            <Label htmlFor="nickName">Логин</Label>
            <Field
              id="nickName"
              name="nickName"
              type="text"
              component="input"
              style={Input}
              placeholder="Логин"
            />
            <Label htmlFor="email">E-mail</Label>
            <Field
              id="email"
              name="email"
              type="text"
              component="input"
              style={Input}
              placeholder="E-mail"
            />
            <Label htmlFor="password">Пароль</Label>
            <Field
              id="password"
              name="password"
              type="password"
              component="input"
              style={Input}
              placeholder="Пароль"
            />
          </InputWrapper>
          <Button
            type="submit"
            onClick={this.onSubmit}
            text="Зарегистрироваться"
          />
        </LoginFormWrapper>
      </LoginWrapper>
    );
  }
}

RegisterPage.propTypes = {
  fetchRegistration: PropTypes.any,
  nickName: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
};

const mapStateToProps = state => {
  const selector = formValueSelector('register', states => states.get('form'));
  const nickName = selector(state, 'nickName');
  const email = selector(state, 'email');
  const password = selector(state, 'password');
  return { nickName, email, password };
};

const Register = reduxForm({
  form: 'register',
  getFormState: state => state.get('form'),
  initialValues: {
    nickName: '',
    email: '',
    password: '',
  },
})(RegisterPage);

export default connect(
  mapStateToProps,
  dispatch => ({ fetchRegistration: fetchRegistration.bindTo(dispatch) }),
)(Register);
