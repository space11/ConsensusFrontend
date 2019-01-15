import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import styled from 'styled-components';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import debateProviderSaga from 'containers/DebateProvider/sagas';
import { fetchCreatingDebate } from 'containers/DebateProvider/actions';
import Button from 'components/Button';
import Bg from 'images/createRoom/bg.svg';

const DebateWrapper = styled.div`
  display: flex;
  min-width: 100%;
  height: 100%;
  z-index: 1000;
  background: #f9f9f9;
`;

const Background = styled.img`
  position: relative;
  top: 0;
  overflow: hidden;
`;

const CreateDebateFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 99999;
  height: 100%;
  margin-left: 90px;
  margin-top: 182px;
`;

const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 90px;
`;

const Input = {
  border: '1px solid #474D90',
  background: 'transparent',
  height: '56px',
  marginBottom: '40px',
  width: '474px',
  zIndex: '3',
  borderRadius: '7px',
  padding: '5px 15px',
};

const Label = styled.label`
  -webkit-user-select: none;
  font-size: 30px;
  letter-spacing: 0.211704px;
  margin-bottom: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
`;

class CreatingDebatePage extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { title, debateCategory } = this.props;
    const startDateTime = new Date().toISOString();
    const invitedOpponent = localStorage.userId;

    this.props.fetchCreatingDebate.start({
      startDateTime,
      title,
      invitedOpponent,
      debateCategory,
    });
  }

  render() {
    return (
      <DebateWrapper>
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            height: '100%',
          }}
        >
          <Background src={Bg} alt="" />
        </div>
        <CreateDebateFormWrapper>
          <InputWrapper>
            <Label htmlFor="title">Тема дебатов</Label>
            <Field
              id="title"
              name="title"
              type="text"
              component="input"
              style={Input}
              placeholder="Укажите тему дебатов"
            />
            <Label htmlFor="debateCategory">Тематика дебатов</Label>
            <Field
              id="debateCategory"
              name="debateCategory"
              type="text"
              component="select"
              style={Input}
            >
              <option />
              <option value="Politics">Политика</option>
              <option value="Science">Наука</option>
            </Field>
            <Label htmlFor="invitedOpponent">Добавьте оппонента</Label>
            <Field
              id="invitedOpponent"
              name="invitedOpponent"
              type="text"
              component="input"
              style={Input}
            />
          </InputWrapper>
          <ButtonWrapper>
            <Button
              type="submit"
              onClick={this.onSubmit}
              text="Создать"
              w="217px"
            />
          </ButtonWrapper>
        </CreateDebateFormWrapper>
      </DebateWrapper>
    );
  }
}

CreatingDebatePage.propTypes = {
  fetchCreatingDebate: PropTypes.any,
  title: PropTypes.string,
  debateCategory: PropTypes.string,
  invitedOpponent: PropTypes.string,
};

const mapStateToProps = state => {
  const selector = formValueSelector('createDebate', states =>
    states.get('form'),
  );
  const title = selector(state, 'title');
  const debateCategory = selector(state, 'debateCategory');
  const invitedOpponent = selector(state, 'invitedOpponent');
  return { title, debateCategory, invitedOpponent };
};

const CreatingDebate = reduxForm({
  form: 'createDebate',
  getFormState: state => state.get('form'),
  initialValues: {
    title: '',
    debateCategory: '',
    invitedOpponent: '',
  },
});

const withSaga = debateProviderSaga.map(saga =>
  injectSaga({ key: saga.name, saga }),
);

const withConnect = connect(
  mapStateToProps,
  dispatch => ({ fetchCreatingDebate: fetchCreatingDebate.bindTo(dispatch) }),
);

export default compose(
  CreatingDebate,
  withSaga[0],
  withSaga[1],
  withSaga[2],
  withSaga[3],
  withSaga[4],
  withConnect,
)(CreatingDebatePage);
