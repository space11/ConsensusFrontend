import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import debateProviderSaga from 'containers/DebateProvider/sagas';
import { fetchCreatingDebate } from 'containers/DebateProvider/actions';
import Button from 'components/Button';
import Bg from 'images/createRoom/bg.svg';
import * as Styles from './styles';

class CreatingDebatePage extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  /* eslint-disable */
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
      <Styles.DebateWrapper>
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            height: '100%',
          }}
        >
          <Styles.Background src={Bg} alt="" />
        </div>
        <Styles.CreateDebateFormWrapper>
          <Styles.InputWrapper>
            <Styles.Label htmlFor="title">Тема дебатов</Styles.Label>
            <Field
              id="title"
              name="title"
              type="text"
              component="input"
              style={Styles.Input}
              placeholder="Укажите тему дебатов"
            />
            <Styles.Label htmlFor="debateCategory">
              Тематика дебатов
            </Styles.Label>
            <Field
              id="debateCategory"
              name="debateCategory"
              type="text"
              component="select"
              style={Styles.Input}
            >
              <option value="Politics">Политика</option>
            </Field>
            <Styles.Label htmlFor="invitedOpponent">
              Добавьте оппонента
            </Styles.Label>
            <Field
              id="invitedOpponent"
              name="invitedOpponent"
              type="text"
              component="input"
              style={Styles.Input}
            />
          </Styles.InputWrapper>
          <Styles.ButtonWrapper>
            <Button
              type="submit"
              onClick={this.onSubmit}
              text="Создать"
              w="217px"
            />
          </Styles.ButtonWrapper>
        </Styles.CreateDebateFormWrapper>
      </Styles.DebateWrapper>
    );
  }
}

CreatingDebatePage.propTypes = {
  fetchCreatingDebate: PropTypes.any,
  title: PropTypes.string,
  debateCategory: PropTypes.string,
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
