import React from 'react';
import VsIcon from 'images/playerblock/vs.svg';
import Nickname from './components';
import * as Styles from './styles';

const TabBlock = () => (
  <Styles.TabBlockWrapper>
    <Styles.NicknameWrapper>
      <Nickname url="oneperson" nickname="Pynya" />
    </Styles.NicknameWrapper>
    <Styles.VsWrapper src={VsIcon} alt="" />
    <Styles.NicknameWrapper>
      <Nickname isRight url="twoperson" nickname="Sisyan" />
    </Styles.NicknameWrapper>
  </Styles.TabBlockWrapper>
);

export default TabBlock;
