import React from 'react';
import Placeholder from 'images/placeholders/avatar';
import VsIcon from 'images/playerblock/vs.svg';
import Nickname from './components';
import { TabBlockWrapper, NicknameWrapper, VsWrapper } from './styles';

const TabBlock = () => (
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

export default TabBlock;
