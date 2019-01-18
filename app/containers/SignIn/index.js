import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { reduxForm, formValueSelector } from 'redux-form';
import { fetchLogin } from 'containers/AuthProvider/actions';
import Button from 'components/Button';
import Bg from 'images/signin/bg.svg';
import { email, required, minValue8 } from 'utils/validation';
import muiThemeable from 'material-ui/styles/muiThemeable';
import TextField from '@material-ui/core/TextField';

import {
  LoginWrapper,
  Background,
  LoginFormWrapper,
  InputWrapper,
  FormBlockWrapper,
  Description,
  AdvField,
  Title,
  Url,
  Label,
  ControlLine,
  ForgetButton,
  InputComponent,
  Error,
  InputField,
} from './styles';

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <InputField>
    <TextField
      {...input}
      label={label}
      floatingLabelText={label}
      type={type}
      fullWidth
      margin="normal"
      multiLine={false}
    />
    {touched &&
      ((error && <Error>{error}</Error>) ||
        (warning && <Error>{warning}</Error>))}
  </InputField>
);

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
            <AdvField
              name="email"
              type="text"
              label="Email"
              component={renderField}
              validate={[email, required]}
            />
            <AdvField
              name="password"
              type="password"
              label="Пароль"
              component={renderField}
              validate={[required, minValue8]}
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

const Redux = connect(
  mapStateToProps,
  dispatch => ({ fetchLogin: fetchLogin.bindTo(dispatch) }),
)(Login);

export default muiThemeable()(Redux);
