import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import styled, { createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Img from 'react-image';
import Space from 'components/Space';
import Bg from 'images/register/background.svg';
import { fetchRegistration } from '../AuthProvider/actions';

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

const Background = styled(Img)`
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

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 13rem;
`;

const Input = styled.input`
  height: 3.5rem;
  background-color: #f9f9f9;
  border: 1px solid #fff;
  color: #2b3780;
  width: 100%;
  padding: 1rem;
  border-radius: 0.4rem;
  box-shadow: inset 0px 0px 5px 0px #fff;
`;

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

const renderField = ({ input, label, type }) => (
  <Input {...input.value} type={type} placeholder={label} />
);

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { userName, email, password } = this.props;
    this.props.fetchRegistration.start({ userName, email, password });
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
          <FormWrapper onSubmit={this.onSubmit}>
            <Field
              name="userName"
              label="Логин"
              component={renderField}
              validations={['required', 'email']}
              placeholder="user@mail.ru"
            />
            <Field
              name="email"
              label="E-mail"
              component={renderField}
              validations={['required', 'email']}
              placeholder="user@mail.ru"
            />
            <Field
              name="password"
              component={renderField}
              validations={['required', 'password']}
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

const mapDispatchToProps = dispatch => ({
  fetchRegistration: fetchRegistration.bindTo(dispatch),
});

const mapStateToProps = state => {
  const selector = formValueSelector('register', states => states.get('form'));
  const userName = selector(state, 'userName');
  const email = selector(state, 'email');
  const password = selector(state, 'password');
  return { userName, email, password };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  reduxForm({
    form: 'register',
    getFormState: state => state.get('form'),
  })(RegisterPage),
);
