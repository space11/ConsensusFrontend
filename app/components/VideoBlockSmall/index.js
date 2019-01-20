import React from 'react';
import PropTypes from 'prop-types';
import LiveIcon from 'images/videoblock/liveIcon.svg';
import {
  VideoBlockWrapper,
  VideoBlockTitle,
  VideoBlockNames,
  VideoBlockLowWrapper,
  VideoBlockText,
  VideoBlockImage,
  VideoBlockLiveMark,
  ViedoBlockContent,
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
    {live ? <VideoBlockLiveMark src={LiveIcon} alt="" /> : ''}
    <VideoBlockImage src={image} alt="" />
    <ViedoBlockContent>
      <VideoBlockTitle>{title}</VideoBlockTitle>
      <VideoBlockNames>{names}</VideoBlockNames>
      <VideoBlockLowWrapper>
        <VideoBlockText>{theme}</VideoBlockText>
        <VideoBlockText>{viewers}</VideoBlockText>
      </VideoBlockLowWrapper>
    </ViedoBlockContent>
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
