import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/header';
import Footer from '../../components/footer';

import HomePage from '../../containers/HomePage/Loadable';
import RoomPage from '../../containers/RoomPage';
import NotFoundPage from '../../containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <div>
      <Header path={location.pathname} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/room" component={RoomPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}
