import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const VideoBlockWrapper = styled(NavLink)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: ${props => (props.white ? '#fff' : '#000')};
  min-width: 220px;
  width: 22%;
  height: 240px;
  background: #fafafa;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.16);
  border-radius: 7px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.025);
  }

  @media screen and (max-width: 654px) {
    width: 100%;
  }
`;

export const VideoBlockTitle = styled.div`
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
  margin: 7px;
`;

export const VideoBlockNames = styled.div`
  font-size: 0.8em;
  font-weight: 300;
  margin: 7px;
  white-space: nowrap;
`;

export const VideoBlockLowWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  font-size: 0.8em;
  font-weight: 300;
`;

export const VideoBlockTheme = styled.div`
  letter-spacing: 0.5px;
  margin: 7px;
  margin-top: 0;
`;

export const VideoBlockViewers = styled.div`
  letter-spacing: 0.5px;
  margin: 7px;
  margin-top: 0;
`;

export const VideoBlockImage = styled.img`
  position: relative;
  margin-bottom: 7px;
  height: 110px;
  width: 100%;
`;

export const VideoBlockLiveMark = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;