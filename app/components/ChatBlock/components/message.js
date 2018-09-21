import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0 0.5rem 0;
`;
const Nickname = styled(Link)`
  color: #474d90;
  text-decoration: none;
  font-weight: 300;
  font-size: 24px;
`;
const Text = styled.text`
  font-size: 20px;
  font-weight: 300;
`;

export default class Message extends PureComponent {
  render() {
    return (
      <MessageWrapper>
        <Nickname to={this.props.url}>{this.props.nickname}</Nickname>
        <Text>{this.props.text}</Text>
      </MessageWrapper>
    );
  }
}

Message.propTypes = {
  text: PropTypes.string,
  nickname: PropTypes.string,
  url: PropTypes.string,
};

Message.defaultProps = {
  nickname: 'Neyee',
  text: 'Чатик у меня нормальный был?',
  url: 'user1',
};
