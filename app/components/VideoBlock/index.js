import React from 'react';
import PropTypes from 'prop-types';
import Placeholder from 'images/placeholders/1.png';
import VideoBlockBig from '../VideoBlockBig';
import VideoBlockSmall from '../VideoBlockSmall';
import * as Styles from './styles';

const VideoBlock = ({ title, live }) => (
  <Styles.VideoBlockWrapper>
    <Styles.VideoBlockLine>
      <Styles.VideoBlockTitle>{title}</Styles.VideoBlockTitle>
      <Styles.VideoBlockMoreButton>Посмотреть еще</Styles.VideoBlockMoreButton>
    </Styles.VideoBlockLine>
    <Styles.VideoBlockBigWrapper>
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
    </Styles.VideoBlockBigWrapper>
    <Styles.VideoBlockSmallWrapper>
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
    </Styles.VideoBlockSmallWrapper>
  </Styles.VideoBlockWrapper>
);

VideoBlock.propTypes = {
  title: PropTypes.string,
  live: PropTypes.bool,
};

export default VideoBlock;
