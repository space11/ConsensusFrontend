import React, { PureComponent } from 'react';
import Player from 'components/player';

/* eslint-disable react/prefer-stateless-function */
export default class RoomPage extends PureComponent {
  render() {
    return (
      <div>
        <Player width="480" height="270" style={{ zIndex: '100' }} />
      </div>
    );
  }
}
