import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Message from './components/message';
import InputForm from './components/inputForm';
import { hideOn, media } from '../../utils/helpers';
import { unit } from '../../utils/constants';

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: calc(100vh - 21vw);
  width: 33vw;
  min-width: 360px;
  padding: 0 ${unit / 3}%;
  ${hideOn} ${media.large`padding: 0 ${3.2 * unit}px;`};

  @media screen and (max-width: 1000px) {
    width: 100%;
    min-width: 100%;
  }
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 2em;
  color: #4a4a4a;
  -webkit-user-select: none;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const MessageBlock = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  max-width: 26vw;
  min-width: 320px;
  height: 470px;

  @media screen and (max-width: 1000px) {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
  }
`;

export default class Chat extends PureComponent {
  render() {
    return (
      <ChatWrapper>
        <Title>Комментарии</Title>
        <MessageBlock>
          <div>
            {this.props.messages.map((item, index) => (
              <Message key={`key${index}`} texts={item} />
            ))}
          </div>
        </MessageBlock>
        <InputForm />
      </ChatWrapper>
    );
  }
}

Chat.propTypes = {
  messsages: PropTypes.array,
};

Chat.defaultProps = {
  messages: [
    {
      url: 'user1',
      nickname: 'Ne yee',
      text: ['Чатик у меня нормальный был?'],
    },
    {
      url: 'user2',
      nickname: 'Yee',
      text: [
        'я просто случайно по рассылке попалала на их сайт и он оказался подходящим',
      ],
    },
    {
      url: 'user1',
      nickname: 'Neyee',
      text: ['Допустим если его перевернуть', 'Как на скилбоксе'],
    },
    {
      url: 'user2',
      nickname: 'Yee',
      text: ['сделай как телега', 'ну только можно без аватаров'],
    },
    {
      url: 'user1',
      nickname: 'Neyee',
      text: ['Допустим если его перевернуть', 'Как на скилбоксе'],
    },
    {
      url: 'user2',
      nickname: 'Yee',
      text: ['сделай как телега', 'ну только можно без аватаров'],
    },
    {
      url: 'user1',
      nickname: 'Neyee',
      text: ['Допустим если его перевернуть', 'Как на скилбоксе'],
    },
    {
      url: 'user2',
      nickname: 'Yee',
      text: ['сделай как телега', 'ну только можно без аватаров'],
    },
    {
      url: 'user1',
      nickname: 'Neyee',
      text: ['Допустим если его перевернуть', 'Как на скилбоксе'],
    },
    {
      url: 'user2',
      nickname: 'Yee',
      text: ['сделай как телега', 'ну только можно без аватаров'],
    },
    {
      url: 'user1',
      nickname: 'Neyee',
      text: ['Допустим если его перевернуть', 'Как на скилбоксе'],
    },
    {
      url: 'user2',
      nickname: 'Yee',
      text: ['сделай как телега', 'ну только можно без аватаров'],
    },
    {
      url: 'user1',
      nickname: 'Neyee',
      text: ['Допустим если его перевернуть', 'Как на скилбоксе'],
    },
    {
      url: 'user2',
      nickname: 'Yee',
      text: ['сделай как телега', 'ну только можно без аватаров'],
    },
  ],
};
