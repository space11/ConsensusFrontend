import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { reduxForm, formValueSelector } from 'redux-form';
import { fetchLogin } from 'containers/AuthProvider/actions';
import Button from 'components/Button';
import Bg from 'images/signin/bg.svg';
import {
  LoginWrapper,
  Background,
  LoginFormWrapper,
  InputWrapper,
  FormBlockWrapper,
  Input,
  Description,
  AdvField,
  Title,
  Url,
  Label,
  ControlLine,
  ForgetButton,
  InputComponent,
} from './styles';

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
            position: 'relative',
            overflow: 'hidden',
            height: '100%',
          }}
        >
          <Background src={Bg} alt="" />
        </div>
        <LoginFormWrapper>
          <FormBlockWrapper>
            <Title>Здравствуйте</Title>
            <Description>
              Если у вас уже есть профиль на Consensus, войдите.
            </Description>
            <Description>
              Еще нет профиля? <Url to="/register">Зарегистрируйтесь</Url>
            </Description>
          </FormBlockWrapper>
          <InputWrapper onSubmit={this.onSubmit}>
            <Label htmlFor="email">E-mail</Label>
            <AdvField
              id="email"
              name="email"
              type="text"
              component="input"
              style={Input}
              placeholder="E-mail"
            />
            <Label htmlFor="password">Пароль</Label>
            <AdvField
              id="password"
              name="password"
              type="password"
              component="input"
              style={Input}
              placeholder="Пароль"
            />
            <ControlLine>
              <Label>
                <InputComponent type="checkbox" />
                <Label>Запомнить меня</Label>
              </Label>
              <ForgetButton>Забыли пароль?</ForgetButton>
            </ControlLine>
          </InputWrapper>
          <Button type="submit" onClick={this.onSubmit} text="Войти" />
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
  const email = selector(state, 'email');
  const password = selector(state, 'password');
  return { email, password };
};

const Login = reduxForm({
  form: 'signIn',
  getFormState: state => state.get('form'),
  initialValues: {
    email: '',
    password: '',
  },
})(LoginPage);

export default connect(
  mapStateToProps,
  dispatch => ({ fetchLogin: fetchLogin.bindTo(dispatch) }),
)(Login);
