import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect } from 'react-router-dom';
import injectSaga from 'utils/injectSaga';
import { compose } from 'redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import authProviderSaga from 'containers/AuthProvider/sagas';

import HomePage from 'containers/Home';
import SignInPage from 'containers/SignIn';
import CreateDebatePage from 'containers/CreateDebate';
import AccountPage from 'containers/Account';
import RegisterPage from 'containers/Register';
import RoomPage from 'containers/Room';
import ForgotPage from 'containers/ForgotPassword';
import SearchPage from 'containers/Search';
import NotFoundPage from 'containers/NotFound';
import Header from 'components/Header';
import Footer from 'components/Footer';
import GlobalStyle from 'global-styles';

class App extends Component {
  removeOldToken() {
    setTimeout(localStorage.removeItem('id_token'), 5356800);
  }

  render() {
    const locate = window.location.pathname;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        {this.removeOldToken}
        <div>
          <Helmet titleTemplate="%s - Консенсус" defaultTitle="Консенсус">
            <meta
              name="description"
              content="Платформа для проведения онлайн-дебатов"
            />
          </Helmet>
          <Header
            isBlue={
              (locate.includes('/account') &&
                locate === '/404' &&
                locate === '/') ||
              locate.includes('/search') ||
              locate === '/create-debate'
            }
            isLogin={locate === '/sign-in' || locate === '/register'}
            isWhite={
              !locate.includes('/room') &&
              !locate.includes('/account') &&
              locate.includes('/search') &&
              locate !== '/'
            }
            isRed={locate === '/create-debate' || locate === '/forgot'}
          />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/account/:id" component={AccountPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/room/:id" component={RoomPage} />
            <Route exact path="/sign-in" component={SignInPage} />
            <Route exact path="/create-debate" component={CreateDebatePage} />
            <Route exact path="/forgot" component={ForgotPage} />
            <Route exact path="/search/:id" component={SearchPage} />
            <Route path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
          {locate === '/' ? '' : <Footer />}
          <GlobalStyle />
        </div>
      </MuiThemeProvider>
    );
  }
}

const withSaga = authProviderSaga.map(saga =>
  injectSaga({ key: saga.name, saga }),
);

export default compose(
  withSaga[0],
  withSaga[1],
  withSaga[2],
  withSaga[3],
  withSaga[4],
  withSaga[5],
)(App);
