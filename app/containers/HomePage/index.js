import React, { PureComponent } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CreateDebatesButton from '../../components/createButton';
import VideoBlockSmall from '../../components/videoblockSmall';
import VideoBlockBig from '../../components/videoBlockBig';
import placeholder from '../../images/placeholder.png';

import {
  OPENVIDU_SERVER_URL,
  OPENVIDU_SERVER_SECRET,
} from '../../utils/config';

const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20%;
  margin-bottom: 25%;
`;

const DescWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  color: #000;
  margin-bottom: 40px;
`;

const DescTitle = styled.div`
  font-size: 2.5em;
  font-weight: 600;
  margin-bottom: 20px;
  letter-spacing: 2px;
`;

const Description = styled.div`
  font-size: 1.8em;
  width: 44vw;
  letter-spacing: 1px;
`;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends PureComponent {
  createToken(sessionId) {
    axios({
      type: 'POST',
      url: `${OPENVIDU_SERVER_URL}/api/tokens`,
      data: { session: sessionId },
      headers: {
        Authorization: `Basic ${btoa(`OPENVIDUAPP:${OPENVIDU_SERVER_SECRET}`)}`,
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.token)
      .catch(error => error);
  }

  render() {
    return (
      <div>
        <LandingWrapper>
          <DescWrapper>
            <DescTitle>Консенсус</DescTitle>
            <Description>
              Первая в мире платформа для проведения онлайн-дебатов.
            </Description>
          </DescWrapper>
          <CreateDebatesButton onClick={() => this.createToken(12314)} />
        </LandingWrapper>
        <VideoBlockBig
          title="Выбор политического курса России: как не обмануть ожидания народа?"
          names="Face vs Sisyan"
          theme="Политика"
          followers="98 зрителей"
          live
          url="/room"
          image={placeholder}
        />
        <VideoBlockSmall
          title="Можно ли по майнкрафту научиться строить реактор?"
          names="Unnamed vs RabSystemi"
          theme="Наука и технологии"
          followers="24 зрителей"
          live
          url="/room"
          image={placeholder}
        />
      </div>
    );
  }
}
