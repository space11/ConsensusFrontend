import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import HomePage from 'containers/Home';
import Testing from 'containers/Testing';
import SignInPage from 'containers/SignIn';
import AccountPage from 'containers/Account';
import SearchPage from 'containers/Search';
import RegisterPage from 'containers/Register';
import RoomPage from 'containers/Room';
import NotFoundPage from 'containers/NotFound';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

/* eslint-disable */

class App extends React.Component {

render() {
  return (
    <ParallaxProvider>
      <Helmet
        titleTemplate="%s - Консенсус"
        defaultTitle="Консенсус"
      >
        <meta name="description" content="Платформа для проведения онлайн-дебатов" />
      </Helmet>
      <Header
        iswhite={location.pathname.includes('/room') === false}
        naviswhite={location.pathname.includes('/room') === false}
        searchIsShown={location.pathname.includes('/search')}
      />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/account" component={AccountPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/room" component={RoomPage} />
        <Route exact path="/sign-in" component={SignInPage} />
        <Route exact path='/search/:id?' component={SearchPage} />
        <Route exact path='/testing' component={Testing} />
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
      <Footer
        footerIsHidden={
          location.pathname === '/register' 
          || location.pathname === '/sign-in' 
          || location.pathname === '/404' 
          || location.pathname === '/room'
          || location.pathname === '/testing'
        }
      />
      <GlobalStyle />
    </ParallaxProvider>
  );
  }
}

export default App;

