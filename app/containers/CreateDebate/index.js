import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import Background from 'images/createRoom/bg.svg';

const CreateDebateWrapper = styled.div`
  display: flex;
`;

const BackgroundComponent = styled.img``;

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
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

class CreateDebatePage extends Component {
  render() {
    return (
      <CreateDebateWrapper>
        <BackgroundComponent src={Background} alt="" />
        <InputBlock>
          <Field
            name="theme"
            placeholder="Тема дебатов"
            type="text"
            component="input"
            style={Input}
          />
          <Field
            name="thematic"
            props={{
              label: 'Выберите тематику',
              options: 'Политика',
            }}
            component="input"
            style={Input}
            placeholder="user@mail.ru"
          />
          <Field
            name="opponent"
            component="input"
            style={Input}
            type="text"
            placeholder="Добавить оппонента"
          />
        </InputBlock>
      </CreateDebateWrapper>
    );
  }
}

const CreateDebate = reduxForm({
  form: 'createDebate',
  getFormState: state => state.get('form'),
  initialValues: {
    theme: '',
    thematic: '',
    opponent: '',
  },
})(CreateDebatePage);

export default connect(
  state => {
    const selector = formValueSelector('createDebate', states =>
      states.get('form'),
    );
    const theme = selector(state, 'theme');
    const thematic = selector(state, 'thematic');
    const opponent = selector(state, 'opponent');
    return { theme, thematic, opponent };
  },
  () => ({}),
)(CreateDebate);
