import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { hideOn, media } from '../../utils/helpers';
import { unit } from '../../utils/constants';
import Space from '../Space';
import ProfileCell from '../ProfileCell';

const TopBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 64em;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 ${unit / 3}%;
  ${hideOn} ${media.large`padding: 0 ${3.2 * unit}px;`};
`;

const TopBlockTitle = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 2.4em;
  letter-spacing: 2px;
  @media screen and (max-width: 654px) {
    justify-content: center;
  }
`;

const ProfileWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

class TopBlock extends PureComponent {
  render() {
    return (
      <TopBlockWrapper>
        <TopBlockTitle>Топ спикеров</TopBlockTitle>
        <Space size={4} />
        <ProfileWrapper>
          <ProfileCell isLive name="Nagibator22" rep={228} />
          <ProfileCell name="Richard |||" rep={282} />
          <ProfileCell name="Kirino" rep={199} />
          <ProfileCell isLive name="Jojo" rep={814} />
        </ProfileWrapper>
      </TopBlockWrapper>
    );
  }
}

export default TopBlock;
