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
import * as Styles from './styles';

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <Styles.InputField>
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
      ((error && <Styles.Error>{error}</Styles.Error>) ||
        (warning && <Styles.Error>{warning}</Styles.Error>))}
  </Styles.InputField>
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
    const { pristine, submitting } = this.props;
    return (
      <Styles.LoginWrapper>
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            height: '100%',
          }}
        >
          <Styles.Background src={Bg} alt="" />
        </div>
        <Styles.LoginFormWrapper>
          <Styles.FormBlockWrapper>
            <Styles.Title>Добро пожаловать</Styles.Title>
            <Styles.Description>
              Если у Вас еще нет профиля на Consensus, создайте его.
            </Styles.Description>
            <Styles.Description>
              Уже есть профиль? <Styles.Url to="/sign-in">Войти</Styles.Url>
            </Styles.Description>
          </Styles.FormBlockWrapper>
          <Styles.InputWrapper>
            <Styles.AdvField
              name="nickName"
              label="Логин"
              type="text"
              component={renderField}
              validate={[maxLength15, minValue5, required]}
            />
            <Styles.AdvField
              name="email"
              type="text"
              label="Email"
              component={renderField}
              validate={[eMail, required]}
            />
            <Styles.AdvField
              name="password"
              type="password"
              label="Пароль"
              component={renderField}
              validate={[required, minValue8]}
            />
          </Styles.InputWrapper>
          <Button
            type="submit"
            onClick={this.onSubmit}
            text="Зарегистрироваться"
            isValid={pristine || submitting}
          />
        </Styles.LoginFormWrapper>
      </Styles.LoginWrapper>
    );
  }
}

RegisterPage.propTypes = {
  fetchRegistration: PropTypes.any,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
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
