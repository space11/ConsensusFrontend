import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Nickname from './components/nickblock';
import Placholder from '../../images/Placeholders/ava';

const TabBlockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;

const NicknameWrapper = styled.div`
  display: flex;
`;

class TabBlock extends PureComponent {
  render() {
    return (
      <TabBlockWrapper>
        <NicknameWrapper>
          <Nickname url="oneperson" nickname="Pynya" avatar={<Placholder />} />
        </NicknameWrapper>
        <NicknameWrapper>
          <Nickname
            isRight
            isTalk
            url="twoperson"
            nickname="Sisyan"
            avatar={<Placholder />}
          />
        </NicknameWrapper>
      </TabBlockWrapper>
    );
  }
}

export default TabBlock;
