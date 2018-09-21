import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PlayerBlock from '../../components/PlayerBlock';
import ChatBlock from '../../components/ChatBlock';
import VoteBlock from '../../components/VoteBlock';
import ShareIcon from '../../images/Controls/share';
import ViewersIcon from '../../images/Controls/viewers';

const RoomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1vw 3vw 1vw 3vw;
  flex-wrap: wrap;

  @media screen and (max-width: 1000px) {
    justify-content: center;
  }
`;

const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin-top: 3rem;
  }
`;

const RightBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  color: #4a4a4a;
  font-weight: 500;
  letter-spacing: 1px;
`;

const Share = styled.button`
  display: flex;
  align-items: center;
  color: #4a4a4a;
  font-weight: 300;
  font-size: 24px;
  letter-spacing: 1px;
`;

const UpLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
`;

const DownLine = styled.div`
  display: flex;
`;

const Viewers = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: 300;
  align-items: center;
`;

/* eslint-disable react/prefer-stateless-function */
class RoomPage extends PureComponent {
  render() {
    return (
      <RoomWrapper>
        <RightBlock>
          <PlayerBlock />
          <UpLine>
            <Title>{this.props.title}</Title>
            <Share>
              <ShareIcon /> Поделиться
            </Share>
          </UpLine>
          <DownLine>
            <Viewers>
              <ViewersIcon /> {this.props.viewers} зрителей
            </Viewers>
          </DownLine>
        </RightBlock>
        <LeftBlock>
          <VoteBlock />
          <ChatBlock />
        </LeftBlock>
      </RoomWrapper>
    );
  }
}

RoomPage.propTypes = {
  title: PropTypes.string,
  viewers: PropTypes.number,
};

RoomPage.defaultProps = {
  title: 'Сколько налогов нужно платить?',
  viewers: 500,
};

export default RoomPage;
