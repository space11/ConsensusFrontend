import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { reduxForm, formValueSelector } from 'redux-form';
import { fetchLogin } from 'containers/AuthProvider/actions';
import Button from 'components/Button';
import { NavLink } from 'react-router-dom';
import Bg from 'images/signin/bg.svg';
import { eMail, required, minValue8 } from 'utils/validation';
import TextField from '@material-ui/core/TextField';
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
      margin="normal"
      multiLine={false}
      inputProps={{ style: { fontSize: 22 } }}
    />
    {touched &&
      ((error && <Styles.Error>{error}</Styles.Error>) ||
        (warning && <Styles.Error>{warning}</Styles.Error>))}
  </Styles.InputField>
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
            <Styles.Title>Здравствуйте</Styles.Title>
            <Styles.Description>
              Если у вас уже есть профиль на Consensus, войдите.
            </Styles.Description>
            <Styles.Description>
              Еще нет профиля?{' '}
              <Styles.Url to="/register">Зарегистрируйтесь</Styles.Url>
            </Styles.Description>
          </Styles.FormBlockWrapper>
          <Styles.InputWrapper onSubmit={this.onSubmit}>
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
            <Styles.ControlLine>
              <Styles.Label>
                <Styles.InputComponent type="checkbox" />
                <Styles.Label>Запомнить меня</Styles.Label>
              </Styles.Label>
              <NavLink to="/forgot">Забыли пароль?</NavLink>
            </Styles.ControlLine>
          </Styles.InputWrapper>
          <Button
            type="submit"
            isValid={pristine || submitting}
            onClick={this.onSubmit}
            text="Войти"
          />
        </Styles.LoginFormWrapper>
      </Styles.LoginWrapper>
    );
  }
}

LoginPage.propTypes = {
  fetchLogin: PropTypes.any,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
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
