import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Message from './components/message';
import { hideOn, media } from '../../utils/helpers';
import { unit } from '../../utils/constants';

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: calc(100vh - 21vw);
  padding: 0 ${unit / 3}%;
  ${hideOn} ${media.large`padding: 0 ${3.2 * unit}px;`};
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 2em;
  color: #4a4a4a;
  -webkit-user-select: none;
`;

const MessageBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 397px;
`;

export default class Chat extends PureComponent {
  render() {
    return (
      <ChatWrapper>
        <Title>Комментарии</Title>
        <MessageBlock>{this.props.messages.map(item => item)}</MessageBlock>
      </ChatWrapper>
    );
  }
}

Chat.propTypes = {
  messsages: PropTypes.Array,
};

Chat.defaultProps = {
  messages: [
    <Message />,
    <Message
      url="user2"
      nickname="Yee"
      text="я просто случайно по рассылке попалала на их сайт и он оказался подходящим"
    />,
  ],
};
