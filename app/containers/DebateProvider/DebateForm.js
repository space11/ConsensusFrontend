import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import Select from 'react-select';
import Space from 'components/Space';
import Cross from 'images/voteblock/cross';
import styled from 'styled-components';
import {
  required,
  maxLength15,
  minLength2,
  alphaNumeric,
} from '../../utils/helpers';

const RegisterWrapper = styled.form`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 1000;
  width: 100%;
  z-index: 109999;
  background: rgba(33, 35, 79, 0.6);
`;

const StyledSelect = styled(Select)`
  height: 3.5rem;
  background-color: #f9f9f9;
  border: 1px solid #fff;
  color: #2b3780;
  width: 100%;
  padding: 1rem;
  border-radius: 0.4rem;
  box-shadow: inset 0px 0px 5px 0px #fff;
`;
const ContentWrapper = styled.div`
  align-self: center;
  flex-direction: column;
  background: #20244c;
  max-width: 600px;
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

const CloseButton = styled.button`
  transition: 0.3s;
  float: right;
  &:hover {
    transform: scale(1.1);
  }
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

function ReduxSelectInput(props) {
  if (!props.input.value || props.fixed) {
    props.input.onChange(props.options ? props.options[0] : null);
  }
  return (
    <div>
      <StyledSelect
        name={props.name}
        options={props.options}
        menuContainerStyle={{ zIndex: 999 }}
        onChange={val => {
          props.input.onChange(val);
        }}
        value={props.input.value}
        placeholder={props.label}
      />
    </div>
  );
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <div>
      <Input {...input.value} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class DebateForm extends Component {
  componentWillMount() {
    window.onscroll = function() {
      window.scrollTo(0, 0);
    };
  }

  componentWillUnmount() {
    window.onscroll = window.scroll();
  }

  render() {
    return (
      <div>
        <RegisterWrapper>
          <ContentWrapper>
            <CloseButton onClick={this.props.debateForm}>
              <Cross />
            </CloseButton>
            <Space size="2" />
            <Title>Создание комнаты</Title>
            <Space size="2" />
            <FormWrapper>
              <Field
                name="theme"
                type="text"
                component={renderField}
                label="Тема дебатов"
                validate={[required, maxLength15, minLength2]}
                warn={alphaNumeric}
              />
              <Field
                props={{
                  label: 'Тематика дебатов',
                  options: [
                    'Политика',
                    'Социальная жизнь',
                    'Экология',
                    'Право',
                    'Наука и тех прогресс',
                    'Религия',
                    'Личное',
                  ],
                }}
                name="thematic"
                component={ReduxSelectInput}
                validate={this.props.thematic ? [required] : []}
              />
              <Field
                name="opponent"
                type="text"
                component={renderField}
                label="Добавьте оппонента"
                validate={[required, maxLength15, minLength2]}
                warn={alphaNumeric}
              />
            </FormWrapper>
            <Space size="2" />
            <SubmitButton onClick={this.onSubmitForm}>Создать</SubmitButton>
            <Space size="2" />
          </ContentWrapper>
        </RegisterWrapper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const selector = formValueSelector('register', states => states.get('form'));
  const nickName = selector(state, 'nickName');
  const password = selector(state, 'password');
  const eMail = selector(state, 'email');
  return { nickName, eMail, password };
};

const Debate = reduxForm({
  form: 'debate',
  getFormState: state => state.get('form'),
})(DebateForm);

export default connect(
  mapStateToProps,
  () => ({}),
)(Debate);
