import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Placeholder from 'images/placeholders/avatar';
import VsIcon from 'images/playerblock/vs.svg';
import Nickname from './components/nickblock';

const TabBlockWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 19px;
`;

const NicknameWrapper = styled.div`
  display: flex;
`;

const VsWrapper = styled.img`
  margin: 0 39px;
  -webkit-user-select: none;
`;

class TabBlock extends PureComponent { //eslint-disable-line
  render() {
    return (
      <TabBlockWrapper>
        <NicknameWrapper>
          <Nickname url="oneperson" nickname="Pynya" avatar={<Placeholder />} />
        </NicknameWrapper>
        <VsWrapper src={VsIcon} alt="" />
        <NicknameWrapper>
          <Nickname
            isRight
            url="twoperson"
            nickname="Sisyan"
            avatar={<Placeholder />}
          />
        </NicknameWrapper>
      </TabBlockWrapper>
    );
  }
}

export default TabBlock;
