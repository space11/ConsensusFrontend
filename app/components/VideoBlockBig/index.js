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

const VideoBlockBig = ({ url, title, image, live, names, theme, viewers }) => (
  <VideoBlockWrapper to={url}>
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

VideoBlockBig.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  url: PropTypes.string,
  live: PropTypes.bool,
  names: PropTypes.string,
  theme: PropTypes.string,
  viewers: PropTypes.string,
};

export default VideoBlockBig;
