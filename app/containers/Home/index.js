import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeDebateLiveSelector,
  makeDebatePastSelector,
} from 'containers/DebateProvider/selectors';
import Banner from 'components/Banner';
import VideoBlock from 'components/VideoBlock';
import InfoBanner from 'components/InfoBanner';
import FaqBlock from 'components/FAQBlock';
import injectSaga from 'utils/injectSaga';
import debateProviderSaga from 'containers/DebateProvider/sagas';
import Space from 'components/Space';
import {
  fetchDebateLive,
  fetchDebatePast,
} from 'containers/DebateProvider/actions';
import { HomePageWrapper } from './styles';

/* eslint-disable */

class HomePage extends Component {
  componentWillMount() {
    const { fetchDebateLive, fetchDebatePast } = this.props;
    fetchDebateLive.start();
    fetchDebatePast.start();
  }

  render() {
    const { live, past } = this.props; 
    return (
      <HomePageWrapper>
        <Banner />
        <Space />
        <VideoBlock live title="Сейчас в эфире" />
        <Space />
        <InfoBanner />
        <Space />
        <VideoBlock title="Прошедшие дебаты" />
        <Space />
        <FaqBlock />
      </HomePageWrapper>
    );
  }
}

HomePage.propTypes = {
  fetchDebateLive: PropTypes.any,
  fetchDebatePast: PropTypes.any,
  live: PropTypes.object,
  past: PropTypes.object,
};

const withSaga = debateProviderSaga.map(saga =>
  injectSaga({ key: saga.name, saga }),
);

const mapStateToProps = createStructuredSelector({
  live: makeDebateLiveSelector(),
  past: makeDebatePastSelector(),
});

const mapDispatchToProps = dispatch => ({
  fetchDebateLive: fetchDebateLive.bindTo(dispatch),
  fetchDebatePast: fetchDebatePast.bindTo(dispatch),
});

const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);

export default compose(
  withSaga[0],
  withSaga[1],
  withSaga[2],
  withSaga[3],
  withSaga[4],
)(Home);
