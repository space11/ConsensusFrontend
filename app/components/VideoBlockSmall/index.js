import React from 'react';
import PropTypes from 'prop-types';
import LiveIcon from 'images/videoblock/liveIcon';
import {
  VideoBlockWrapper,
  VideoBlockTitle,
  VideoBlockNames,
  VideoBlockLowWrapper,
  VideoBlockTheme,
  VideoBlockViewers,
  VideoBlockImage,
  VideoBlockLiveMark,
} from './styles';

const VideoBlockSmall = ({
  url,
  title,
  image,
  live,
  names,
  theme,
  viewers,
  white,
}) => (
  <VideoBlockWrapper to={url} white={white}>
    <VideoBlockTitle>{title}</VideoBlockTitle>
    <VideoBlockLiveMark>
      <VideoBlockImage src={image} alt="" />
      <div style={{ display: live ? 'block' : 'none' }}>
        <LiveIcon />
      </div>
    </VideoBlockLiveMark>
    <VideoBlockNames>{names}</VideoBlockNames>
    <VideoBlockLowWrapper>
      <VideoBlockTheme>{theme}</VideoBlockTheme>
      <VideoBlockViewers>{viewers}</VideoBlockViewers>
    </VideoBlockLowWrapper>
  </VideoBlockWrapper>
);
VideoBlockSmall.propTypes = {
  image: PropTypes.any,
  white: PropTypes.bool,
  title: PropTypes.string,
  url: PropTypes.string,
  live: PropTypes.bool,
  names: PropTypes.string,
  theme: PropTypes.string,
  viewers: PropTypes.string,
};

export default VideoBlockSmall;
