import React from 'react';
import Bg from 'images/notfound/background.svg';
import Ufo from 'images/notfound/ufo.svg';
import NF from 'images/notfound/404.svg';
import * as Styles from './styles';

/* eslint-disable react/prefer-stateless-function */
export default class NotFound extends React.Component {
  render() {
    return (
      <Styles.NotFoundBackground>
        <Styles.Background src={Bg} alt="" />
        <Styles.Content>
          <Styles.UfoWrapper src={Ufo} alt="" />
          <Styles.NotWrapper src={NF} alt="" />
        </Styles.Content>
      </Styles.NotFoundBackground>
    );
  }
}
