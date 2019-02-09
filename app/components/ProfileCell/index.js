import React from 'react';
import PropTypes from 'prop-types';
import LiveIcon from 'images/videoblock/liveIconSmall';
import Placeholder from 'images/placeholders/1.png';
import * as Styles from './styles';

const ProfileCell = ({ isLive, name, rep }) => (
  <Styles.ProfileCellWrapper to="some">
    <Styles.ProfileCellAva>
      {isLive ? <LiveIcon /> : ''}
      <Styles.Image src={Placeholder} alt="" />
    </Styles.ProfileCellAva>
    <Styles.ProfileCellTextWrapper>
      <Styles.ProfileCellName>{name}</Styles.ProfileCellName>
      <Styles.ProfileCellRep>{rep}</Styles.ProfileCellRep>
    </Styles.ProfileCellTextWrapper>
  </Styles.ProfileCellWrapper>
);

ProfileCell.propTypes = {
  isLive: PropTypes.bool,
  name: PropTypes.string,
  rep: PropTypes.string,
};

export default ProfileCell;
