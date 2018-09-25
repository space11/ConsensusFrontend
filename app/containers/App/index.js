import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/header';
import Footer from '../../components/footer';
import HomePage from '../HomePage/Loadable';
import RoomPage from '../RoomPage';
import RegisterPage from '../RegisterPage';
import NotFoundPage from '../../containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <div>
      <Header path={location.pathname} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/room" component={RoomPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}
