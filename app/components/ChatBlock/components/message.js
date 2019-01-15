import React from 'react';
import PropTypes from 'prop-types';
import { MessageWrapper, Nickname, Text } from './styles';

const Message = ({ url, nickname, text }) => (
  <MessageWrapper>
    <Nickname to={url}>{nickname}</Nickname>
    <Text>{text}</Text>
  </MessageWrapper>
);

Message.propTypes = {
  url: PropTypes.string,
  nickname: PropTypes.string,
  text: PropTypes.string,
};

export default Message;
