import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { hideOn, media } from '../../utils/helpers';
import { unit } from '../../utils/constants';
import VideoBlockBig from '../VideoBlockBig';
import VideoBlockSmall from '../VideoblockSmall';
import Space from '../Space';

const VideoBlockWrapper = styled.div`
  position: relative;
  max-width: 64em;
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;
  padding: 0 ${unit / 3}%;
  ${hideOn} ${media.large`padding: 0 ${3.2 * unit}px;`};
`;

const VideoBlockTitle = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 2.4em;
  letter-spacing: 2px;
`;

const VideoBlockMoreButton = styled.button`
  display: flex;
  color: #9b9b9b;
  font-size: 1.5em;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    color: #374059;
  }
`;

const VideoBlockLine = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 654px) {
    justify-content: center;
    text-align: center;
  }
`;

const VideoBlockBigWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const VideoBlockSmallWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 654px) {
    justify-content: center;
  }
`;

class VideoBlock extends PureComponent {
  render() {
    return (
      <VideoBlockWrapper>
        <VideoBlockLine>
          <VideoBlockTitle>{this.props.title}</VideoBlockTitle>
          <VideoBlockMoreButton>Посмотреть еще</VideoBlockMoreButton>
        </VideoBlockLine>
        <Space size={4} />
        <VideoBlockBigWrapper>
          <VideoBlockBig
            url="/"
            title="Выбор политического курса России: как не упустить шанс снова."
            live={this.props.live}
            names="Pynya vs Sysyan"
            theme="Политика"
            viewers="98 зрителей"
          />
          <VideoBlockBig
            url="/"
            title="Выбор политического курса России: как не упустить шанс снова."
            live={this.props.live}
            names="Pynya vs Sysyan"
            theme="Политика"
            viewers="98 зрителей"
          />
          <VideoBlockBig
            url="/"
            title="Выбор политического курса России: как не упустить шанс снова."
            live={this.props.live}
            names="Pynya vs Sysyan"
            theme="Политика"
            viewers="98 зрителей"
          />
        </VideoBlockBigWrapper>
        <Space size={2} />
        <VideoBlockSmallWrapper>
          <VideoBlockSmall
            url="/"
            title="Выбор политического курса России: как не упустить шанс снова."
            live={this.props.live}
            names="Pynya vs Sysyan"
            theme="Политика"
            viewers="98 зрителей"
          />
          <VideoBlockSmall
            url="/"
            title="Выбор политического курса России: как не упустить шанс снова."
            live={this.props.live}
            names="Pynya vs Sysyan"
            theme="Политика"
            viewers="98 зрителей"
          />
          <VideoBlockSmall
            url="/"
            title="Выбор политического курса России: как не упустить шанс снова."
            live={this.props.live}
            names="Pynya vs Sysyan"
            theme="Политика"
            viewers="98 зрителей"
          />
          <VideoBlockSmall
            url="/"
            title="Выбор политического курса России: как не упустить шанс снова."
            live={this.props.live}
            names="Pynya vs Sysyan"
            theme="Политика"
            viewers="98 зрителей"
          />
        </VideoBlockSmallWrapper>
      </VideoBlockWrapper>
    );
  }
}

VideoBlock.propTypes = {
  title: PropTypes.string,
  live: PropTypes.bool,
};

export default VideoBlock;
