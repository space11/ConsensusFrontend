import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { hideOn, media } from '../../utils/helpers';
import { unit } from '../../utils/constants';
import VideoBlockBig from '../VideoBlockBig';
import VideoBlockSmall from '../VideoblockSmall';
import Placeholder from '../../images/placeholder.png';

const PassedBlockWrapper = styled.div`
  max-width: 64em;
  margin: auto;
  margin-bottom: 10vw;
  box-sizing: border-box;
  min-height: calc(100vh - 21vw);
  padding: 0 ${unit / 3}%;
  ${hideOn} ${media.large`padding: 0 ${3.2 * unit}px;`};
`;

const PassedBlockTitle = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 2.4em;
  letter-spacing: 2px;
`;

const PassedBlockVideoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PassedBlockMoreButton = styled.button`
  display: flex;
  color: #9b9b9b;
  font-size: 1.5em;
`;

const PassedBlockLine = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;
  align-items: center;
`;

const VideoBlockSmallWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
`;

class PassedBlock extends PureComponent {
  render() {
    return (
      <PassedBlockWrapper>
        <PassedBlockLine>
          <PassedBlockTitle>Прошедшие дебаты</PassedBlockTitle>
          <PassedBlockMoreButton>Посмотреть еще</PassedBlockMoreButton>
        </PassedBlockLine>
        <PassedBlockVideoWrapper>
          <VideoBlockBig
            url="/"
            title="Выбор политического курса России: как не об…"
            src={Placeholder}
            names="Pynya vs Sysyan"
            theme="Политика"
            viewers="98 зрителей"
          />
          <VideoBlockBig
            url="/"
            title="Выбор политического курса России: как не об…"
            src={Placeholder}
            names="Pynya vs Sysyan"
            theme="Политика"
            viewers="98 зрителей"
          />
          <VideoBlockBig
            url="/"
            title="Выбор политического курса России: как не об…"
            src={Placeholder}
            names="Pynya vs Sysyan"
            theme="Политика"
            viewers="98 зрителей"
          />
          <VideoBlockSmallWrapper>
            <VideoBlockSmall
              url="/"
              title="Выбор политического курса России: как не об…"
              src={Placeholder}
              names="Pynya vs Sysyan"
              theme="Политика"
              viewers="98 зрителей"
            />
            <VideoBlockSmall
              url="/"
              title="Выбор политического курса России: как не об…"
              src={Placeholder}
              names="Pynya vs Sysyan"
              theme="Политика"
              viewers="98 зрителей"
            />
            <VideoBlockSmall
              url="/"
              title="Выбор политического курса России: как не об…"
              src={Placeholder}
              names="Pynya vs Sysyan"
              theme="Политика"
              viewers="98 зрителей"
            />
            <VideoBlockSmall
              url="/"
              title="Выбор политического курса России: как не об…"
              src={Placeholder}
              names="Pynya vs Sysyan"
              theme="Политика"
              viewers="98 зрителей"
            />
          </VideoBlockSmallWrapper>
        </PassedBlockVideoWrapper>
      </PassedBlockWrapper>
    );
  }
}

export default PassedBlock;
