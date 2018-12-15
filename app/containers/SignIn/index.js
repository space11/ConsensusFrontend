import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import styled from 'styled-components';
import { fetchLogin } from 'containers/AuthProvider/actions';
import Bg from 'images/signin/bg.svg';
import RocketR from 'images/signin/rocket.svg';
import ActionButton from 'components/ActionButton';

const LoginWrapper = styled.div`
  display: flex;
  min-width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background: #f9f9f9;
`;

const Background = styled.img`
  position: absolute;
  min-width: 100%;
  top: 0;
  overflow: hidden;
`;

const RocketWrapper = styled.img`
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

const Title = styled.h1`
  font-weight: 550;
  font-size: 3em;
  color: #fff;
`;

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

const SubmitButton = styled.button`
  display: flex;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  border-radius: 100px;
  min-width: 240px;
  min-height: 45px;
  background: #f7567c;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px #e96979;
  transition: 0.3s;
  -webkit-user-select: none;

  &:hover {
    transform: scale(1.1);
  }
`;

const Input = {
  borderBottom: '1px solid #fff',
  background: 'transparent',
  color: '#fff',
  height: '4rem',
  margin: '1.5rem 0',
  width: '70vw',
  borderRadius: '6px',
  fontSize: '1.5em',
  zIndex: '3',
  padding: '1rem',
  maxWidth: '500px',
};

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
              name="email"
              type="text"
              component="input"
              style={Input}
              placeholder="Логин"
            />
            <Field
              name="password"
              type="password"
              component="input"
              style={Input}
              placeholder="Пароль"
            />
            <ButtonWrapper>
              <ActionButton text="Регистрация" url="/register" white />
              <SubmitButton type="submit" onClick={this.onSubmit}>
                Вход
              </SubmitButton>
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
