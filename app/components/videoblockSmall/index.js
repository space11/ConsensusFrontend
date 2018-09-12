import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LiveIcon from '../../images/LiveIcon';

const VideoBlockWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #000;
  min-width: 220px;
  width: 22%;
  height: 240px;

  @media screen and (max-width: 654px) {
    width: 100%;
  }
`;

const VideoBlockTitle = styled.div`
  display: -webkit-box;
  max-height: 3.2rem;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6rem;
  margin-bottom: 5px;
`;

const VideoBlockNames = styled.div`
  font-size: 0.8em;
  font-weight: 300;
  white-space: nowrap;
`;

const VideoBlockLowWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  font-size: 0.8em;
  font-weight: 300;
`;

const VideoBlockTheme = styled.div`
  letter-spacing: 0.5px;
`;

const VideoBlockViewers = styled.div`
  letter-spacing: 0.5px;
`;

const VideoBlockImage = styled.img`
  position: relative;
  margin-bottom: 5px;
  width: 100%;
  height: 8rem;
`;

const VideoBlockLiveMark = styled.div`
  position: relative;
`;

class VideoBlockSmall extends PureComponent {
  render() {
    return (
      <VideoBlockWrapper to={this.props.url} r>
        <VideoBlockTitle>{this.props.title}</VideoBlockTitle>
        <VideoBlockLiveMark>
          <VideoBlockImage src={this.props.image} alt="" />
          <div style={{ display: this.props.live ? 'block' : 'none' }}>
            <LiveIcon />
          </div>
        </VideoBlockLiveMark>
        <VideoBlockNames>{this.props.names}</VideoBlockNames>
        <VideoBlockLowWrapper>
          <VideoBlockTheme>{this.props.theme}</VideoBlockTheme>
          <VideoBlockViewers>{this.props.viewers}</VideoBlockViewers>
        </VideoBlockLowWrapper>
      </VideoBlockWrapper>
    );
  }
}

VideoBlockSmall.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  url: PropTypes.string,
  live: PropTypes.bool,
  names: PropTypes.string,
  theme: PropTypes.string,
  viewers: PropTypes.string,
};

export default VideoBlockSmall;
