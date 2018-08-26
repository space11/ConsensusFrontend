import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { hideOn, media } from '../../utils/helpers';
import { unit } from '../../utils/constants';
import ProfileCell from '../ProfileCell';

const TopBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 64em;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 10vw;
  box-sizing: border-box;
  padding: 0 ${unit / 3}%;
  ${hideOn} ${media.large`padding: 0 ${3.2 * unit}px;`};
`;

const TopBlockTitle = styled.div`
  display: flex;
  font-weight: 600;
  margin-bottom: 50px;
  font-size: 2.4em;
  letter-spacing: 2px;
`;

const ProfileWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
`;

class TopBlock extends PureComponent {
  render() {
    return (
      <TopBlockWrapper>
        <TopBlockTitle>Топ спикеров</TopBlockTitle>
        <ProfileWrapper>
          <ProfileCell />
          <ProfileCell />
          <ProfileCell />
          <ProfileCell />
        </ProfileWrapper>
      </TopBlockWrapper>
    );
  }
}

export default TopBlock;
