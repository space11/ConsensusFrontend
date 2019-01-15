import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PlayerBlock from 'components/PlayerBlock';
import ChatBlock from 'components/ChatBlock';
import TabBlock from 'components/TabBlock';
import VoteBlock from 'components/VoteBlock';
import ViewersIcon from 'images/room/viewers.svg';
import ShareIcon from 'images/room/share.svg';
import VsIcon from 'images/playerblock/vs.svg';
import FirstProfile from './images/1.png';
import SecondProfile from './images/2.png';

const RoomWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 131px 59px;
`;

const LeftBlock = styled.div`
  width: 902px;
  margin-right: 15px;
`;

const RightBlock = styled.div`
  width: 388px;
  margin-top: 68px;
  margin-left: 15px;
`;

const ContentBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 36px;
  margin-bottom: 10px;
`;

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CategoryLabel = styled.div`
  font-size: 20px;
  margin-right: 5px;
`;

const CategoryText = styled(CategoryLabel)`
  color: #474d90;
`;

const CategoryWrap = styled.div`
  display: flex;
`;

const RoomDescription = styled.div`
  font-weight: 300;
  font-size: 20px;
  margin-bottom: 20px;
`;

const ViewersWrapper = styled.img`
  margin-right: 5px;
`;

const Share = styled.button`
  cursor: pointer;
`;

const Line = styled.div`
  width: 100%;
  border: 1px solid #474d90;
  margin-bottom: 30px;
`;

const ProfileBlock = styled.div`
  display: flex;
  width: 100%;
`;

const ProfileBlockWrapper = styled(NavLink)`
  display: flex;
  width: 400px;
  height: 130px;
  background: #ffffff;
  border-radius: 5px;
`;

const ProfileBlockImage = styled.img`
  width: 100px;
  height: 130px;
  border-radius: 5px 0 0 5px;
`;

const ProfileBlockTitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  color: #000;
`;

const ProfileBlockContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const ProfileBlockDescription = styled.div`
  font-weight: 300;
  font-size: 14px;
  color: #000;
`;

const VsIconWrapper = styled.img`
  margin: 0 24px;
`;

/* eslint-disable react/prefer-stateless-function */
class RoomPage extends Component {
  // componentDidMount() {
  //   document.getElementById('header').style.display = 'none';
  // }

  render() {
    const {
      title,
      viewers,
      urlHost,
      debateId,
      category,
      urlOpponent,
      description,
      hostNickName,
      hostDescription,
      opponentNickname,
      opponentDescription,
    } = this.props;

    return (
      <RoomWrapper>
        <LeftBlock>
          <TabBlock />
          <PlayerBlock width="902px" />
          <ContentBlockWrapper>
            <Title>{title}</Title>
            <CategoryWrapper>
              <CategoryWrap>
                <CategoryLabel>Категория: </CategoryLabel>
                <CategoryText>{category}</CategoryText>
              </CategoryWrap>
              <CategoryWrap>
                <ViewersWrapper src={ViewersIcon} alt="" />
                <span style={{ marginRight: '10px' }}>{viewers}</span>
                <Share>
                  <img src={ShareIcon} alt="" style={{ marginRight: '5px' }} />
                  Поделиться
                </Share>
              </CategoryWrap>
            </CategoryWrapper>
            <RoomDescription>{description}</RoomDescription>
            <Line />
            <ProfileBlock>
              <ProfileBlockWrapper to={urlHost}>
                <ProfileBlockImage src={FirstProfile} alt="" />
                <ProfileBlockContentWrapper>
                  <ProfileBlockTitle>{hostNickName}</ProfileBlockTitle>
                  <ProfileBlockDescription>
                    {hostDescription}
                  </ProfileBlockDescription>
                </ProfileBlockContentWrapper>
              </ProfileBlockWrapper>
              <VsIconWrapper src={VsIcon} alt="" />
              <ProfileBlockWrapper to={urlOpponent}>
                <ProfileBlockImage src={SecondProfile} alt="" />
                <ProfileBlockContentWrapper>
                  <ProfileBlockTitle>{opponentNickname}</ProfileBlockTitle>
                  <ProfileBlockDescription>
                    {opponentDescription}
                  </ProfileBlockDescription>
                </ProfileBlockContentWrapper>
              </ProfileBlockWrapper>
            </ProfileBlock>
          </ContentBlockWrapper>
        </LeftBlock>
        <RightBlock>
          <ChatBlock debateId={debateId} />
          <VoteBlock />
        </RightBlock>
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
  category: 'Политика',
  description:
    'Банальные, но неопровержимые выводы, а также сделанные на базе интернет-аналитики выводы подвергнуты целой серии независимых исследований. А также интерактивные прототипы освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, представлены в исключительно положительном свете.',
  hostNickName: 'Трамп',
  hostDescription: 'Косплеер. Победитель в номинации президент США',
  opponentDescription: 'НеКосплеер. Проигравший в номинации президент США',
  opponentNickname: 'НеТрамп',
  urlHost: '/asdasd',
  urlOpponent: '/aasda',
  debateId: 'aidajd-aisdjoa-asdad',
};

export default RoomPage;
