import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const VideoBlockWrapper = styled(NavLink)`
  display: flex;
  position: relative;
  flex-direction: column;
  text-decoration: none;
  color: #000;
  min-width: 200px;
  width: 14vw;
  background: #fff;
  transition: 0.3s;
  margin: 0.6rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
  border-radius: 5px;

  @media screen and (max-width: 900px) {
    max-width: 400px;
  }
`;

export const VideoBlockTitle = styled.div`
  display: -webkit-box;
  max-height: 52px;
  overflow: hidden;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  font-size: 0.8em;
  line-height: 1.3;
  margin-bottom: 10px;
`;

export const VideoBlockContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const VideoBlockNames = styled.div`
  font-weight: 300;
  font-size: 0.7em;
  margin-bottom: 0.5rem;
`;

export const VideoBlockLowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #4a4a4a;
`;

export const VideoBlockLowText = styled.div`
  font-weight: 300;
  font-size: 0.7em;
`;

export const VideoBlockViewers = styled.div`
  letter-spacing: 0.5px;
  margin: 10px;
  margin-top: 0;
`;

export const VideoBlockImage = styled.img`
  position: relative;
  width: 100%;
  border-radius: 5px 5px 2px 2px;
`;

export const VideoBlockLiveMark = styled.img`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
`;
