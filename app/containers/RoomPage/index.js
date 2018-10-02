import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PlayerBlock from '../../components/PlayerBlock';
import ChatBlock from '../../components/ChatBlock';
import VoteBlock from '../../components/VoteBlock';
import ShareIcon from '../../images/Controls/share';
import ViewersIcon from '../../images/Controls/viewers';
import TabBlock from '../../components/TabBlock';

const RoomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 1rem 0 1.5rem 0;

  @media screen and (max-width: 1000px) {
    justify-content: center;
  }
`;

const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3vw 0 0;

  @media screen and (max-width: 1154px) {
    width: 100%;
    margin: 1rem;
  }
`;

const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3vw 0 3vw;

  @media screen and (max-width: 1154px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  color: #4a4a4a;
  font-weight: 500;
  letter-spacing: 1px;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const Share = styled.button`
  display: flex;
  align-items: center;
  color: #4a4a4a;
  font-weight: 300;
  font-size: 1.4em;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
`;

const UpLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
  flex-wrap: wrap;

  @media screen and (max-width: 1154px) {
    justify-content: center;
  }
`;

const DownLine = styled.div`
  display: flex;
`;

const Viewers = styled.div`
  display: flex;
  font-size: 1.4em;
  font-weight: 300;
  align-items: center;
  color: #4a4a4a;
`;

const ShareXTitle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

/* eslint-disable react/prefer-stateless-function */
class RoomPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: props.collapsed || false,
    };
    this.collapse = this.collapse.bind(this);
  }

  collapse() {
    this.state.collapsed
      ? this.setState({ collapsed: false })
      : this.setState({ collapsed: true });
  }

  render() {
    return (
      <RoomWrapper>
        <RightBlock>
          <TabBlock />
          <PlayerBlock />
          <UpLine>
            <ShareXTitle>
              <Title>{this.props.title}</Title>
              <Share>
                <ShareIcon /> Поделиться
              </Share>
            </ShareXTitle>
            <Viewers>
              <ViewersIcon /> {this.props.viewers} зрителей
            </Viewers>
          </UpLine>
          <DownLine />
        </RightBlock>
        <LeftBlock>
          <VoteBlock
            collapse={this.collapse}
            collapsed={this.state.collapsed}
          />
          <ChatBlock collapsed={this.state.collapsed} />
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
