import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bg from 'images/forgotpass/background.svg';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import Button from 'components/Button';
import {
  Background,
  InputWrapper,
  FormBlockWrapper,
  Description,
  ForgotPageWrapper,
  AdvField,
  Title,
  Error,
  ForgotFormWrapper,
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
      inputProps={{ style: { fontSize: 22 } }}
    />
    {touched &&
      ((error && <Error>{error}</Error>) ||
        (warning && <Error>{warning}</Error>))}
  </InputField>
);

class ForgotPage extends Component {
  render() {
    const { pristine, submitting } = this.props;
    return (
      <ForgotPageWrapper>
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            height: '100%',
          }}
        >
          <Background src={Bg} alt="" />
        </div>
        <ForgotFormWrapper>
          <FormBlockWrapper>
            <Title>Забыли пароль?</Title>
            <Description>Введите E-mail Вашей учетной записи</Description>
          </FormBlockWrapper>
          <InputWrapper onSubmit={this.onSubmit}>
            <AdvField
              name="email"
              type="text"
              label="Email"
              component={renderField}
            />
          </InputWrapper>
          <Button
            type="submit"
            isValid={pristine || submitting}
            onClick={this.onSubmit}
            text="Получить пароль"
          />
        </ForgotFormWrapper>
      </ForgotPageWrapper>
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
