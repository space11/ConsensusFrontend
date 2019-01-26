import React from 'react';
import PropTypes from 'prop-types';
import LiveIcon from 'images/videoblock/liveIcon.svg';
import * as Styles from './styles';

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
  <Styles.VideoBlockWrapper to={url} white={white}>
    {live ? <Styles.VideoBlockLiveMark src={LiveIcon} alt="" /> : ''}
    <Styles.VideoBlockImage src={image} alt="" />
    <Styles.ViedoBlockContent>
      <Styles.VideoBlockTitle>{title}</Styles.VideoBlockTitle>
      <vVideoBlockNames>{names}</vVideoBlockNames>
      <Styles.VideoBlockLowWrapper>
        <Styles.VideoBlockText>{theme}</Styles.VideoBlockText>
        <Styles.VideoBlockText>{viewers}</Styles.VideoBlockText>
      </Styles.VideoBlockLowWrapper>
    </Styles.ViedoBlockContent>
  </Styles.VideoBlockWrapper>
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
