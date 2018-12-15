import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import styled, { createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Space from 'components/Space';
import Bg from 'images/register/background.svg';
import { fetchRegistration } from './actions';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #2B3780;
  }
`;

const RegisterWrapper = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: center;
  align-items: center;
  height: calc(100vh -10%);
  top: 0;
  z-index: 1000;
  background-color: #2b3780;
`;

const Background = styled.img`
  position: absolute;
  min-width: 100%;
  height: 100%;
  top: 0;
  z-index: 1;
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  min-height: 100%;
  min-width: 100%;
  top: 0;
  align-self: center;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  align-self: center;
  flex-direction: column;
  background: #20244c;
  width: 41vw;
  z-index: 2;
  border-radius: 1rem;
  padding: 2em 3em;
  margin: 15vh 0;
  box-shadow: 0 3px 10px #000;

  @media screen and (max-width: 610px) {
    width: 90%;
    height: auto;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 2em;
  color: #fff;
  -webkit-user-select: none;
  text-align: center;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 13rem;
`;

const Input = {
  height: '3.5rem',
  backgroundColor: '#f9f9f9',
  border: '1px solid #fff',
  color: '#2b3780',
  width: '100%',
  padding: '1rem',
  borderRadius: '0.4rem',
  boxShadow: 'inset 0px 0px 5px 0px #fff',
};

const NormalText = styled.label`
  color: #fff;
  word-wrap: break-word;
  -webkit-user-select: none;
`;

const SubmitButton = styled.button`
  background-image: linear-gradient(to right, #b998ea, #e2958c);
  border-radius: 0.4rem;
  height: 3rem;
  width: 100%;
  color: #fff;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    transform: scale(1.01);
    animation: anim 2s alternate infinite;
  }

  @keyframes anim {
    50% {
      background: #b998ea;
      box-shadow: 0.4rem #e2958c inset;
    }
  }
`;

const LoginButton = styled(NavLink)`
  margin-left: 0.5rem;
  color: #f7567c;
`;

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { nickName, email, password } = this.props;

    const data = {
      nickName,
      email,
      password,
    };

    this.props.fetchRegistration.start(data);
  }

  render() {
    return (
      <RegisterWrapper>
        <GlobalStyle />
        <BackgroundWrapper>
          <Background src={Bg} alt="" />
        </BackgroundWrapper>
        <ContentWrapper>
          <Space size="1" />
          <Title>Регистрация</Title>
          <Space size="1" />
          <Space size="2" />
          <FormWrapper>
            <Field
              name="nickName"
              placeholder="Логин"
              type="text"
              component="input"
              style={Input}
            />
            <Field
              name="email"
              label="E-mail"
              component="input"
              style={Input}
              placeholder="user@mail.ru"
            />
            <Field
              name="password"
              component="input"
              style={Input}
              label="Пароль"
              type="password"
              placeholder="********"
            />
          </FormWrapper>
          <Space size="2" />
          <SubmitButton type="submit" onClick={this.onSubmit}>
            Зарегистрироваться
          </SubmitButton>
          <Space size="2" />
          <div>
            <NormalText>Уже есть аккаунт?</NormalText>
            <LoginButton to="sign-in">Войдите</LoginButton>
          </div>
        </ContentWrapper>
      </RegisterWrapper>
    );
  }
}

const Register = reduxForm({
  form: 'register',
  getFormState: state => state.get('form'),
  initialValues: {
    nickName: '',
    email: '',
    password: '',
  },
})(RegisterPage);

function mapDispatchToProps(dispatch) {
  return {
    fetchRegistration: fetchRegistration.bindTo(dispatch),
  };
}

export default connect(
  state => {
    const selector = formValueSelector('register', states =>
      states.get('form'),
    );
    const nickName = selector(state, 'nickName');
    const email = selector(state, 'email');
    const password = selector(state, 'password');
    return { nickName, email, password };
  },
  mapDispatchToProps,
)(Register);
