import React from 'react';
import PropTypes from 'prop-types';
import LiveIcon from 'images/videoblock/liveIcon.svg';
import {
  VideoBlockWrapper,
  VideoBlockTitle,
  VideoBlockNames,
  VideoBlockLowWrapper,
  VideoBlockLowText,
  VideoBlockImage,
  VideoBlockLiveMark,
  VideoBlockContent,
} from './styles';

const VideoBlockBig = ({ url, title, image, live, names, theme, viewers }) => (
  <VideoBlockWrapper to={url}>
    <VideoBlockImage src={image} alt="" />
    {live ? <VideoBlockLiveMark src={LiveIcon} alt="" /> : ''}
    <VideoBlockContent>
      <VideoBlockTitle>{title}</VideoBlockTitle>
      <VideoBlockNames>{names}</VideoBlockNames>
      <VideoBlockLowWrapper>
        <VideoBlockLowText>{theme}</VideoBlockLowText>
        <VideoBlockLowText>{viewers}</VideoBlockLowText>
      </VideoBlockLowWrapper>
    </VideoBlockContent>
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
