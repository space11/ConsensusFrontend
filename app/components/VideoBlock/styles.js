import styled from 'styled-components';
import { hideOn, media } from 'utils/helpers';
import { unit } from 'utils/constants';

export const VideoBlockWrapper = styled.div`
  position: relative;
  max-width: 64em;
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;
  padding: 0 ${unit / 3}%;
  ${hideOn} ${media.large`padding: 0 ${3.2 * unit}px;`};
`;

export const VideoBlockTitle = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 2.4em;
  letter-spacing: 2px;
`;

export const VideoBlockMoreButton = styled.button`
  display: flex;
  color: #9b9b9b;
  font-size: 1.5em;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    color: #374059;
  }
`;

export const VideoBlockLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 654px) {
    justify-content: center;
    text-align: center;
  }
`;

export const VideoBlockBigWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const VideoBlockSmallWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 654px) {
    justify-content: center;
  }
`;
