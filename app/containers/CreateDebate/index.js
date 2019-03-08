import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import injectSaga from 'utils/injectSaga';
import debateProviderSaga from 'containers/DebateProvider/sagas';
import {
  fetchCreatingDebate,
  fetchSearchUser,
} from 'containers/DebateProvider/actions';
import { makeUsersSelector } from 'containers/DebateProvider/selectors';
import Button from 'components/Button';
import Bg from 'images/createRoom/bg.svg';
import * as Styles from './styles';

const renderTextField = ({ input, placeholder, ...custom }) => (
  <TextField
    variant="outlined"
    onChange={(event, index, value) => input.onChange(value)}
    {...custom}
    {...input}
  />
);

const renderSelectField = ({ input, width, ...custom }) => (
  <Select
    input={<OutlinedInput />}
    onChange={(event, index, value) => input.onChange(value)}
    {...custom}
    {...input}
  />
);

class CreatingDebatePage extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  /* eslint-disable */
  onSubmit() {
    const { title, debateCategory, startDateTime, invitedOpponent } = this.props;

    this.props.fetchCreatingDebate.start({
      startDateTime,
      title,
      invitedOpponent,
      debateCategory,
    });
  }

  render() {
    const { invitedOpponent, users } = this.props;
    // console.log(users.data.users);
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
              style={Styles.Input}
              component={renderTextField}
            />
            <Styles.Label htmlFor="debateCategory">
              Тематика дебатов
            </Styles.Label>
            <Field
              id="debateCategory"
              name="debateCategory"
              type="text"
              style={Styles.Input}
              component={renderSelectField}
            >
               <MenuItem value="" disabled></MenuItem>
              <MenuItem value="Politics">Политика</MenuItem>
            </Field>
            <Styles.Label htmlFor="startDateTime">Укажите дату и время дебатов</Styles.Label>
            <Field
              id="startDateTime"
              name="startDateTime"
              type="datetime-local"
              style={Styles.Input}
              component={renderTextField}
            />
            <Styles.Label htmlFor="invitedOpponent">
              Добавьте оппонента
            </Styles.Label>
            <Styles.InviteOpponentWrapper>
            <Field
              id="invitedOpponent"
              name="invitedOpponent"
              type="text"
              onChange={() => this.props.fetchSearchUser.start(invitedOpponent, localStorage.id_token)}
              component={renderTextField}
              style={Styles.Input}
            />
            </Styles.InviteOpponentWrapper>
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
  users: PropTypes.Array,
  debateCategory: PropTypes.string,
  invitedOpponent: PropTypes.string,
  fetchSearchUser: PropTypes.any,
};

const mapStateProps = createStructuredSelector({
  users: makeUsersSelector(),
});

const mapStateToProps = (state) => {
  const selector = formValueSelector('createDebate', states =>
    states.get('form'),
  );
  const title = selector(state, 'title');
  const debateCategory = selector(state, 'debateCategory');
  const startDateTime = selector(state, 'startDateTime');
  const invitedOpponent = selector(state, 'invitedOpponent');

  return { title, debateCategory, startDateTime, invitedOpponent };
}

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
  dispatch => ({ fetchCreatingDebate: fetchCreatingDebate.bindTo(dispatch), fetchSearchUser: fetchSearchUser.bindTo(dispatch) }),
);

const witConnect = connect(mapStateProps);

export default compose(
  CreatingDebate,
  withSaga[0],
  withSaga[1],
  withSaga[2],
  withSaga[3],
  withSaga[4],
  withConnect,
  witConnect
)(CreatingDebatePage);
