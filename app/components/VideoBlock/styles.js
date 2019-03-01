import styled from 'styled-components';

export const VideoBlockWrapper = styled.div`
  margin: 0 auto;
`;

export const VideoBlockTitle = styled.div`
  font-size: 1.4em;
`;

export const VideoBlockMoreButton = styled.button`
  font-size: 1em;
  color: #9b9b9b;
  margin-bottom: 5px;
`;

export const VideoBlockLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;
  padding: 0.6rem;

  @media screen and (max-width: 457px) {
    justify-content: center;
  }
`;

export const VideoBlockBigWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;

export const VideoBlockSmallWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;
