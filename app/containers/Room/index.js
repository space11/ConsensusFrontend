import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import OpvSession from 'openvidu-react';
import PlayerBlock from 'components/PlayerBlock';
import ChatBlock from 'components/ChatBlock';
import Place from 'components/PartnersCell/1.png';
import TabBlock from 'components/TabBlock';
import VoteBlock from 'components/VoteBlock';
import ProfileCell from 'components/ProfileCell';
import Space from 'components/Space';
import Button from 'components/Button';
import ShareIcon from 'images/room/share';
import ViewersIcon from 'images/room/viewers';

const RoomWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 3vw 0 3vw;
  width: 100vw;
  margin: 0 auto;
  max-width: 2000px;

  @media screen and (max-width: 1000px) {
    justify-content: center;
  }
`;

const LeftBlock = styled.div`
  display: flex;
  overflow-y: auto;
  position: relative;
  flex-direction: column;
  left: 0;
  padding: 0 1.5vw 0 0;
  z-index: 9999;
  left: 0;
  width: 70%;

  @media screen and (max-width: 1154px) {
    width: 100%;
    margin: 1rem;
    padding: 0;
    position: relative;
  }
`;

const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  right: 0;
  padding: 0 0 0 1.5vw;

  @media screen and (max-width: 1154px) {
    width: 100%;
    margin: 1rem;
    position: relative;
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

const DescriptionBlock = styled.div`
  height: auto;
  width: 100%;
  border-top: 1px solid #474d90;
  border-bottom: solid 1px #474d90;
  padding: 2rem 0.5rem;
`;

const ButtonWrapper = styled.div`
  height: auto;
`;

const HostWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const ContentWrapper = styled.div`
  padding-right: 0;
`;

const Description = styled.div`
  font-weight: 300;
  margin: 2rem 0;
`;

const ProfileBlock = styled(NavLink)`
  display: flex;
  background-color: #36405b;
  width: 45%;
  min-width: 300px;
  margin: 1rem 0;
`;

const ProfileAvatar = styled.img`
  height: 100%;
  width: 5rem;
`;

const ProfileBlockWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProfileDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  color: #fff;
`;

const ProfileDescriptionTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

const ProfileDescription = styled.div`
  margin: auto;
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
    if (this.state.collapsed) {
      this.setState({ collapsed: false });
    } else {
      this.setState({ collapsed: true });
    }
  }

  render() {
    return (
      <RoomWrapper>
        <OpvSession
              id="opv-session"
          sessionName={mySessionId}
              user={myUserName}
              token={token}
              joinSession={this.handlerJoinSessionEvent}
          leaveSession={this.handlerLeaveSessionEvent}
          error={this.handlerErrorEvent} />
        <LeftBlock>
          <TabBlock />
          <PlayerBlock style={{ width: '1280px', height: '720px' }} />
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
          <Space size="6" />
          <DescriptionBlock>
            <HostWrapper>
              <ProfileCell name="Pynya" rep="200" style={{ marginLeft: '0' }} />
              <ButtonWrapper>
                <Button text="Подписаться" />
              </ButtonWrapper>
            </HostWrapper>
            <ContentWrapper>
              <Description>Краткое описание темы дебатов</Description>
              <ProfileBlockWrapper>
                <ProfileBlock to="/some">
                  <ProfileAvatar src={Place} alt="" />
                  <ProfileDescriptionWrapper>
                    <ProfileDescriptionTitle>Трамп</ProfileDescriptionTitle>
                    <ProfileDescription>
                      Косплеер. Победитель в номинации президент США
                    </ProfileDescription>
                  </ProfileDescriptionWrapper>
                </ProfileBlock>
                <ProfileBlock to="/some">
                  <ProfileAvatar src={Place} alt="" />
                  <ProfileDescriptionWrapper>
                    <ProfileDescriptionTitle>НеТрамп</ProfileDescriptionTitle>
                    <ProfileDescription>
                      НеКосплеер. Проигравшей в номинации президент США
                    </ProfileDescription>
                  </ProfileDescriptionWrapper>
                </ProfileBlock>
              </ProfileBlockWrapper>
              <Description style={{ marginBottom: '0' }}>
                <span style={{ fontWeight: '600' }}>Категория:</span> Политика
              </Description>
            </ContentWrapper>
          </DescriptionBlock>
          <Space size="6" />
        </LeftBlock>
        <RightBlock topOffset={80}>
          <VoteBlock
            collapse={this.collapse}
            collapsed={this.state.collapsed}
          />
          <Space size="2" />
          <ChatBlock collapsed={this.state.collapsed} />
        </RightBlock>
      </RoomWrapper>
    );
  }
}

RoomPage.propTypes = {
  title: PropTypes.string,
  viewers: PropTypes.number,
  collapsed: PropTypes.bool,
};

RoomPage.defaultProps = {
  title: 'Сколько налогов нужно платить?',
  viewers: 500,
};

export default RoomPage;
