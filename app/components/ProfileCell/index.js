import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AvaPlaceholder from '../../images/Placeholders/ava';
import LiveIcon from '../../images/LiveIcon/livesmall';

const ProfileCellWrapper = styled(Link)`
  display: inline-flex;
  text-decoration: none;
  color: #000;
  max-width: 180px;
`;

const ProfileCellAva = styled.div`
  position: relative;
  border-radius: 100px;
`;

const ProfileCellName = styled.div`
  font-size: 2em;
`;

const ProfileCellRep = styled.div`
  font-weight: 300;
`;

const ProfileCellTextWrapper = styled.div`
  display: flex;
  margin-left: 10px;
  flex-direction: column;
  justify-content: space-between;
`;

class TopBlock extends PureComponent {
  render() {
    return (
      <div style={{ height: '100px' }}>
        <ProfileCellWrapper to="some">
          <ProfileCellAva>
            <LiveIcon />
            <AvaPlaceholder />
          </ProfileCellAva>
          <ProfileCellTextWrapper>
            <ProfileCellName>Pynya</ProfileCellName>
            <ProfileCellRep>228 реп.</ProfileCellRep>
          </ProfileCellTextWrapper>
        </ProfileCellWrapper>
      </div>
    );
  }
}

export default TopBlock;
