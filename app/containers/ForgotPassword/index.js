import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bg from 'images/forgotpass/background.svg';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import Button from 'components/Button';
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
      inputProps={{
        style: { fontSize: 22 },
      }}
    />
    {touched &&
      ((error && <Styles.Error>{error}</Styles.Error>) ||
        (warning && <Styles.Error>{warning}</Styles.Error>))}
  </Styles.InputField>
);

class ForgotPage extends Component {
  render() {
    const { pristine, submitting } = this.props;
    return (
      <Styles.ForgotPageWrapper>
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            height: '100%',
          }}
        >
          <Styles.Background src={Bg} alt="" />
        </div>
        <Styles.ForgotFormWrapper>
          <Styles.FormBlockWrapper>
            <Styles.Title>Забыли пароль?</Styles.Title>
            <Styles.Description>
              Введите E-mail Вашей учетной записи
            </Styles.Description>
          </Styles.FormBlockWrapper>
          <Styles.InputWrapper onSubmit={this.onSubmit}>
            <Styles.AdvField
              name="email"
              type="text"
              label="Email"
              component={renderField}
            />
          </Styles.InputWrapper>
          <Button
            type="submit"
            isValid={pristine || submitting}
            onClick={this.onSubmit}
            text="Получить пароль"
          />
        </Styles.ForgotFormWrapper>
      </Styles.ForgotPageWrapper>
    );
  }
}

ForgotPage.propTypes = {
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
};

const mapStateToProps = state => {
  const selector = formValueSelector('forgot', states => states.get('form'));
  const email = selector(state, 'email');
  return { email };
};

const Forgot = reduxForm({
  form: 'forgot',
  getFormState: state => state.get('form'),
  initialValues: {
    email: '',
  },
})(ForgotPage);

export default connect(
  mapStateToProps,
  () => ({}),
)(Forgot);
