import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AvaPlaceholder from '../../images/Placeholders/ava';
import LiveIcon from '../../images/LiveIcon/livesmall';

const ProfileCellWrapper = styled(Link)`
  display: inline-flex;
  position: relative;
  text-decoration: none;
  color: #000;
  margin: 1.5em;

  @media screen and (max-width: 463px) {
    width: 100%;
  }
`;

const ProfileCellAva = styled.div`
  position: relative;
  border-radius: 100px;
  min-width: 100px;
`;

const ProfileCellName = styled.div`
  font-size: 2em;
  word-break: break-all;
`;

const ProfileCellRep = styled.div`
  font-weight: 300;
`;

const ProfileCellTextWrapper = styled.div`
  display: flex;
  margin-left: 0.7rem;
  flex-direction: column;
  justify-content: space-between;
`;

class TopBlock extends PureComponent {
  render() {
    return (
      <ProfileCellWrapper to="some">
        <ProfileCellAva>
          {this.props.isLive ? <LiveIcon /> : ''}
          <AvaPlaceholder />
        </ProfileCellAva>
        <ProfileCellTextWrapper>
          <ProfileCellName>{this.props.name}</ProfileCellName>
          <ProfileCellRep>{this.props.rep} реп.</ProfileCellRep>
        </ProfileCellTextWrapper>
      </ProfileCellWrapper>
    );
  }
}

TopBlock.propTypes = {
  name: PropTypes.string,
  rep: PropTypes.number,
  isLive: PropTypes.bool,
};

export default TopBlock;
