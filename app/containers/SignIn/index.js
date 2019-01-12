import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { fetchLogin } from 'containers/AuthProvider/actions';
import Button from 'components/Button';
import Bg from 'images/signin/bg.svg';

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

const AdvField = styled(Field)`
  transition: 0.3s;
  &:focus {
    padding-left: 10px;
  }
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

const ControlLine = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
`;

const ForgetButton = styled.button`
  color: #f7567c;
`;

const InputComponent = styled.input`
  margin-right: 10px;
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
