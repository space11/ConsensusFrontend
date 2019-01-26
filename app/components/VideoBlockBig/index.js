import React from 'react';
import PropTypes from 'prop-types';
import LiveIcon from 'images/videoblock/liveIcon.svg';
import * as Styles from './styles';

const VideoBlockBig = ({ url, title, image, live, names, theme, viewers }) => (
  <Styles.VideoBlockWrapper to={url}>
    <Styles.VideoBlockImage src={image} alt="" />
    {live ? <Styles.VideoBlockLiveMark src={LiveIcon} alt="" /> : ''}
    <Styles.VideoBlockContent>
      <Styles.VideoBlockTitle>{title}</Styles.VideoBlockTitle>
      <Styles.VideoBlockNames>{names}</Styles.VideoBlockNames>
      <Styles.VideoBlockLowWrapper>
        <Styles.VideoBlockLowText>{theme}</Styles.VideoBlockLowText>
        <Styles.VideoBlockLowText>{viewers}</Styles.VideoBlockLowText>
      </Styles.VideoBlockLowWrapper>
    </Styles.VideoBlockContent>
  </Styles.VideoBlockWrapper>
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
