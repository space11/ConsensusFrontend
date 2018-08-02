import React, { PureComponent } from 'react';
import deb from '../../images/deb.webm';
import Player from '../../components/player';

/* eslint-disable react/prefer-stateless-function */
export default class RoomPage extends PureComponent {
  render() {
    return (
      <div>
        <Player width="100%" height="auto" />
        <Player
          width="300"
          height="auto"
          src={deb}
          style={{ position: 'absolute', bottom: '30px', left: 0 }}
        />
      </div>
    );
  }
}
