import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const VideoBlockWrapper = styled(NavLink)`
  display: flex;
  position: relative;
  flex-direction: column;
  text-decoration: none;
  color: #000;
  min-width: 230px;
  width: 19vw;
  background: #fff;
  transition: 0.3s;
  margin: 0.6rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
  border-radius: 5px;

  @media screen and (max-width: 900px) {
    max-width: 420px;
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
  font-size: 1.1em;
  line-height: 1.3;
  letter-spacing: 0.361309px;
  margin-bottom: 10px;
`;

export const VideoBlockContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const VideoBlockNames = styled.div`
  font-weight: 300;
  font-size: 0.9em;
  margin-bottom: 18px;
  height: 22px;
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
  letter-spacing: 0.270982px;
  height: 17px;
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
