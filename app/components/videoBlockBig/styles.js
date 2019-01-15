import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const VideoBlockWrapper = styled(NavLink)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #000;
  min-width: 300px;
  width: 30%;
  height: 300px;
  background: #fafafa;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.16);
  border-radius: 7px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 654px) {
    width: 100%;
  }
`;

export const VideoBlockTitle = styled.div`
  display: -webkit-box;
  max-height: 3.5rem;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.6rem;
  margin: 10px;
`;

export const VideoBlockNames = styled.div`
  font-size: 1.2em;
  font-weight: 300;
  margin: 10px;
`;

export const VideoBlockLowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 0.9em;
  font-weight: 300;
`;

export const VideoBlockTheme = styled.div`
  letter-spacing: 0.5px;
  margin: 10px;
  margin-top: 0;
`;

export const VideoBlockViewers = styled.div`
  letter-spacing: 0.5px;
  margin: 10px;
  margin-top: 0;
`;

export const VideoBlockImage = styled.img`
  position: relative;
  margin-bottom: 10px;
  width: 100%;
  height: 151px;
`;

export const VideoBlockLiveMark = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;
