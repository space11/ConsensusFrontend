import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const VideoBlockWrapper = styled(NavLink)`
  position: relative;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  width: 220px;
  background: #fff;
  transition: 0.3s;
  color: #000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
`;

export const VideoBlockTitle = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  line-height: 1.6rem;
  font-size: 15px;
  letter-spacing: 0.255927px;
  line-height: 1.19;
  height: 33px;
  margin-bottom: 7px;
`;

export const VideoBlockNames = styled.div`
  font-weight: 300;
  font-size: 13px;
  letter-spacing: 0.414px;
  margin-bottom: 19px;
  height: 16px;
`;

export const VideoBlockLowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #4a4a4a;
`;

export const VideoBlockText = styled.div`
  font-weight: 300;
  font-size: 10px;
  letter-spacing: 0.195709px;
  height: 12px;
`;

export const VideoBlockViewers = styled.div`
  letter-spacing: 0.5px;
  margin: 7px;
  margin-top: 0;
`;

export const VideoBlockImage = styled.img`
  position: relative;
  height: 111px;
  width: 100%;
  border-radius: 5px 5px 2px 2px;
`;

export const VideoBlockLiveMark = styled.img`
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const ViedoBlockContent = styled.div`
  padding: 11px;
  height: 100%;
`;
