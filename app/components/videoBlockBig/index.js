import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LiveIconBig from '../../images/LiveIconBig';

const VideoBlockWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #000;
  min-width: 300px;
  width: 30%;
  height: 300px;

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
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.6rem;
  margin-bottom: 5px;
`;

const VideoBlockNames = styled.div`
  font-size: 1.2em;
  font-weight: 300;
`;

const VideoBlockLowWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  font-size: 0.9em;
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
  height: 11rem;
`;

const VideoBlockLiveMark = styled.div`
  position: relative;
`;

class VideoBlockBig extends PureComponent {
  render() {
    return (
      <VideoBlockWrapper to={this.props.url} r>
        <VideoBlockTitle>{this.props.title}</VideoBlockTitle>
        <VideoBlockLiveMark>
          <VideoBlockImage src={this.props.image} alt="" />
          <div style={{ display: this.props.live ? 'block' : 'none' }}>
            <LiveIconBig />
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
