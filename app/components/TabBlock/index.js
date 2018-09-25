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

const Timer = styled.div`
  display: flex;
  align-self: flex-end;
  font-size: 2.5em;
  color: #4a4a4a;

  animation: color-change 3s infinite ease-in-out;

  @keyframes color-change {
    0% {
      color: #f7567c;
    }
    50% {
      color: #4e5f92;
    }
    100% {
      color: #4a4a4a;
    }
  }
`;

class TabBlock extends PureComponent {
  render() {
    return (
      <TabBlockWrapper>
        <NicknameWrapper>
          <Nickname
            url="oneperson"
            nickname="Pynya"
            avatar={<Placholder />}
            isTalk
          />
        </NicknameWrapper>
        <Timer>1:03</Timer>
        <NicknameWrapper>
          <Nickname
            isRight
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
