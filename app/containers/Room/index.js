import React from 'react';
import PropTypes from 'prop-types';
import PlayerBlock from 'components/PlayerBlock';
import ChatBlock from 'components/ChatBlock';
import TabBlock from 'components/TabBlock';
import VoteBlock from 'components/VoteBlock';
import ViewersIcon from 'images/room/viewers.svg';
import ShareIcon from 'images/room/share.svg';
import VsIcon from 'images/playerblock/vs.svg';
import FirstProfile from './images/1.png';
import SecondProfile from './images/2.png';
import {
  RoomWrapper,
  LeftBlock,
  RightBlock,
  ContentBlockWrapper,
  Title,
  CategoryWrapper,
  CategoryLabel,
  CategoryText,
  CategoryWrap,
  RoomDescription,
  ViewersWrapper,
  Share,
  Line,
  ProfileBlock,
  ProfileBlockWrapper,
  ProfileBlockImage,
  ProfileBlockTitle,
  ProfileBlockContentWrapper,
  ProfileBlockDescription,
  VsIconWrapper,
} from './styles';

const RoomPage = ({
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
}) => (
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

RoomPage.propTypes = {
  title: PropTypes.string,
  viewers: PropTypes.number,
  urlHost: PropTypes.string,
  debateId: PropTypes.string,
  category: PropTypes.string,
  urlOpponent: PropTypes.string,
  description: PropTypes.string,
  hostNickName: PropTypes.string,
  hostDescription: PropTypes.string,
  opponentNickname: PropTypes.string,
  opponentDescription: PropTypes.string,
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
