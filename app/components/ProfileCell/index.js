import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LiveIcon from 'images/videoblock/liveIconSmall';
import AvaPlaceholder from 'images/placeholders/avatar';

const ProfileCellWrapper = styled(NavLink)`
  display: flex;
  position: relative;
  text-decoration: none;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  margin: 0.5rem;
  color: ${props => (props.white ? '#fff' : '#000')};
  background: #fafafa;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.16);
  border-radius: 7px;
  padding: 10px;
  min-width: 220px;
  text-align: center;
`;

const ProfileCellAva = styled.div`
  position: relative;
  border-radius: 100px;
  margin: 1rem;
`;

const ProfileCellName = styled.div`
  font-size: 1.5em;
  font-weight: 400;
`;

const ProfileCellColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileCellRep = styled.div`
  font-weight: 300;
  color: #9b9b9b;
  font-size: 0.9em;
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
      <ProfileCellWrapper to="some" white={this.props.white}>
        <ProfileCellColumn>
          <ProfileCellAva>
            {this.props.isLive ? <LiveIcon /> : ''}
            <AvaPlaceholder />
          </ProfileCellAva>
          <ProfileCellTextWrapper>
            <ProfileCellName>{this.props.name}</ProfileCellName>
            <ProfileCellRep>{this.props.rep} реп.</ProfileCellRep>
          </ProfileCellTextWrapper>
        </ProfileCellColumn>
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
