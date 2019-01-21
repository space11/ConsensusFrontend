import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { reduxForm, formValueSelector } from 'redux-form';
import { fetchRegistration } from 'containers/AuthProvider/actions';
import Button from 'components/Button';
import TextField from '@material-ui/core/TextField';
import {
  eMail,
  required,
  minValue8,
  maxLength15,
  minValue5,
} from 'utils/validation';
import Bg from 'images/register/background.svg';
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
      multiLine={false}
      inputProps={{ style: { fontSize: 22 } }}
    />
    {touched &&
      ((error && <Error>{error}</Error>) ||
        (warning && <Error>{warning}</Error>))}
  </InputField>
);

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
            <AdvField
              name="nickName"
              label="Логин"
              type="text"
              component={renderField}
              validate={[maxLength15, minValue5, required]}
            />
            <AdvField
              name="email"
              type="text"
              label="Email"
              component={renderField}
              validate={[eMail, required]}
            />
            <AdvField
              name="password"
              type="password"
              label="Пароль"
              component={renderField}
              validate={[required, minValue8]}
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
