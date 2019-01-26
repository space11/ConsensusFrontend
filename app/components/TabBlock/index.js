import React from 'react';
import Placeholder from 'images/placeholders/avatar';
import VsIcon from 'images/playerblock/vs.svg';
import Nickname from './components';
import * as Styles from './styles';

const TabBlock = () => (
  <Styles.TabBlockWrapper>
    <Styles.NicknameWrapper>
      <Nickname url="oneperson" nickname="Pynya" avatar={<Placeholder />} />
    </Styles.NicknameWrapper>
    <Styles.VsWrapper src={VsIcon} alt="" />
    <Styles.NicknameWrapper>
      <Nickname
        isRight
        url="twoperson"
        nickname="Sisyan"
        avatar={<Placeholder />}
      />
    </Styles.NicknameWrapper>
  </Styles.TabBlockWrapper>
);

export default TabBlock;
