/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/header';
import Footer from '../../components/footer';
import Content from '../../components/content';

import HomePage from '../../containers/HomePage/Loadable';
import RoomPage from '../../containers/RoomPage';
import NotFoundPage from '../../containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <div>
      <Header />
      <Content>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/room" component={RoomPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Content>
      <Footer />
    </div>
  );
}
