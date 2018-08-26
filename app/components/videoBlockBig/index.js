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
  max-width: 300px;
`;

const VideoBlockTitle = styled.div`
  font-size: 1.2em;
  width: 20.9vw;
  font-weight: 400;
  margin-bottom: 10px;
  text-overflow: ellipsis;
  max-width: 300px;
`;

const VideoBlockNames = styled.div`
  font-size: 1.2em;
  font-weight: 300;
`;

const VideoBlockLowWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 21vw;
  max-width: 300px;
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
  max-width: 300px;
  max-height: 158px;
  width: 21vw;
  height: 11vw;
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
