import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Nickname from './components/nickblock';
import Placeholder from '../../images/placeholders/avatar';

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
`;

class TabBlock extends PureComponent { //eslint-disable-line
  render() {
    return (
      <TabBlockWrapper>
        <NicknameWrapper>
          <Nickname url="oneperson" nickname="Pynya" avatar={<Placeholder />} />
        </NicknameWrapper>
        <Timer>1:03</Timer>
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
