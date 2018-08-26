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
  max-width: 220px;
`;

const VideoBlockTitle = styled.div`
  font-size: 1em;
  width: 15vw;
  font-weight: 400;
  margin-bottom: 10px;
  max-width: 220px;
`;

const VideoBlockNames = styled.div`
  font-size: 0.8em;
  font-weight: 300;
  max-width: 220px;
`;

const VideoBlockLowWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 15.5vw;
  font-size: 0.8em;
  font-weight: 300;
  max-width: 220px;
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
  width: 15.5vw;
  height: 8vw;
  max-width: 220px;
  max-height: 110px;
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
