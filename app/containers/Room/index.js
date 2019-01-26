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
import * as Styles from './styles';

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
  <Styles.RoomWrapper>
    <Styles.LeftBlock>
      <TabBlock />
      <PlayerBlock width="902px" />
      <Styles.ContentBlockWrapper>
        <Styles.Title>{title}</Styles.Title>
        <Styles.CategoryWrapper>
          <Styles.CategoryWrap>
            <Styles.CategoryLabel>Категория: </Styles.CategoryLabel>
            <Styles.CategoryText>{category}</Styles.CategoryText>
          </Styles.CategoryWrap>
          <Styles.CategoryWrap>
            <Styles.ViewersWrapper src={ViewersIcon} alt="" />
            <span style={{ marginRight: '10px' }}>{viewers}</span>
            <Styles.Share>
              <img src={ShareIcon} alt="" style={{ marginRight: '5px' }} />
              Поделиться
            </Styles.Share>
          </Styles.CategoryWrap>
        </Styles.CategoryWrapper>
        <Styles.RoomDescription>{description}</Styles.RoomDescription>
        <Styles.Line />
        <Styles.ProfileBlock>
          <Styles.ProfileBlockWrapper to={urlHost}>
            <Styles.ProfileBlockImage src={FirstProfile} alt="" />
            <Styles.ProfileBlockContentWrapper>
              <Styles.ProfileBlockTitle>
                {hostNickName}
              </Styles.ProfileBlockTitle>
              <Styles.ProfileBlockDescription>
                {hostDescription}
              </Styles.ProfileBlockDescription>
            </Styles.ProfileBlockContentWrapper>
          </Styles.ProfileBlockWrapper>
          <Styles.VsIconWrapper src={VsIcon} alt="" />
          <Styles.ProfileBlockWrapper to={urlOpponent}>
            <Styles.ProfileBlockImage src={SecondProfile} alt="" />
            <Styles.ProfileBlockContentWrapper>
              <Styles.ProfileBlockTitle>
                {opponentNickname}
              </Styles.ProfileBlockTitle>
              <Styles.ProfileBlockDescription>
                {opponentDescription}
              </Styles.ProfileBlockDescription>
            </Styles.ProfileBlockContentWrapper>
          </Styles.ProfileBlockWrapper>
        </Styles.ProfileBlock>
      </Styles.ContentBlockWrapper>
    </Styles.LeftBlock>
    <Styles.RightBlock>
      <ChatBlock debateId={debateId} />
      <VoteBlock />
    </Styles.RightBlock>
  </Styles.RoomWrapper>
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
