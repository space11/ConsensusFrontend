import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import injectSaga from 'utils/injectSaga';
import { compose } from 'redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import authProviderSaga from 'containers/AuthProvider/sagas';

import HomePage from 'containers/Home';
import Testing from 'containers/Testing';
import SignInPage from 'containers/SignIn';
import CreateDebatePage from 'containers/CreateDebate';
import AccountPage from 'containers/Account';
import RegisterPage from 'containers/Register';
import RoomPage from 'containers/Room';
import NotFoundPage from 'containers/NotFound';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from 'global-styles';

const App = ({ locate = window.location.pathname }) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <ParallaxProvider>
      <Helmet titleTemplate="%s - Консенсус" defaultTitle="Консенсус">
        <meta
          name="description"
          content="Платформа для проведения онлайн-дебатов"
        />
      </Helmet>
      <Header
        isBlue={
          !locate.includes('/account') && locate !== '/404' && locate !== '/'
        }
        isLogin={locate === '/sign-in' || locate === '/register'}
        isWhite={locate.includes('/room')}
        isRed={locate === '/create-debate'}
      />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/account/:id" component={AccountPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/room/:id" component={RoomPage} />
        <Route exact path="/sign-in" component={SignInPage} />
        <Route exact path="/create-debate" component={CreateDebatePage} />
        <Route exact path="/testing" component={Testing} />
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
      <Footer />
      <GlobalStyle />
    </ParallaxProvider>
  </MuiThemeProvider>
);

const withSaga = authProviderSaga.map(saga =>
  injectSaga({ key: saga.name, saga }),
);

App.propTypes = {
  locate: PropTypes.string,
};

export default compose(
  withSaga[0],
  withSaga[1],
  withSaga[2],
  withSaga[3],
  withSaga[4],
  withSaga[5],
)(App);
