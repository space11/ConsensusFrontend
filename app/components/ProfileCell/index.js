import React from 'react';
import LiveIcon from 'images/videoblock/liveIconSmall';
import AvaPlaceholder from 'images/placeholders/avatar';
import {
  ProfileCellWrapper,
  ProfileCellAva,
  ProfileCellName,
  ProfileCellColumn,
  ProfileCellRep,
  ProfileCellTextWrapper,
} from './styles';

const TopBlock = (isLive, white, name, rep) => (
  <ProfileCellWrapper to="some" white={white}>
    <ProfileCellColumn>
      <ProfileCellAva>
        {isLive ? <LiveIcon /> : ''}
        <AvaPlaceholder />
      </ProfileCellAva>
      <ProfileCellTextWrapper>
        <ProfileCellName>{name}</ProfileCellName>
        <ProfileCellRep>{rep} реп.</ProfileCellRep>
      </ProfileCellTextWrapper>
    </ProfileCellColumn>
  </ProfileCellWrapper>
);

export default TopBlock;
