import React, { Component } from 'react';
import { connect } from 'react-redux';
import search from 'images/search/search.svg';
import Placeholder from 'images/placeholders/1.png';
import arrow from 'images/search/arrow.svg';
import Button from 'components/Button';
import ProfileCell from 'components/ProfileCell';
import VideoBlockBig from 'components/VideoBlockBig';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import * as Styles from './styles';

/* eslint-disable */

const reduxFormInput = ({ input, meta: { touched, error, warning } }) => (
  <Styles.Input {...input} id="search" width="394px" />
);

const renderSelect = ({input, id, children}) => (
    <Styles.SelectComponent id={id} {...input}>
      {children}
    </Styles.SelectComponent>
);


class SearchPage extends Component {
  render() {
    return (
      <Styles.SearchPageWrapper>
        <Styles.ControlWrapper>
        <Styles.InputWrapper>
          <Styles.Label htmlFor="search">Поиск названию или пользователю</Styles.Label>
          <Styles.SearchIconWrapper>
            <img src={search} alt="" />
          </Styles.SearchIconWrapper>
          <Field component={reduxFormInput} name="searchInput" />
          </Styles.InputWrapper>
          <Styles.InputWrapper>
          <Styles.Label htmlFor="category">Категория</Styles.Label>
          <Field component={renderSelect} name="searchInput" id="category">
            <option value="Politics">Политика</option>
          </Field>
          <Styles.SearchIconWrapper right={true}>
            <img src={arrow} alt="" />
          </Styles.SearchIconWrapper>
          </Styles.InputWrapper>
          <Styles.InputWrapper>
          <Styles.Label htmlFor="stream">Трансляция</Styles.Label>
          <Field component={renderSelect} name="searchInput" id="stream">
            <option value="live">Live</option>
            <option value="past">Past</option>
          </Field>
          <Styles.SearchIconWrapper right={true}>
            <img src={arrow} alt="" />
          </Styles.SearchIconWrapper>
          </Styles.InputWrapper>
          <Button text="Поиск" w="152px" h="43px" />
        </Styles.ControlWrapper>
        <Styles.ProfilesWrapper>
        <ProfileCell isLive name="Face" rep="150 побед / 1943 поражений" />
        <ProfileCell isLive name="Face" rep="150 побед / 1943 поражений" />
        <ProfileCell isLive name="Face" rep="150 побед / 1943 поражений" />
        </Styles.ProfilesWrapper>
        <Styles.VideoBlockWrapper>
        <VideoBlockBig
        url="/"
        title="Выбор политического курса России: как не упустить шанс снова."
        live
        names="Pynya vs Sysyan"
        theme="Политика"
        viewers="98 зрителей"
        image={Placeholder}
      />
            <VideoBlockBig
        url="/"
        title="Выбор политического курса России: как не упустить шанс снова."
        live
        names="Pynya vs Sysyan"
        theme="Политика"
        viewers="98 зрителей"
        image={Placeholder}
      />
            <VideoBlockBig
        url="/"
        title="Выбор политического курса России: как не упустить шанс снова."
        live
        names="Pynya vs Sysyan"
        theme="Политика"
        viewers="98 зрителей"
        image={Placeholder}
      />
            <VideoBlockBig
        url="/"
        title="Выбор политического курса России: как не упустить шанс снова."
        live
        names="Pynya vs Sysyan"
        theme="Политика"
        viewers="98 зрителей"
        image={Placeholder}
      />
            <VideoBlockBig
        url="/"
        title="Выбор политического курса России: как не упустить шанс снова."
        live
        names="Pynya vs Sysyan"
        theme="Политика"
        viewers="98 зрителей"
        image={Placeholder}
      />
            <VideoBlockBig
        url="/"
        title="Выбор политического курса России: как не упустить шанс снова."
        live
        names="Pynya vs Sysyan"
        theme="Политика"
        viewers="98 зрителей"
        image={Placeholder}
      />
                  <VideoBlockBig
        url="/"
        title="Выбор политического курса России: как не упустить шанс снова."
        live
        names="Pynya vs Sysyan"
        theme="Политика"
        viewers="98 зрителей"
        image={Placeholder}
      />
            <VideoBlockBig
        url="/"
        title="Выбор политического курса России: как не упустить шанс снова."
        live
        names="Pynya vs Sysyan"
        theme="Политика"
        viewers="98 зрителей"
        image={Placeholder}
      />
            <VideoBlockBig
        url="/"
        title="Выбор политического курса России: как не упустить шанс снова."
        live
        names="Pynya vs Sysyan"
        theme="Политика"
        viewers="98 зрителей"
        image={Placeholder}
      />
      </Styles.VideoBlockWrapper>
      </Styles.SearchPageWrapper>
    );
  }
}

const mapStateToProps = state => {
  const selector = formValueSelector('search', states => states.get('form'));
  const searchInput = selector(state, 'searchInput');
  const category = selector(state, 'category');
  return { searchInput, category };
};

const Search = reduxForm({
  form: 'search',
  getFormState: state => state.get('form'),
  initialValues: {
    searchInput: '',
    category: '',
  },
})(SearchPage);

export default connect(
  mapStateToProps,
  () => ({}),
)(Search);
