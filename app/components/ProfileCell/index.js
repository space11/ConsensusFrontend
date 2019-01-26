import React from 'react';
import LiveIcon from 'images/videoblock/liveIconSmall';
import AvaPlaceholder from 'images/placeholders/avatar';
import Styles from './styles';

const TopBlock = (isLive, white, name, rep) => (
  <Styles.ProfileCellWrapper to="some" white={white}>
    <Styles.ProfileCellColumn>
      <Styles.ProfileCellAva>
        {isLive ? <LiveIcon /> : ''}
        <AvaPlaceholder />
      </Styles.ProfileCellAva>
      <Styles.ProfileCellTextWrapper>
        <Styles.ProfileCellName>{name}</Styles.ProfileCellName>
        <Styles.ProfileCellRep>{rep} реп.</Styles.ProfileCellRep>
      </Styles.ProfileCellTextWrapper>
    </Styles.ProfileCellColumn>
  </Styles.ProfileCellWrapper>
);

export default TopBlock;
