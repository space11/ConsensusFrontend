import React from 'react';
import PropTypes from 'prop-types';
import Placeholder from 'images/placeholders/1.png';
import VideoBlockBig from '../VideoBlockBig';
import VideoBlockSmall from '../VideoBlockSmall';
import {
  VideoBlockWrapper,
  VideoBlockTitle,
  VideoBlockMoreButton,
  VideoBlockLine,
  VideoBlockBigWrapper,
  VideoBlockSmallWrapper,
} from './styles';

const VideoBlock = ({ title, live }) => (
  <VideoBlockWrapper>
    <VideoBlockLine>
      <VideoBlockTitle>{title}</VideoBlockTitle>
      <VideoBlockMoreButton>Посмотреть еще</VideoBlockMoreButton>
    </VideoBlockLine>
    <VideoBlockBigWrapper>
      <VideoBlockBig
        url="/"
        title="Выбор политического курса России: как не упустить шанс снова."
        live={live}
        names="Pynya vs Sysyan"
        theme="Политика"
        viewers="98 зрителей"
        image={Placeholder}
      />
      <VideoBlockBig
        url="/"
        title="Выбор политического курса России: как не упустить шанс снова."
        live={live}
        names="Pynya vs Sysyan"
        theme="Политика"
        viewers="98 зрителей"
        image={Placeholder}
      />
      <VideoBlockBig
        url="/"
        title="Выбор политического курса России: как не упустить шанс снова."
        live={live}
        names="Pynya vs Sysyan"
        theme="Политика"
        viewers="98 зрителей"
        image={Placeholder}
      />
    </VideoBlockBigWrapper>
    <VideoBlockSmallWrapper>
      <VideoBlockSmall
        url="/"
        title="Выбор политического курса России: как не упустить шанс снова."
        live={live}
        names="Pynya vs Sysyan"
        theme="Политика"
        image={Placeholder}
        viewers="98 зрителей"
      />
      <VideoBlockSmall
        url="/"
        title="Выбор политического курса России: как не упустить шанс снова."
        live={live}
        names="Pynya vs Sysyan"
        theme="Политика"
        image={Placeholder}
        viewers="98 зрителей"
      />
      <VideoBlockSmall
        url="/"
        title="Выбор политического курса России: как не упустить шанс снова."
        live={live}
        names="Pynya vs Sysyan"
        theme="Политика"
        viewers="98 зрителей"
        image={Placeholder}
      />
      <VideoBlockSmall
        url="/"
        title="Выбор политического курса России: как не упустить шанс снова."
        live={live}
        names="Pynya vs Sysyan"
        theme="Политика"
        viewers="98 зрителей"
        image={Placeholder}
      />
    </VideoBlockSmallWrapper>
  </VideoBlockWrapper>
);

VideoBlock.propTypes = {
  title: PropTypes.string,
  live: PropTypes.bool,
};

export default VideoBlock;
