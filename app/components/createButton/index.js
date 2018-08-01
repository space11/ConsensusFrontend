import React, { PureComponent } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import {
  OPENVIDU_SERVER_URL,
  OPENVIDU_SERVER_SECRET,
} from '../../utils/config';

const CreateDebates = styled.button`
  border-width: 2px;
  border-style: solid;
  width: 22vw;
  height: 6vw;
  outline: none;
  border-image: linear-gradient(75deg, #ef4978, #fb644c) 1;
  background: #0a0c6f;
  font-size: 1em;
  font-weight: 500;
  color: #fff;
`;

export default class HomePage extends PureComponent {
  createSession(sessionId) {
    axios({
      method: 'POST',
      url: `${OPENVIDU_SERVER_URL}/api/sessions`,
      data: { customSessionId: sessionId },
      headers: {
        Authorization: `Basic ${btoa(`OPENVIDUAPP:${OPENVIDU_SERVER_SECRET}`)}`,
        'Content-Type': 'application/json',
      },
    }).then(response => response.id);
    // .catch(error => {
    //   if (error.status === 409) {
    //     return sessionId;
    //   }
    //   // console.warn(
    //   //   `No connection to OpenVidu Server. This may be a certificate error at ${OPENVIDU_SERVER_URL}`,
    //   // );
    //   // if (
    //   //   // window.confirm(
    //   //   //   `No connection to OpenVidu Server. This may be a certificate error at \"${OPENVIDU_SERVER_URL}\"\n\nClick OK to navigate and accept it. ` +
    //   //   //     `If no certificate warning is shown, then check that your OpenVidu Server is up and running at "${OPENVIDU_SERVER_URL}"`,
    //   //   // )
    //   // ) {
    //   //   location.assign(`${OPENVIDU_SERVER_URL}/accept-certificate`);
    //   // }
    // });
  }

  render() {
    return (
      <div>
        <CreateDebates onClick={this.createSession}>
          Организовать дебаты
        </CreateDebates>
      </div>
    );
  }
}
